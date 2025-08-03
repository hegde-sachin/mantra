import { Panchanga } from "@/interfaces/panchanga";

import clientPromise from "./mongodb";

const TWO_HOURS_MS = 2 * 60 * 60 * 1000;

interface PanchangaDoc {
  _id: string;
  panchanga: Panchanga;
  updatedAt: Date;
}

/**
 * Fetches from external API. Adjust payload/headers for the real API.
 */
async function fetchFromAPI(): Promise<Panchanga> {
  const now = new Date();
  const [year, month, date, hours, minutes, seconds] = [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];

  const apiEndpoints = [
    "samvatinfo",
    "aayanam",
    "rituinfo",
    "lunarmonthinfo",
    "tithi-durations",
    "vedicweekday",
  ];

  const requestBody = {
    year,
    month,
    date,
    hours,
    minutes,
    seconds,
    latitude: 12.97194,
    longitude: 77.59369,
    timezone: 8,
    config: {
      observation_point: "geocentric" /* topocentric / geocentric */,
      ayanamsha: "lahiri" /* lahiri / sayana */,
    },
  };

  const responses = await Promise.all(
    apiEndpoints.map((url) =>
      fetch(`https://json.freeastrologyapi.com/${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.API_KEY!,
        },
        body: JSON.stringify(requestBody),
        next: { revalidate: 3600 },
      })
    )
  );

  const panchanga: Panchanga = Object.assign(
    {},
    ...(await Promise.all(
      responses.map(async (res, index) => {
        const output = (await res.json()).output;

        if (!output) return {};

        switch (index) {
          case 0:
            return {
              samvatsara: JSON.parse(output).saka_salivahana_year_name,
            };
          case 1:
            return {
              ayana: JSON.parse(output).aayanam,
            };
          case 2:
            return {
              rutu: output.name,
            };
          case 3:
            return {
              maasa: JSON.parse(output).lunar_month_name,
            };
          case 4:
            return {
              paksha: JSON.parse(output).paksha,
              thithi: JSON.parse(output).name,
            };
          case 5:
            return {
              vaara: output.weekday_name,
            };
        }
      })
    ))
  );

  return panchanga;
}

/**
 * Retrieves cached data if fresh, otherwise refreshes from API and upserts.
 */
export async function getPanchangaData() {
  const client = await clientPromise;
  const db = client.db(); // uses default DB in URI
  const collection = db.collection<PanchangaDoc>("panchangaDoc");

  const now = new Date();
  const existing = await collection.findOne({ _id: "singleton" });

  if (existing) {
    const age = now.getTime() - existing.updatedAt.getTime();
    if (age < TWO_HOURS_MS) {
      return existing.panchanga;
    }
  }

  const freshData = await fetchFromAPI();

  await collection.updateOne(
    { _id: "singleton" },
    {
      $set: {
        panchanga: freshData,
        updatedAt: now,
      },
    },
    { upsert: true }
  );

  return freshData;
}

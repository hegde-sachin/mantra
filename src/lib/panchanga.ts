import { VAARA } from "@/constants/vaara";
import { Panchanga } from "@/interfaces/panchanga";

import clientPromise from "./mongodb";

const TWO_HOURS_MS = 2 * 60 * 60 * 1000 + 24 * 60 * 1000; // 2 hours and 24 minutes

interface PanchangaDoc {
  _id: string;
  panchanga: Panchanga;
  updatedAt: Date;
}

/**
 * Safely parses JSON, handling double-encoded strings.
 * Returns null if parsing fails.
 */
function safeJSONParse(response: string) {
  try {
    let parsed = JSON.parse(response);

    // If it's still a string, parse again
    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed);
    }

    return parsed;
  } catch (e) {
    console.error("Invalid JSON:", e);
    return null;
  }
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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const apiEndpoints = [
    "samvatinfo",
    "aayanam",
    "rituinfo",
    "lunarmonthinfo",
    "tithi-durations",
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

        const respnseData = index === 2 ? output : safeJSONParse(output);

        switch (index) {
          case 0:
            return {
              samvatsara: respnseData.saka_salivahana_year_name,
            };
          case 1:
            return {
              ayana: respnseData.aayanam,
            };
          case 2:
            return {
              rutu: respnseData.name,
            };
          case 3:
            return {
              maasa: respnseData.lunar_month_name,
            };
          case 4:
            return {
              paksha: respnseData.paksha,
              thithi: respnseData.name,
            };
        }
      })
    ))
  );

  return { ...panchanga, vaara: days[now.getDay()] as keyof typeof VAARA };
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

import { ContentComponent } from "@/components/content.component";
import { AYANA } from "@/constants/ayana";
import { MAASA } from "@/constants/maasa";
import { PAKSHA } from "@/constants/paksha";
import { RUTU } from "@/constants/rutu";
import { SAMVATSARA } from "@/constants/samvatsara";
import { THITHI } from "@/constants/thithi";
import { VAARA } from "@/constants/vaara";
import { Content } from "@/interfaces/content";

type Panchanga = {
  samvatsara: keyof typeof SAMVATSARA;
  ayana: keyof typeof AYANA;
  rutu: keyof typeof RUTU;
  maasa: keyof typeof MAASA;
  paksha: keyof typeof PAKSHA;
  thithi: keyof typeof THITHI;
  vaara: keyof typeof VAARA;
};

export default async function Sandhyavandane() {
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

  const samvatsara = SAMVATSARA[panchanga.samvatsara] || "---";
  const ayana = AYANA[panchanga.ayana] || "---";
  const rutu = RUTU[panchanga.rutu] || "---";
  const maasa = MAASA[panchanga.maasa] || "---";
  const paksha = PAKSHA[panchanga.paksha];
  const thithi = THITHI[panchanga.thithi];
  const vaara = VAARA[panchanga.vaara];

  const contents: Array<Content> = [
    {
      title: "ಪ್ರಾರ್ಥನೆ",
      details: [
        {
          paragraph:
            "ಗುರುಬ್ರಹ್ಮ ಗುರುರ್ವಿಷ್ಣೋ ಗುರರ್ದೇವೋ ಮಹೇಶ್ವರಃ | ಗುರು ಸಾಕ್ಷಾತ್ ಪರಬ್ರಹ್ಮ ತಸ್ಮೈ ಶ್ರೀ ಗುರವೇ ನಮಃ||",
        },
      ],
    },
    {
      title: "ಆಚಮ್ಯ",
      details: [
        {
          paragraph:
            "ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಸಾಮ ವೇದಾಯ ಸ್ವಾಹಾ ||",
        },
        {
          paragraph:
            "ಓಂ ಅಪವಿತ್ರಃ ಪವಿತ್ರೋ ವಾ ಸರ್ವಾವಸ್ಥಾಂಗತೋಪಿ ವಾ | ಯಃ ಸ್ಮರೇತ್ ಪುಂಡರೀಕಾಕ್ಷಂ ಸ ಬಾಹ್ಯಾಭ್ಯಂತರಃ ಶುಚಿಃ ||",
        },
      ],
    },
    {
      title: "ಭಸ್ಮ ಧಾರಣಂ",
      details: [
        {
          paragraph:
            "ಸದ್ಯೋಜಾತಂ ಪ್ರಪದ್ಯಾಮಿ ಸದ್ಯೋಜಾತಾಯ ವೈ ನಮೋ ನಮಃ । ಭವೇ ಭವೇ ನಾತಿ ಭವೇ ಭವಸ್ವ ಮಾಂ ಭವೋದ್ಭವಾಯ ನಮಃ॥",
        },
        {
          paragraph:
            "ವಾಮದೇವಾಯನಮೋ ಜ್ಯೇಷ್ಠಾಯ ನಮಃ ಶ್ರೇಷ್ಠಾಯ ನಮೋ ರುದ್ರಾಯ ನಮಃ ಕಾಲಾಯ ನಮಃ । ಕಲಾವಿಕರಣಾಯ ನಮೋ ಬಲವಿಕರಣಾಯ ನಮೋ ಬಲಾಯ ನಮೋ ಬಲಪ್ರಮಥನಾಯ ನಮಃ । ಸರ್ವಭೂತದಮನಾಯ ನಮೋ ಮನೋನ್ಮನಾಯ ನಮಃ॥",
        },
        {
          paragraph:
            "ಅಘೋರೇಭ್ಯೋತ್ಥ ಘೋರೇಭ್ಯೋ ಅಘೋರಘೋರೇತರೇಭ್ಯಃ । ಸರ್ವತಃ ಶರ್ವಃ ಸರ್ವೇಭ್ಯೋ ನಮಸ್ತೇ ರುದ್ರ ರೂಪೇಭ್ಯಃ॥",
        },
        {
          paragraph:
            "ತತ್ಪುರುಷಾಯ ವಿದ್ಮಹೇ ಮಹಾದೇವಾಯ ಧೀಮಹಿ । ತನ್ನೋ ರುದ್ರಃ ಪ್ರಚೋದಯಾತ್॥",
        },
        {
          paragraph:
            "ಈಶಾನ್ ಸರ್ವವಿದ್ಯಾನಾಮೀಶ್ವರಃ ಸರ್ವಭೂತಾನಾಂ ಬ್ರಹ್ಮಾದಿಪತಿ ಬ್ರಹ್ಮಣೋರ್ಧಿಪತಿ । ಬ್ರಹ್ಮ ಶಿವೋ ಮೇ ಅಸ್ತು ಸ ಏವ ಸದಾಶಿವ ಓಂ॥",
        },
        {
          paragraph:
            "ಓಂ ತ್ರ್ಯಂಬಕಂ ಯಜಾಮಹೇ ಸುಗಂಧಿಂ ಪುಷ್ಟಿ ವರ್ಧನಂ || ಊರ್ವಾರುಕಮಿವ ಬಂಧನಾನ್ಮ ತ್ಯೊ ರ್ಮುಕ್ಷೀಯ ಮಾ ಮೃತಾತ್ ||",
        },
        {
          paragraph:
            "ಅಗ್ನಿರಿತಿ ಭಸ್ಮ | ವಾಯುರಿತಿಭಸ್ಮ | ಜಲಮಿತಿಭಸ್ಮ | ವ್ಯೋಮೇತಿ ಭಸ್ಮ||",
        },
      ],
    },
    {
      title: "ಪ್ರಾಣಾಯಾಮ",
      details: [
        {
          list: [
            "ಓಂ ಪ್ರಣವಸ್ಯ ಪರಬ್ರಹ್ಮ ಋಷಿಃ| (ಇತಿ ಸಿರ್ಸಿ)",
            "ಗಾಯತ್ರೀ ಛಂದಃ| (ಇತಿ ಮುಖೇ)",
            "ಪರಮಾತ್ಮಾ ದೇವತಾ| (ಇತಿ ಜಠರೇ)",
            "ಪ್ರ್ರಾಣಾಯಾಮೇ ವಿನಿಯೋಗಃ||",
          ],
        },
        {
          list: [
            "ಓಂ ಭೂಃ| (ಇತಿ ಪಾದಯೋಃ)",
            "ಓಂ ಭುವಃ| (ಇತಿ ಜಾನುನೋಃ)",
            "ಓಂ ಸುವಃ| (ಇತಿ ಊರ್ವೋಃ)",
            "ಓಂ ಮಹಃ| (ಇತಿ ಜಠರೇ)",
            "ಓಂ ಜನಃ| (ಇತಿ ಕಂಠೇ)",
            "ಓಂ ತಪಃ| (ಇತಿ ಮುಖೇ)",
            "ಓಗ್ಂ ಸತ್ಯಂ| (ಇತಿ ಸಿರ್ಸಿ)",
          ],
        },
        {
          paragraph:
            "ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ|| ಓಂ ತತ್ಸವಿತುರ್ವರೇಣಿಯಂ ಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ ಧಿಯೋ ಯೋನಃ ಪ್ರಚೋದಯಾತ್||",
        },
      ],
    },
    {
      title: "ಸಂಕಲ್ಪ",
      details: [
        {
          paragraph: `ವಿಷ್ಣೋ ವಿಷ್ಣೋ ರಾಜ್ಞಯಾ ಪ್ರವರ್ತಮಾನಸ್ಯ ಆದ್ಯ ಬ್ರಹ್ಮಣಃ , ದ್ವಿತೀಯ ಪರಾರ್ಧೇ, ಶ್ರೀಹರೇಃ, ಶ್ವೇತ ವರಾಹ ಕಲ್ಪೇ, ವೈವಸ್ವತ ಮನ್ವಂತರೇ, ಕಲಿಯುಗೇ,ಪ್ರಥಮ ಪಾದೇ, ಜಂಬೂ ದ್ವೀಪೇ, ಭರತ ಖಂಡೇ, ಭಾರತ ವರ್ಷೇ, ಶ್ರೀಮದ್ ಗೋದಾವರ್ಯಾಂ, ದಕ್ಷಿಣ ತೀರೇ, ಗೋಕರ್ಣ ಮಂಡಲೇ, ಗೋ ರಾಷ್ಟ್ರ ದೇಶೇ, ಭಾಸ್ಕರ ಕ್ಷೇತ್ರೇ, ಸಹ್ಯ ಪರ್ವತೇ, ಶಾಲಿವಾಹನ ಶಕಾಬ್ಧೇ, ಅಸ್ಮಿನ್ ವರ್ತಮಾನ ಕಾಲೇ, ವ್ಯವಹಾರಿಕೇ, ${samvatsara} ನಾಮ ಸಂವತ್ಸರೇ, ${ayana} ಅಯನೇ, ${rutu} ಋತೌ, ${maasa} ಮಾಸೇ, ${paksha} ಪಕ್ಷೇ, ${thithi} ತಿಥೌ, ${vaara} ವಾಸರೇ, ಶುಭ ಯೋಗ, ಶುಭ ಕರಣ, ಏವಂ ಗುಣ ವಿಶೇಷಣ ವಿಶಿಷ್ಟಾಯಾಂ, ಪುಣ್ಯಯಾಂ ಪುಣ್ಯ ಕಾಲೇ , ಮಮೋಪಾತ್ತ ದುರಿತ ಕ್ಷಯ ದ್ವಾರಾ, ಶ್ರೀ ಪರಮೇಶ್ವರ ಪ್ರೀತ್ಯರ್ಥಂ ಪ್ರಾತರ್ / ಸಾಯಂ ಸಂಧ್ಯಾಮುಪಾಸ್ಯೆ`,
        },
      ],
    },
    {
      title: "ಶುದ್ಧೀಕರಣ",
      details: [
        {
          list: [
            "ಓಂ ಆಪೋಹಿಷ್ಠಾ ಮಯೋ ಭುವಃ|",
            "ತಾನ ಊರ್ಜೆ ದದಾತನ |",
            "ಮಹೇರಣಾಯ ಚಕ್ಷಸೇ|",
            "ಯೋವಃ ಶಿವತಮೋ ರಸಃ|",
            "ತಸ್ಯ ಭಾಜಯತೇ ಹನಃ|",
            "ಉಶತೀರಿವ ಮಾತರಃ |",
            "ತಸ್ಮಾ ಅರಂಗ ಮಾಮವಃ|",
            "ಯಸ್ಯ ಕ್ಷಯಾಯ ಜಿನ್ವಥಃ",
            "ಆಪೋ ಜನಯ ಥಾ ಚ ನಃ|",
          ],
        },
      ],
    },
    {
      title: "ಗಾಯತ್ರೀ ಜಪ",
      details: [
        {
          paragraph:
            "ಓಂ ಭೂರ್ಭುವಸ್ಸುವಃ || ಓಂ ತತ್ಸವಿತುವರೇಣ್ಯಂ ಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ ಧಿಯೋ ಯೋನಃ ಪ್ರಚೋದಯಾತ್ ||",
        },
        {
          paragraph: "ಶ್ರೀ ಗಾಯತ್ರೀ ಜಪಂ ಶ್ರೀ ಪರಮೇಶ್ವರ ಪ್ರೀಯತಾಂ ||",
        },
        {
          paragraph:
            "ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಸಾಮ ವೇದಾಯ ಸ್ವಾಹಾ|| ಓಂ ಋಗ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಯಜುರ್ವೇದಾಯ ಸ್ವಾಹಾ | ಓಂ ಸಾಮ ವೇದಾಯ ಸ್ವಾಹಾ ||",
        },
        {
          paragraph: "ಓಂ ತತ್ಸತ್",
        },
      ],
    },
  ];

  return <ContentComponent contents={contents} />;
}

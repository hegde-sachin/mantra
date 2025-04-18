import { ContentComponent } from "@/components/content.component";
import { Content } from "@/interfaces/content";

export default async function PurushaSukta() {
  const contents: Array<Content> = [
    {
      details: [
        {
          paragraph:
            "ಓಂ ಸಹಸ್ರಶೀರ್ಷಾ ಪುರುಷಃ | ಸಹಸ್ರಾಕ್ಷಃ ಸಹಸ್ರಪಾತ್‌ | ಸ ಭೂಮಿಂ ವಿಶ್ವತೋ ವೃತ್ವಾ | ಅತ್ಯತಿಷ್ಠದ್ದಶಾಂಗುಲಮ್‌ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಪುರುಷ ಏವೇದಗ್‌ಂ ಸರ್ವಮ್ | ಯದ್ಭೂತಂ ಯಚ್ಚ ಭವ್ಯಮ್ |ಉತಾಮೃತತ್ವಸ್ಯೇಶಾನಃ | ಯದನ್ನೇನಾತಿರೋಹತಿ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಏತಾವಾನಸ್ಯ ಮಹಿಮಾ | ಅತೋ ಜ್ಯಾಯಾಗ್‌ಶ್ಚ ಪೂರುಷಃ |ಪಾದೋಽಸ್ಯ ವಿಶ್ವಾ ಭೂತಾನಿ | ತ್ರಿಪಾದಸ್ಯಾಮೃತಂ ದಿವಿ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತ್ರಿಪಾದೂರ್ಧ್ವ ಉದೈತ್ಪುರುಷಃ | ಪಾದೋಽಸ್ಯೇಹಾಽಭವಾತ್ಪುನಃ |ತತೋ ವಿಷ್ವಙ್‌ವ್ಯಕ್ರಾಮತ್‌ | ಸಾಶನಾನಶನೇ ಅಭಿ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತಸ್ಮಾದ್ವಿರಾಳಜಾಯತ | ವಿರಾಜೋ ಅಧಿ ಪೂರುಷಃ |ಸ ಜಾತೋ ಅತ್ಯರಿಚ್ಯತ | ಪಶ್ಚಾದ್ಭೂಮಿಮಥೋ ಪುರಃ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಯತ್ಪುರುಷೇಣ ಹವಿಷಾ | ದೇವಾ ಯಜ್ಞಮತನ್ವತ |ವಸಂತೋ ಅಸ್ಯಾಸೀದಾಜ್ಯo | ಗ್ರೀಷ್ಮ ಇಧ್ಮಶ್ಶರದ್ಧವಿಃ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಸಪ್ತಾಸ್ಯಾಸನ್‌ ಪರಿಧಯಃ | ತ್ರಿಃ ಸಪ್ತ ಸಮಿಧಃ ಕೃತಾಃ |ದೇವಾ ಯದ್ಯಜ್ಞಂ ತನ್ವಾನಾಃ | ಅಬಧ್ನನ್‌ ಪುರುಷಂ ಪಶುಮ್‌ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತಂ ಯಜ್ಞಂ ಬರ್ಹಿಷಿ ಪ್ರೌಕ್ಷನ್‌ | ಪುರುಷಂ ಜಾತಮಗ್ರತಃ |ತೇನ ದೇವಾ ಅಯಜಂತ | ಸಾಧ್ಯಾ ಋಷಯಶ್ಚ ಯೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತಸ್ಮಾದ್ಯಜ್ಞಾಥ್ಸರ್ವಹುತಃ | ಸಂಭೃತಂ ಪೃಷದಾಜ್ಯಮ್‌ |ಪಶೂಗ್‌ಸ್ತಾಗ್‌ಶ್ಚಕ್ರೇ ವಾಯವ್ಯಾನ್‌ | ಆರಣ್ಯಾನ್‌ ಗ್ರಾಮ್ಯಾಶ್ಚ ಯೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತಸ್ಮಾದ್ಯಜ್ಞಾಥ್ಸರ್ವ ಹುತಃ | ಋಚಃ ಸಾಮಾನಿ ಜಜ್ಞಿರೇ |ಛಂದಾಗ್‌ಂಸಿ ಜಜ್ಞಿರೇ ತಸ್ಮಾತ್‌ | ಯಜುಸ್ತಸ್ಮಾದಜಾಯತ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ತಸ್ಮಾದಶ್ವಾ ಅಜಾಯಂತ | ಯೇ ಕೇ ಚೋಭಯಾದತಃ |ಗಾವೋ ಹ ಜಜ್ಞಿರೇ ತಸ್ಮಾತ್‌ | ತಸ್ಮಾಜ್ಜಾತಾ ಅಜಾವಯಃ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಯತ್ಪುರುಷಂ ವ್ಯದಧುಃ | ಕತಿಧಾ ವ್ಯಕಲ್ಪಯನ್‌ |ಮುಖಂ ಕಿಮಸ್ಯ ಕೌ ಬಾಹೂ | ಕಾವೂರೂ ಪಾದಾವುಚ್ಯೇತೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಬ್ರಾಹ್ಮಣೋಽಸ್ಯ ಮುಖಮಾಸೀತ್ | ಬಾಹೂ ರಾಜನ್ಯಃ ಕೃತಃ |ಊರೂ ತದಸ್ಯ ಯದ್ವೈಶ್ಯಃ | ಪದ್ಭ್ಯಾಗ್‌ಂ ಶೂದ್ರೋ ಅಜಾಯತ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಚಂದ್ರಮಾ ಮನಸೋ ಜಾತಃ | ಚಕ್ಷೋಃ ಸ್ಸೂರ್ಯೋ ಅಜಾಯತ |ಮುಖಾದಿಂದ್ರಶ್ಚಾಗ್ನಿಶ್ಚ | ಪ್ರಾಣಾದ್ವಾಯುರಜಾಯತ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ನಾಭ್ಯಾ ಆಸೀದಂತರಿಕ್ಷಮ್‌ | ಶೀರ್ಷ್ಣೋ ದ್ಯೌಃ ಸಮವರ್ತತ |ಪದ್ಭ್ಯಾಂ ಭೂಮಿರ್ದಿಶಃ ಶ್ರೋತ್ರಾತ್‌ | ತಥಾ ಲೋಕಾಗ್‌ಂ ಅಕಲ್ಪಯನ್‌ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ವೇದಾಹಮೇತಂ ಪುರುಷಂ ಮಹಾಂತಮ್ | ಆದಿತ್ಯವರ್ಣಂ ತಮಸಸ್ತುಪಾರೇ |ಸರ್ವಾಣಿ ರೂಪಾಣಿ ವಿಚಿತ್ಯ ಧೀರಃ | ನಾಮಾನಿ ಕೃತ್ವಾಽಭಿವದನ್‌ , ಯದಾಸ್ತೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಧಾತಾ ಪುರಸ್ತಾದ್ಯಮುದಾಜಹಾರ | ಶಕ್ರಃ ಪ್ರವಿದ್ವಾನ್‌ ಪ್ರದಿಶಶ್ಚತಸ್ರಃ |ತಮೇವಂ ವಿದ್ವಾನಮೃತ ಇಹ ಭವತಿ | ನಾನ್ಯಃ ಪಂಥಾ ಅಯನಾಯ ವಿದ್ಯತೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಯಜ್ಞೇನ ಯಜ್ಞಮಯಜಂತ ದೇವಾಃ | ತಾನಿ ಧರ್ಮಾಣಿ ಪ್ರಥಮಾನ್ಯಾಸನ್‌ |ತೇ ಹ ನಾಕಂ ಮಹಿಮಾನಃ ಸಚಂತೇ | ಯತ್ರ ಪೂರ್ವೇ ಸಾಧ್ಯಾಸ್ಸಂತಿ ದೇವಾಃ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಅದ್ಭ್ಯಸ್ಸಂಭೂತಃ ಪೃಥಿವ್ಯೈ ರಸಾಚ್ಚ | ವಿಶ್ವಕರ್ಮಣಃ ಸಮವರ್ತತಾಧಿ |ತಸ್ಯ ತ್ವಷ್ಟಾ ವಿದಧದ್ರೂಪಮೇತಿ | ತತ್ಪುರುಷಸ್ಯ ವಿಶ್ವಮಾಜಾನಮಗ್ರೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ವೇದಾಹಮೇತಂ ಪುರುಷಂ ಮಹಾಂತಮ್ | ಆದಿತ್ಯವರ್ಣಂ ತಮಸಃ ಪರಸ್ತಾತ್‌ |ತಮೇವಂ ವಿದ್ವಾನಮೃತ ಇಹ ಭವತಿ | ನಾನ್ಯಃ ಪಂಥಾ ವಿದ್ಯತೇಽಯನಾಯ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಪ್ರಜಾಪತಿಶ್ಚರತಿ ಗರ್ಭೇ ಅಂತಃ | ಅಜಾಯಮಾನೋ ಬಹುಧಾ ವಿಜಾಯತೇ |ತಸ್ಯ ಧೀರಾಃ ಪರಿಜಾನಂತಿ ಯೋನಿO | ಮರೀಚೀನಾಂ ಪದಮಿಚ್ಛಂತಿ ವೇಧಸಃ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಯೋ ದೇವೇಭ್ಯ ಆತಪತಿ | ಯೋ ದೇವಾನಾO ಪುರೋಹಿತಃ |ಪೂರ್ವೋ ಯೋ ದೇವೇಭ್ಯೋ ಜಾತಃ | ನಮೋ ರುಚಾಯ ಬ್ರಾಹ್ಮಯೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ರುಚಂ ಬ್ರಾಹ್ಮಂ ಜನಯಂತಃ | ದೇವಾ ಅಗ್ರೇ ತದಬ್ರುವನ್‌ |ಯಸ್ತ್ವೈವಂ ಬ್ರಾಹ್ಮಣೋ ವಿದ್ಯಾತ್‌ | ತಸ್ಯ ದೇವಾ ಅಸನ್ವಶೇ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಹ್ರೀಶ್ಚತೇ ಲಕ್ಷ್ಮೀಶ್ಚ ಪತ್ನ್ಯೌ| ಅಹೋರಾತ್ರೇ ಪಾರ್ಶ್ವೇ |ನಕ್ಷತ್ರಾಣಿ ರೂಪಮ್‌ | ಅಶ್ವಿನೌ ವ್ಯಾತ್ತಮ್|ಇಷ್ಟಂ ಮನಿಷಾಣ | ಅಮುಂ ಮನಿಷಾಣ | ಸರ್ವಂ ಮನಿಷಾಣ ||",
        },
      ],
    },
    {
      details: [
        {
          paragraph:
            "ಓಂ ತಚ್ಛಂ ಯೋರಾವೃಣೀಮಹೇ | ಗಾತುಂ ಯಜ್ಞಾಯ | ಗಾತುಂ ಯಜ್ಞಪತಯೇ | ದೈವೀ ಸ್ವಸ್ತಿರಸ್ತು ನಃ |ಸ್ವಸ್ತಿರ್ಮಾನುಷೇಭ್ಯಃ | ಊರ್ಧ್ವಂ ಜಿಗಾತು ಭೇಷಜಮ್‌ | ಶಂ ನೋ ಅಸ್ತು ದ್ವಿಪದೇ | ಶಂ ಚತುಷ್ಪದೇ || ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ ||",
        },
      ],
    },
  ];

  return <ContentComponent contents={contents} />;
}

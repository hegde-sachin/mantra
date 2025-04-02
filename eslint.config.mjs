import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const compat = new FlatCompat();

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000"],
            ["^react$", "^@?\\w"],
            ["^@", "^"],
            ["^\\./"],
            ["^.+\\.(module.css|module.scss)$"],
            ["^.+\\.(gif|png|svg|jpg)$"],
          ],
        },
      ],
    },
  },
];

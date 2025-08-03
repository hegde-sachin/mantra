import { AYANA } from "@/constants/ayana";
import { MAASA } from "@/constants/maasa";
import { PAKSHA } from "@/constants/paksha";
import { RUTU } from "@/constants/rutu";
import { SAMVATSARA } from "@/constants/samvatsara";
import { THITHI } from "@/constants/thithi";
import { VAARA } from "@/constants/vaara";

export type Panchanga = {
  samvatsara: keyof typeof SAMVATSARA;
  ayana: keyof typeof AYANA;
  rutu: keyof typeof RUTU;
  maasa: keyof typeof MAASA;
  paksha: keyof typeof PAKSHA;
  thithi: keyof typeof THITHI;
  vaara: keyof typeof VAARA;
};

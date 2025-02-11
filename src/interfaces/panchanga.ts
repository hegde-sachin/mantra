interface Tithi {
    name: string;
    key: string;
    end_time: number;
    start_time: number;
  }
  
  interface Nakshatra {
    name: string;
    key: string;
    end_time: number;
    start_time: number;
  }
  
  interface Year {
    name: string;
    key: string;
    year: number;
  }
  
  interface SunMoon {
    rise: number;
    set: number;
  }
  
  interface Muhurat {
    name: string;
    key: string;
    end_time: number;
    start_time: number;
  }
  
  interface Ritu {
    name: string;
    key: string;
    sub_text: string;
  }
  
  interface Vaara {
    name: string;
    key: string;
    sub_text: string;
  }
  
  interface Karana {
    name: string;
    key: string;
    end_time: number;
    start_time: number;
  }
  
  interface Yoga {
    name: string;
    key: string;
    end_time: number;
    start_time: number;
  }
  
  interface Prarthana {
    id: string;
    title: string;
    image_url: string;
    banner_image_url: string;
    duration: string;
    days: number[];
    is_audio_available: boolean;
    ui_info: {
      image_url: string;
      banner_image_url: string;
    };
    audio_url: string;
    observance_day_id: string;
  }
  
  interface Rashi {
    moon: {
      name: string;
      key: string;
      end_time: number;
      start_time: number;
    }[];
    sun: {
      name: string;
      key: string;
      end_time: number;
      start_time: number;
    }[];
  }
  
  interface Panchanga {
    tithi: Tithi[];
    nakshatra: Nakshatra[];
    ayana: {
      name: string;
      key: string;
    };
    paksha_v1: {
      name: string;
      key: string;
    };
    shubh_karyas: string[];
    paksha: string;
    sun: SunMoon;
    moon: SunMoon;
    masa: {
      amanta: string;
      purnima: string;
    };
    years: {
      vikram: Year;
      saka: Year;
      kali: Year;
    };
    muhurat: {
      auspicious: Muhurat[];
      inauspicious: Muhurat[];
    };
    ritu: Ritu;
    vaara: Vaara;
    karana: Karana[];
    yoga: Yoga[];
    observances: unknown;
    prarthanas: Prarthana[];
    rashi: Rashi;
  }
  
  export interface PanchangaResponse {
    data: Panchanga;
    message: string;
    status: number;
  }
  
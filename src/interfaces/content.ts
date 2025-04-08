interface ContentDetail {
  paragraph?: string;
  list?: Array<string>;
}

export interface Content {
  title?: string;
  details: Array<ContentDetail>;
}

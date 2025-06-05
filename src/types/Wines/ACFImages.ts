export interface ACFImage {
    id: number;
    url: string;
    alt?: string;
    sizes?: {
      thumbnail?: string;
      medium?: string;
      large?: string;
      [key: string]: string | undefined;
    };
  }
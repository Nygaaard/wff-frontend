// Interface för About-sektionen på startsida
export interface HomePageAboutSection {
  title: string;
  subtitle: string;
  content: string;
  image: {
    url: string;
    alt?: string;
  };
}
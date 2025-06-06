export interface HomePageAboutSection {
  title: string;
  subtitle: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
  instagram_images?: {
    image: {
      url: string;
      alt: string;
    };
  }[];
}

export interface WineProps {
  id: number;
  slug: string;
  featured_image_url: string;
  title: {
    rendered: string;
  };
  wff_producent: string;
  wff_pris: string;
  wff_kategori: string;
}

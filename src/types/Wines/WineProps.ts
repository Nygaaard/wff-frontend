export interface WineProps {
  id: number;
  slug: string;
  featured_image_url: string;
  title: {
    rendered: string;
  };
  wff_producent: {
    id: number;
    title: string;
  };  
  wff_pris: string;
  wff_kategori: string;
  wff_varugrupp?: string;
  wff_land?: string;
  wff_druva?: string;

}

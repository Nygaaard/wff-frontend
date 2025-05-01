export interface WineI {
  id: number;
  title: {
    rendered: string;
  };
  wff_pris: string;
  wff_producent: {
    id: number;
    title: string;
  }; 
  wff_alkohol?: string;
  wff_artnr_systembolaget?: string;
  wff_beskrivning?: string;
  wff_bestallning?: string;
  wff_distrikt?: string;
  wff_druva?: string;
  wff_jordmon?: string;
  wff_kategori?: string;
  wff_land?: string;
  wff_region?: string;
  wff_dosage?: string;
  wff_servera_till?: string;
  wff_servering?: string;
  wff_storlek?: string;
  wff_vinifikation?: string;
  wff_systembolaget_url?: string;
  featured_image_url?: string;
  wff_varugrupp?: string;
}

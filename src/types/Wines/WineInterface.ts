export interface WineI {
  id: number;
  title: {
    rendered: string;
  };
  wff_pris: string;
  wff_producent: string;
  wff_argang?: number; 
  wff_alkohol?: string;
  wff_land?: string;
  wff_region?: string;
  wff_distrikt?: string;
  wff_druva?: string;
  wff_jordmon?: string;
  wff_vinifikation?: string;
  wff_beskrivning?: string;
  wff_servera_till?: string;
  wff_servering?: string;
  wff_storlek?: string;
  wff_kategori?: string;
  wff_artnr_systembolaget?: string;
  wff_bestallning?: string;
  wff_dosage?: string;
  wff_varugrupp?: string;
  wff_systembolaget_url?: string;
  featured_image_url?: string;
}

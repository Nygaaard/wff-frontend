// src/types/Interfaces-wp/Instagram.ts

export interface InstagramImageField {
  image: {
    url: string;
    alt: string;
  };
}

export interface InstagramPageAcf {
  instagram_images: InstagramImageField[];
}

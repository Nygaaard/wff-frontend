export interface ImageField {
  url: string;
  alt: string;
}

export interface AboutPageData {
  about_heading: string;
  about_paragraph_one: string;
  about_image_one?: ImageField;
  about_image_two?: ImageField;
  about_image_three?: ImageField;
  about_paragraph_two: string;
  about_producers: string;
  about_signature: string;
}
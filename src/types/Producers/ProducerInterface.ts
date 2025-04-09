export interface ProducerI {
  id: number;
  key: number;
  featured_image_url?: string;
  title: {
    rendered: string;
  };
    producer_description: string;
    slug: string;
}
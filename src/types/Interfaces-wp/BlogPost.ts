export interface BlogPost {
  id: number;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  featured_media: number;
  imageUrl?: string;
}
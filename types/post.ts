export interface Post {
  id: number;
  title: string;
  slug: string;
  body: string;
  excerpt: string;
  _createdAt: string;
  topics: Topic[];
}

export type Topic = {
  id: string;
  name: string;
  fontIsLight: boolean;
  brandColor: BrandColor;
}

type BrandColor = {
  hex: string;
}
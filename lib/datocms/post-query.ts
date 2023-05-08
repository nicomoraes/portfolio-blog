import { Post } from "@/types/post";

import { formatDate } from "../utils";
import { request } from "./index";

interface PostCMSData {
  post: Post;
}

const POST_QUERY = `query Post_Query($slug: String) {
  post(filter: {slug: {eq: $slug}, published: {eq: "true"}}) {
    id
    title
    slug
    excerpt
    body(markdown: false)
    _createdAt
  }
}`;

export const getPostData = async (slug: string) => {
  try {
    const data = await request<PostCMSData>({
      query: POST_QUERY,
      variables: { slug: slug },
    });
    data.post._createdAt = formatDate(data.post._createdAt);
    return data.post;
  } catch (error) {
    console.log(error);
  }
};

type Slug = {
  slug: Pick<Post, "slug">;
};

interface SlugCMSData {
  allPosts: Slug[];
}

const SLUG_QUERY = `query Post_Query {
  allPosts(filter: {published: {eq: "true"}}) {
    slug
  }
}`;

export const getPostSlug = async () => {
  try {
    const data = await request<SlugCMSData>({ query: SLUG_QUERY });
    return data.allPosts;
  } catch (error) {
    console.log(error);
  }
};

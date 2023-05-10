import { Post } from "@/types/post";

import { formatDate } from "../utils";
import { request } from "./index";

interface CMSData {
  allPosts: Post[];
}

const POST_QUERY = `query BlogPage {
  allPosts(filter: {published: {eq: "true"}}) {
    id
    title
    slug
    excerpt
    _createdAt
    topics {
      id
      name
      fontIsLight
      brandColor {
        hex
      }
    }
  }
}`;

export const getBlogData = async () => {
  try {
    const data = await request<CMSData>({ query: POST_QUERY });
    return data.allPosts.map((post) => {
      post._createdAt = formatDate(post._createdAt);
      return post;
    });
  } catch (error) {
    console.log(error);
  }
};

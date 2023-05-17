import "highlight.js/styles/github-dark.css";
import { Metadata } from "next";
import { PostHead } from "@/components";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import {
  getPostData,
  getPostMetadata,
  getPostSlug,
} from "@/lib/datocms/post-query";

//page config
export const revalidate = 43200; //12h

interface PostProps {
  params: { slug: string };
}

export default async function Posts({ params }: PostProps) {
  const { slug } = params;

  const post = await getPostData(slug);

  const { body, title, excerpt, _createdAt } = post!;

  return (
    <main className="min-h-[calc(100vh-70px)] w-full max-w-screen-sm overflow-hidden max-md:px-2 md:mx-auto">
      <PostHead {...{ title, excerpt, _createdAt }} />
      <hr className="my-4" />
      <article className="mb-8">
        {body && (
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            className="prose prose-invert  md:prose-lg prose-code:!bg-primary prose-pre:bg-primary prose-pre:shadow-sm"
          >
            {body}
          </Markdown>
        )}
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPostSlug();

  return posts!.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const slug = params.slug;

  const post = await getPostMetadata(slug);

  const { title, excerpt, topics } = post!;

  const keywords = [
    ...topics.map((topic) => topic.name),
    "Blog",
    "Nicolas Moraes",
    "Nicolas",
    "Moraes",
  ];

  return {
    title: title,
    description: excerpt,
    keywords,
    authors: [{ name: "Nicolas Moraes" }],
    category: "Article",
    openGraph: {
      title,
      description: excerpt,
      url: `https://nicolasmoraes.com/blog/${slug}`,
      images: [
        { width: 800, height: 600, url: "https://nicolasmoraes.com/og.png" },
      ],
      siteName: "Blog & Portfólio | Nicolas Moraes",
      locale: "pt-BR",
      type: "website",
    },
  };
}

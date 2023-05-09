import { PostArticle } from "@/components";

import { getBlogData } from "@/lib/datocms/blog-query";

//page config
export const fetchCache = "force-cache";
export const revalidate = 43200; //12h

export default async function Blog() {
  const posts = await getBlogData();
  return (
    <main className="min-h-[calc(100vh-70px)]">
      <div className="flex w-full max-w-screen-md flex-col gap-y-8 max-md:px-4 md:mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Todas as postagens</h1>
        {posts?.map((post) => (
          <PostArticle key={`key-post-${post.id}`} {...post} />
        ))}
      </div>
    </main>
  );
}

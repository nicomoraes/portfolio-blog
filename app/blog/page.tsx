import Link from "next/link";
import { Button, PostArticle } from "@/components";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { match } from "ts-pattern";

import { getBlogData } from "@/lib/datocms/blog-query";
import { IllustrationImage } from "@/components/IllustrationImage";

//page config
export const fetchCache = "force-cache";
export const revalidate = 43200; //12h

export default async function Blog() {
  const posts = await getBlogData();

  return (
    <main className="min-h-[calc(100vh-70px)]">
      <div className="flex w-full max-w-screen-md flex-col gap-y-8 max-md:px-4 md:mx-auto">
        {match({ isEmpty: posts!.length < 1 })
          .with({ isEmpty: true }, () => (
            <div className="mx-auto flex min-h-screen w-full  flex-col items-center justify-center">
              <h1 className="text-5xl text-tertiary">Em construção</h1>
              <p className="text-foreground/50">
                Em breve novas postagens serão publicadas
              </p>
              <IllustrationImage
                imagePath={"/work-in-progress.png"}
                size={"md"}
                alt={"Under contruction!"}
              />
              <Link href="/" className="mt-4">
                <Button aria-label="Ir para a página inicial" role="navigation">
                  <BsFillHouseDoorFill size={28} />
                  Voltar para a Home
                </Button>
              </Link>
            </div>
          ))
          .with({ isEmpty: false }, () => (
            <>
              <h1 className="mb-4 text-4xl font-bold">Todas as postagens</h1>
              {posts?.map((post) => (
                <PostArticle key={`key-post-${post.id}`} {...post} />
              ))}
            </>
          ))
          .exhaustive()}
      </div>
    </main>
  );
}

export const metadata = {
  title: "Blog - Nicolas Moraes",
  description:
    "Dicas de programação, tendências e novidades em tecnologia web.",
};

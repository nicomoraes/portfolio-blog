import Image from "next/image";
import Link from "next/link";
import { Button, PostArticle } from "@/components";
import { BsFillHouseDoorFill } from "react-icons/bs";

import { getBlogData } from "@/lib/datocms/blog-query";

//page config
export const fetchCache = "force-cache";
export const revalidate = 43200; //12h

export default async function Blog() {
  const posts = await getBlogData();
  return (
    <main className="min-h-[calc(100vh-70px)]">
      <div className="flex w-full max-w-screen-md flex-col gap-y-8 max-md:px-4 md:mx-auto">
        {posts!.length < 1 ? (
          <div className="mx-auto flex min-h-screen w-full  flex-col items-center justify-center">
            <h1 className="text-5xl text-tertiary">Em contrução</h1>
            <p className="text-foreground/50">
              Em breve novas postagens serão publicadas
            </p>
            <div className="mt-4 h-64 w-64 sm:h-96 sm:w-96">
              <Image
                src="/work-in-progress.png"
                width={384}
                height={384}
                alt="Under contruction"
                className="object-contain"
              />
            </div>
            <a
              href="https://storyset.com/online"
              className="text-center text-xs text-foreground/30"
            >
              Online illustrations by Storyset
            </a>
            <Link href="/" className="mt-4">
              <Button>
                <BsFillHouseDoorFill size={28} />
                Voltar para a Home
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="mb-4 text-4xl font-bold">Todas as postagens</h1>
            {posts?.map((post) => (
              <PostArticle key={`key-post-${post.id}`} {...post} />
            ))}
          </>
        )}
      </div>
    </main>
  );
}

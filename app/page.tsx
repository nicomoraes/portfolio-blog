import {
  ContactForm,
  FormToastContextProvider,
  GithubRepository,
  Hero,
  PostArticle,
} from "@/components";
import { BsNewspaper } from "react-icons/bs";
import { SiGithub } from "react-icons/si";

import { getHomeData } from "@/lib/datocms/home-query";

//page config
export const fetchCache = "force-cache";
export const revalidate = 43200;

export default async function Home() {
  const data = await getHomeData();

  return (
    <main className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-between">
      <Hero />
      {/* Github repositories */}
      <section className="flex min-h-screen w-full max-w-screen-lg flex-col justify-center max-lg:mx-auto max-lg:px-2">
        <h2 className="mb-4 inline-flex items-center gap-x-2 font-mono text-3xl">
          <SiGithub size={40} /> Github
        </h2>
        <div className="flex gap-4 max-md:flex-col">
          {data!.repositories.map((repository) => (
            <GithubRepository
              key={`key-git-repository-${repository.id}`}
              {...repository}
            />
          ))}
        </div>
      </section>

      {/* Blog area */}
      <section className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col justify-center max-lg:px-4">
        <h2 className="mb-4 inline-flex items-center gap-x-2 font-mono text-3xl">
          <BsNewspaper size={40} />
          Blog
        </h2>
        <div className="mx-auto grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {data?.posts.map((post) => (
            <PostArticle key={`key-post-${post.id}`} {...post} />
          ))}
        </div>
      </section>

      {/* Contact area */}
      <section className="mx-auto flex min-h-screen w-full max-w-screen-lg flex-col justify-center max-lg:px-4">
        <FormToastContextProvider>
          <ContactForm
            config={{
              service_id: process.env.EMAILJS_SERVICE_ID!,
              template_id: process.env.EMAILJS_TEMPLATE_ID!,
              public_key: process.env.EMAILJS_PUBLIC_KEY!,
            }}
          />
        </FormToastContextProvider>
      </section>
    </main>
  );
}

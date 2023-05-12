import {
  ContactForm,
  FormToastContextProvider,
  GithubRepository,
  Hero,
  PostArticle,
} from "@/components";
import { BsNewspaper } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { match } from "ts-pattern";

import { getHomeData } from "@/lib/datocms/home-query";
import { IllustrationImage } from "@/components/IllustrationImage";
import MotionText from "@/components/MotionText";

//page config
export const fetchCache = "force-cache";
export const revalidate = 43200;

export default async function Home() {
  const data = await getHomeData();

  return (
    <main className="flex min-h-[calc(100vh-70px)] flex-col items-center justify-between">
      <section className="mx-auto flex min-h-[calc(100vh-70px)] w-max cursor-default flex-col justify-center">
        <Hero />
      </section>

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
          Blog (Em breve)
        </h2>
        {match({ isEmpty: data?.posts?.length! < 1 })
          .with({ isEmpty: true }, () => (
            <div className="mx-auto flex w-full flex-col items-center rounded-xl bg-primary p-4 duration-300 hover:shadow-lg hover:shadow-foreground/50">
              <IllustrationImage
                imagePath="/work-on-it.png"
                alt="Em construção"
                size="md"
              />
              <MotionText text="Trabalhando nisso..." />
            </div>
          ))
          .with({ isEmpty: false }, () => (
            <div className="mx-auto grid h-full w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {data?.posts.map((post) => (
                <PostArticle key={`key-post-${post.id}`} {...post} />
              ))}
            </div>
          ))
          .exhaustive()}
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

export const metadata = {
  title: "Página Inicial",
  description:
    "Descubra o portfólio e blog de Nicolas, um desenvolvedor front-end apaixonado por tecnologia, design de sites e aplicativos web.",
};

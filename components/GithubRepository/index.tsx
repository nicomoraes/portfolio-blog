import { BiLinkExternal } from "react-icons/bi";

import { AppRepository } from "@/types/repository";

import { Button } from "../Button";
import { RepositoryLanguage } from "./components/RepositoryLanguage";

export const GithubRepository: React.FC<AppRepository> = ({
  description,
  id,
  languages,
  name,
  url,
}) => {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border-2 border-primary-border bg-primary p-4 py-2 md:w-1/3">
      <div className="flex flex-col">
        <h3 className="text-foreground/50">Nome</h3>
        <h4 className="font-mono">{name}</h4>
      </div>
      <div className="flex flex-col">
        <h3 className="text-foreground/50">Sobre</h3>
        <h4 className="font-mono">{description}</h4>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-1 text-foreground/50">Linguagens</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {languages.map((lang) => (
            <RepositoryLanguage
              key={`key-git-repository-${id}-${lang.name}`}
              {...lang}
            />
          ))}
        </div>
      </div>
      <a href={url} className="mt-auto" target="_blank">
        <Button
          aria-label="Ver repositório no GitHub"
          size={"default"}
          role="link"
          variant={"secondary"}
        >
          Acessar <BiLinkExternal />
        </Button>
      </a>
    </div>
  );
};

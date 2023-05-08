import { BiLinkExternal } from "react-icons/bi";

import { Repository } from "@/types/repository";

import { Button } from "../Button";
import RepositoryLanguage from "./components/RepositoryLanguage";

export const GithubRepository: React.FC<Repository> = ({
  description,
  id,
  languages,
  name,
  url,
}) => {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border-2 border-primary-border bg-primary p-4 py-2 md:w-1/3">
      <div className="flex flex-col">
        <h4 className="text-foreground/50">Nome</h4>
        <h3 className="font-mono">{name}</h3>
      </div>
      <div className="flex flex-col">
        <h4 className="text-foreground/50">Sobre</h4>
        <h3 className="font-mono">{description}</h3>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-1 text-foreground/50">Linguagens</h4>
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
        <Button variant={"secondary"} size={"default"}>
          Acessar <BiLinkExternal />
        </Button>
      </a>
    </div>
  );
};
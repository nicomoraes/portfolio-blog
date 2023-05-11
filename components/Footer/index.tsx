"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { Button } from "../Button";
import { routes } from "../Header";
import NavLink from "./components/NavLink";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full bg-primary py-4">
      <div className="flex w-full max-w-screen-lg justify-between max-lg:px-4 lg:mx-auto">
        <div className="flex flex-col gap-y-2">
          <h1 className="mb-2 text-base font-bold">Páginas</h1>
          {routes.map((route) => (
            <NavLink key={`key-footer-link-${route.path}`} {...route} />
          ))}
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="mb-2 text-base font-bold">Redes Sociais</h1>
          <a href={"https://github.com/nicomoraes"} target="_blank">
            <Button
              aria-label="Ver perfil no Github"
              className="text-medium"
              size={"text"}
              role="link"
              variant={"text"}
            >
              <SiGithub />
              GitHub
            </Button>
          </a>
          <a
            href={"https://www.linkedin.com/in/nicolasmoraes-ti"}
            target="_blank"
          >
            <Button
              aria-label="Ver perfil no LinkedIn"
              className="font-medium"
              size={"text"}
              role="link"
              variant={"text"}
            >
              <SiLinkedin />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
      <p className="mx-auto w-full max-w-screen-lg text-sm text-foreground/40 max-lg:px-4">
        © 2023 Nicolas Moraes. Todos os direitos reservados.
      </p>
    </footer>
  );
};

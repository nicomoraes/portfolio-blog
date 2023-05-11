import { Button } from "@/components";
import { BsFillHouseDoorFill } from "react-icons/bs";

import { IllustrationImage } from "@/components/IllustrationImage";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-70px)] w-full flex-col items-center justify-center">
      <h1 className="text-4xl">Página não encontrada</h1>
      <IllustrationImage
        imagePath={"/not-found.png"}
        size={"md"}
        alt={"Não página encontrada!"}
      />
      <a href="/" className="mt-4">
        <Button
          aria-label="Voltar para a página inicial"
          role="navigation"
          variant={"secondary"}
        >
          <BsFillHouseDoorFill size={28} />
          Voltar para a Home
        </Button>
      </a>
    </div>
  );
}

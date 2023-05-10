import Image from "next/image";
import { Button } from "@/components";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-70px)] w-full flex-col items-center justify-center">
      <h1 className="text-4xl">Página não encontrada</h1>
      <Image
        src={"/not-found.png"}
        width={300}
        height={300}
        alt="Página não encontrada"
      />
      <a
        href="https://storyset.com/online"
        target="_blank"
        className="text-center text-xs text-foreground/30"
      >
        Online illustrations by Storyset
      </a>
      <a href="/" className="mt-4">
        <Button variant={"secondary"}>
          <BsFillHouseDoorFill size={28} />
          Voltar para a Home
        </Button>
      </a>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

import { Button } from "../Button";

interface PostHeadProps {
  title: string;
  excerpt: string;
  _createdAt: string;
}

export const PostHead: React.FC<PostHeadProps> = ({
  _createdAt,
  excerpt,
  title,
}) => {
  const router = useRouter();
  return (
    <div className="mb-8 flex flex-col gap-y-4 max-md:mx-3 max-md:items-center">
      <Button
        variant={"text"}
        size={"text"}
        className="self-start"
        onClick={() => router.back()}
      >
        <BsArrowLeft /> Voltar
      </Button>
      <h1 className="font-mono text-4xl max-md:text-center md:text-5xl">
        {title}
      </h1>
      <p className="text-lg text-foreground/70 max-md:text-center md:text-xl">
        {excerpt}
      </p>
      <span className="w-full text-foreground/50 max-md:text-center">
        {_createdAt}
      </span>
    </div>
  );
};

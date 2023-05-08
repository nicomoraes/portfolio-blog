"use client";

import { Button } from "@/components";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsChevronRight } from "react-icons/bs";
import {
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { DeveloperVariants, NameChevronVariants } from "./animation";

const Hero = () => (
  <section className="mx-auto flex min-h-[calc(100vh-70px)] w-max cursor-default flex-col justify-center">
    <h2 className="flex items-center gap-x-3 font-sans text-4xl">
      <motion.span
        initial={"initial"}
        animate={"animate"}
        variants={NameChevronVariants}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <BsChevronRight size={25} />
      </motion.span>
      <span className="font-mono font-bold">Nicolas Moraes</span>
    </h2>
    <h1 className="inline-flex gap-x-2 text-6xl font-bold max-sm:flex-col max-sm:items-center">
      <span>Front-end</span>
      <motion.span
        initial={"initial"}
        animate={"animate"}
        variants={DeveloperVariants}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 5,
        }}
        className="font-mono font-extrabold text-tertiary"
      >
        Developer{" "}
      </motion.span>
    </h1>
    <div className="mt-6 flex gap-x-4 self-center">
      <IconContext.Provider
        value={{
          size: "40px",
          className: "text-foreground/10",
        }}
      >
        <SiReact />
        <SiNextdotjs />
        <SiTypescript />
        <SiTailwindcss />
        <SiStyledcomponents />
        <SiPrisma />
      </IconContext.Provider>
    </div>
    <div className="mt-10 flex justify-center gap-x-4">
      <a href="https://github.com/nicomoraes" target="_blank">
        <Button>
          <SiGithub />
          Github
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/nicolasmoraes-ti/" target="_blank">
        <Button>
          <SiLinkedin />
          LinkedIn
        </Button>
      </a>
    </div>
  </section>
);

export default Hero;

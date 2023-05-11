import { useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { BsXLg } from "react-icons/bs";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/Button";

import { useFormToastContext } from "../context/hook";

export const ParentVariants: Variants = {
  initial: {
    x: "150%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "150%",
  },
};

export const FormToast = () => {
  const { state, updateState, resetState } = useFormToastContext();

  useEffect(() => {
    const lifetime = setTimeout(() => {
      updateState({
        show: false,
      });
    }, 5000);

    return () => {
      clearTimeout(lifetime);
      resetState();
    };
  }, []);

  return (
    <motion.div
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={ParentVariants}
      transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
      className="fixed bottom-8 right-8 flex w-full max-w-xs rounded-md border border-foreground bg-primary px-4 py-4 text-foreground sm:max-w-sm"
    >
      <div className="flex flex-col">
        <span
          className={twMerge(
            "font-bold",
            state.isError ? "text-tertiary" : "text-secondary"
          )}
        >
          {state.title}
        </span>
        <p>{state.message}</p>
      </div>
      <Button
        aria-label="Fechar"
        className="mx-auto"
        onClick={() => updateState({ show: false })}
        role="button"
        size={"sm"}
      >
        <BsXLg className="duration-300 hover:text-tertiary" />
      </Button>
    </motion.div>
  );
};

import { forwardRef, type HTMLAttributes, type LegacyRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ErrorPhraseVariants } from "./animation";

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="my-4 flex flex-col">
        <label htmlFor={name} className="font-mono">
          {label}
        </label>
        <textarea
          className="form-textarea my-2 rounded-md bg-primary px-4 py-3 ring-1 focus:border-secondary"
          name={name}
          ref={ref}
          {...rest}
        />
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              transition={{ duration: 0.6 }}
              variants={ErrorPhraseVariants}
              className="h-max w-full text-sm text-tertiary"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

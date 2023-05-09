import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, type HTMLAttributes, type LegacyRef } from "react";
import { ErrorPhraseVariants } from "./animation";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, error, ...rest }, ref) => {
    return (
      <div className="my-4 flex flex-col">
        <label htmlFor={name} className="font-mono">
          {label}
        </label>
        <input
          className="form-input rounded-md bg-primary my-2 px-4 py-3 ring-1 focus:border-secondary"
          name={name}
          ref={ref}
          {...rest}
        />
        <AnimatePresence mode="wait">
          {error && <motion.p initial={'initial'} animate={'animate'} exit={'exit'} transition={{duration: 0.6}} variants={ErrorPhraseVariants} className="w-full text-sm text-tertiary h-max">{error}</motion.p>}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

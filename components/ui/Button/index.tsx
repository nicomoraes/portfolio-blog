"use client";

import { HTMLAttributes } from "react";
import { IconContext } from "react-icons";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  theme?: "primary" | "secondary" | "destructive";
}

interface IconButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, theme = "primary" }) => {
  return (
    <button
      className="rounded-md border-2 px-5 py-2 font-medium tracking-wider hover:brightness-90 hover:duration-300"
      style={{
        backgroundColor: `var(--${theme})`,
        color: `var(--${theme}-foreground)`,
      }}
    >
      {text}
    </button>
  );
};

export const IconButton: React.FC<IconButtonProps> = ({
  text,
  theme = "primary",
  icon,
}) => {
  return (
    <button
      className="flex items-end justify-center rounded-md border-2 px-5 py-2 text-lg font-medium tracking-wide duration-300 hover:brightness-90"
      style={{
        backgroundColor: `var(--${theme})`,
        color: `var(--${theme}-foreground)`,
      }}
    >
      <IconContext.Provider
        value={{
          size: "28px",
          style: { color: `var(--${theme}-foreground)`, verticalAlign: 'middle' },
          className: "mr-2 block my-auto",
        }}
      >
        {icon}
      </IconContext.Provider>
      {text}
    </button>
  );
};

export const TextButton: React.FC<ButtonProps> = ({ text, theme }) => {
  return (
    <button
      className="rounded-md font-medium tracking-wider duration-300 hover:brightness-50"
      style={{
        color: `var(--${theme}-foreground)`,
      }}
    >
      {text}
    </button>
  );
};

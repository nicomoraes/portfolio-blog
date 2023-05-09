"use client";

import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { IconContext } from "react-icons";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-medium disabled:pointer-events-none disabled:opacity-50 hover:duration-300 duration-300 w-max gap-x-2 disabled:bg-background/30",
  {
    variants: {
      variant: {
        default:
          "border border-primary-border bg-primary text-foreground hover:bg-primary/50",
        secondary: "text-primary bg-foreground hover:bg-white/50",
        destructive: "bg-tertiary text-foreground hover:bg-tertiary/50",
        text: "bg-tranparent text-foreground hover:text-foreground/50",
      },
      size: {
        sm: "p-2",
        default: "px-4 py-2",
        lg: "px-8 py-4 text-lg",
        text: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <IconContext.Provider
          value={{
            size: "28px",
            style: { verticalAlign: "middle" },
            className: "block my-auto text-foreground",
          }}
        >
          {children}
        </IconContext.Provider>
      </button>
    );
  }
);

Button.displayName = "Button";

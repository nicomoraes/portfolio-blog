import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const blurBackgroundVariants = cva("absolute h-44 w-44 blur-[150px]", {
  variants: {
    variant: {
      blue: "bg-secondary",
      orange: "bg-tertiary",
      white: "bg-foreground",
    },
    size: {
      default: "h-44 w-44",
      md: "h-56 w-56",
      lg: "h-80 w-80",
    },
  },
  defaultVariants: {
    variant: "blue",
    size: "default",
  },
});

interface BlurredBackgroundProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof blurBackgroundVariants> {
  position: { top: number | string; left: number | string };
}

export const BlurredBackground = React.forwardRef<
  HTMLDivElement,
  BlurredBackgroundProps
>(({ className, variant, size, position, ...props }, ref) => {
  return (
    <div
      className={cn(blurBackgroundVariants({ variant, size, className }))}
      style={{
        top: position.top,
        left: position.left,
      }}
      ref={ref}
      {...props}
    />
  );
});

BlurredBackground.displayName = "BlurredBackground";

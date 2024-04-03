import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "border" | "underline";
}

const Input: React.FC<InputProps> = ({ className, variant, ...props }) => (
  <input {...props} className={cn(inputVariants({ variant, className }))} />
);

const inputVariants = cva(
  "px-2 py-1 outline-none focus:border-accent text-sm min-h-[40px] w-full text-primary font-normal dark:bg-input-dark dark:text-input-dark",
  {
    variants: {
      variant: {
        border: "border border-input rounded-sm",
        underline: "border-b border-input",
      },
    },
    defaultVariants: {
      variant: "border",
    },
  }
);

Input.displayName = "Input";

export { Input, inputVariants };

/*  2024-03-23 16:40:40


*/

import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        className={cn(buttonVariants({ variant }), className)}
      />
    </>
  );
};

export default Button;

const buttonVariants = cva("py-2 px-4 px-2 rounded-md hover:opacity-50", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      danger: "bg-red-500 text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

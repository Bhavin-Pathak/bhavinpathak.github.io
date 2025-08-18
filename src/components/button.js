import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils.js";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md border [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary text-primary bg-transparent hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/20",
        destructive:
          "border border-red-500 text-red-600 hover:bg-red-500/10 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400/20",
        outline:
          "border border-gray-400 text-gray-800 hover:bg-gray-400/10 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-500/20",
        secondary:
          "border border-gray-300 text-gray-700 hover:bg-gray-300/10 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600/20",
        ghost: "text-primary hover:bg-primary/10 dark:text-primary dark:hover:bg-primary/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


const Button = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

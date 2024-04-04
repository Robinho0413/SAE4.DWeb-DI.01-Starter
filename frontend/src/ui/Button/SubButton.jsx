import { cva } from "class-variance-authority";

// Base definition
const base = "";

const subButton = cva(base, {
  variants: {
    intent: {
      primary: [
        "font-globalFont",
        "font-bold",
        "bg-buttonBackground",
        "text-black",
        "border",
        "border-buttonBorder",
        "rounded-md",
        "hover:bg-hoverButtonBackground",
        "hover:text-hoverButtonText",
        "ease-in-out",
        "duration-300"
      ],
      secondary: [
        "font-globalFont",
        "font-bold",
        "bg-buttonBackground",
        "text-black",
        "hover:border",
        "hover:border-buttonBorder",
        "rounded-md",
        "hover:bg-hoverButtonBackground",
        "hover:text-hoverButtonText",
      ],
    },
    size: {
      small: ["text-sm", "py-3", "px-4"],
      medium: ["text-sm", "py-4", "px-8"],
      large: ["text-lg", "py-4", "px-8"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium"}],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function SubButton({ intent, size, className, ...rest }) {
  return (
    <button {...rest} className={subButton({ intent, size, className })} />
  );
}


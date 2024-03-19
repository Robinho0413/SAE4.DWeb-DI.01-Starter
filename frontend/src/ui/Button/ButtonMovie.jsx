import { cva } from "class-variance-authority";
import { Children, useState } from "react";
import {Play} from "../../images/icons";


// Base definition
const base = "";

const buttonMovie = cva(base, {
  variants: {
    intent: {
      primary: [
        "font-button",
        "font-bold",
        "bg-transparent",
        "text-button",
        "border",
        "border-button",
        "rounded-md",
        "hover:bg-button",
        "hover:text-black",
      ],
    },
    size: {
      medium: ["text-sm", "py-3", "px-6"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium"}],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export default function ButtonMovie({ intent, size, className, text, ...rest }) {

  return (
    <button {...rest} className={buttonMovie({ intent, size, className })}>
      <Play className="text-button group-hover:text-black w-5 h-5"/>
      {text}
    </button>)
}


import { cva } from "class-variance-authority";
import { Children, useState } from "react";
import {Play} from "../../images/icons";


// Base definition
const base = "";

const buttonMovie = cva(base, {
  variants: {
    intent: {
      primary: [
        "font-globalFont",
        "font-bold",
        "bg-transparent",
        "text-buttonMovietext",
        "border",
        "border-buttonBorder",
        "rounded-md",
        "hover:bg-hoverButtonMovieBackground",
        "hover:text-hoverButtonMovieText",
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
      <Play className="text-buttonMovietext group-hover:text-hoverButtonMovieText w-5 h-5"/>
      {text}
    </button>)
}


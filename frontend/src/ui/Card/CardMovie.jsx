import { cva } from "class-variance-authority";

// Base definition
const base = "";

const card = cva(base, {
  variants: {
    intent: {
      primary: [
        "",

      ],
      secondary: [
        "bg-button-secondary-bg",
        "hover:bg-button-secondary-hover",
      ],
    },
    size: {
      small: ["w-40"],
      big: ["w-48"],

    },
  },
  compoundVariants: [{ intent: "primary" }],
  defaultVariants: {
    intent: "primary",
  },
});

export default function CardMovie({ title, bgImage, size }) {
  return <>
    
      <div className="block w-full">
            <div className={card({ size})}>
              <div className="bg-top bg-no-repeat bg-cover block">
                <picture>
                  <source srcSet={bgImage} />
                  <img src={bgImage} alt={title} className="w-full bg-top bg-no-repeat bg-cover rounded-md hover:scale-110 duration-500	"/>
                </picture>
              </div>
            </div>
      </div>
  


  </>;
}
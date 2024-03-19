import { cva } from "class-variance-authority";

// Base definition
const base = "";

const subButton = cva(base, {
  variants: {
    intent: {
      primary: [
        "font-button",
        "font-bold",
        "bg-button",
        "text-black",
        "border",
        "border-button",
        "rounded-md",
        "hover:bg-black",
        "hover:text-button",
        "ease-in-out",
        "duration-300"
      ],
      secondary: [
        "font-button",
        "font-bold",
        "bg-button",
        "text-black",
        "hover:border",
        "hover:border-button",
        "rounded-md",
        "hover:bg-black",
        "hover:text-button",
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

// export default function Ex3_2() {
//   return (
//     <div className="grid h-screen place-content-center">
//       <Button intent={'primary'} size={'small'}>S'abonner</Button>
//     </div>
//   );
// }

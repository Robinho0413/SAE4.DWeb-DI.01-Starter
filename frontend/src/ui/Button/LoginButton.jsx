import { Login } from "../../images/icons";
import { cva } from "class-variance-authority";

const base = "";

const loginButton = cva(base, {
  variants: {
    intent: {
      primary: [
        "text-globalText",
        "hover:text-hoverButtonText",
        "flex",
        "items-center",
        "gap-4",
        "text-sm",
        "font-semibold"
      ],
    },
  },
  compoundVariants: [{ intent: "primary"}],
  defaultVariants: {
    intent: "primary",
  },
});

export default function LoginButton({ className, text, ...rest }) {

    return (
        <button {...rest} className={loginButton({ className })}>
            <Login className="text-accountIcon w-8"/>
            {text}
        </button>
    )
}
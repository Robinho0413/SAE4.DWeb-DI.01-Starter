import { Login } from "../../images/icons";

export default function LoginButton({ className, ...rest }) {

    return (
        <button {...rest} className={Login({ className })}>
            <Login className="text-button w-5 h-5"/>
            <h3>Connexion</h3>
        </button>
    )
}
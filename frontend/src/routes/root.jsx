import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";

export default function Root() {

  return (
    <>
      <section>
        <NavBar/>
        <Outlet/>
      </section>
    </>
  );
}

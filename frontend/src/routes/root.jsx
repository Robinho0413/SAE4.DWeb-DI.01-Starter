import { Outlet } from "react-router-dom";
import NavBar from "../ui/NavBar";

export default function Root() {

  return (
    <>
      <section className="bg-background min-h-screen">
        <NavBar/>
        <Outlet/>
      </section>
    </>
  );
}

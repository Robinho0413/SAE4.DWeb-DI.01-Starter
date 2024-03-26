import { Link } from 'react-router-dom';


export default function NavBar() {

  return (

    <nav className="relative flex w-full items-center justify-between py-4 px-16 bg-black font-global">
      <div className="flex w-full flex-wrap items-center space-x-5 text-white">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/accueil">Accueil</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/team/sales">Séries</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/team/webdesign">Films</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/team/development">Jeunesse</Link>

        {/* <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-white space-x-10">
          <Link className="ml-15 mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" to="/buy">Buy</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" to="/about">?</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" to="/design-system">Design System</Link>
        </div> */}

      </div>
    </nav>
  );

}


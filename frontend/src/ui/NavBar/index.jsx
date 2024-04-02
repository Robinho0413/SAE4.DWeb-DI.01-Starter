import { Link } from 'react-router-dom';


export default function NavBar() {

  return (

    <nav className="flex w-full items-center justify-between py-4 px-16 bg-black font-global">
      <div className="flex flex-wrap items-center space-x-8 text-white text-lg">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/accueil">Accueil</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/team/sales">Séries</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/films">Films</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/team/development">Jeunesse</Link>
      </div>
      
      <div className="flex items-center text-white text-lg">
      <Link to="/accueil"><img className='w-auto h-10 mx-4' src="../../../assets/app_header_logo.png" alt="club illico" /></Link>
      </div>
      
      <div className="flex items-center text-white text-lg">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/design-system">Design System</Link>
      </div>

    </nav>
  );

}


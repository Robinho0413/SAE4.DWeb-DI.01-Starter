import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SubButton from '../Button/SubButton';
import LoginButton from '../Button/LoginButton';


export default function NavBar() {

  return (

    <nav className="flex flex-wrap w-full items-center justify-center py-2.5 px-4 md:px-16 bg-navBackground font-globalFont gap-4">
      <div className="flex items-center flex-start space-x-8 text-globalText text-lg">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/accueil">Accueil</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/series">Séries</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/films">Films</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/jeunesse">Jeunesse</Link>
      </div>

      <div className="flex items-center md:ml-auto md:mr-8">
        <Link to="/accueil"><img className='object-contain w-auto h-10 mx-4' src="../../../assets/app_header_logo.png" alt="club illico" /></Link>
      </div>

      <div className='flex flex-row items-center justify-center gap-2 md:gap-6'>
        <SearchBar></SearchBar>
        <SubButton intent={'primary'} size={'small'}>S'abonner</SubButton>
        <LoginButton text="Connexion"></LoginButton>
      </div>
    </nav>
  );

}


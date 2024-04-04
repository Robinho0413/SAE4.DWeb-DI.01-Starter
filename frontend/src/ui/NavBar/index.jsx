import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SubButton from '../Button/SubButton';
import LoginButton from '../Button/LoginButton';


export default function NavBar() {

  return (

    <nav className="flex w-full items-center py-2.5 px-16 bg-navBackground font-globalFont">
      <div className="flex items-center flex-start space-x-8 text-globalText text-lg">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/accueil">Accueil</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/series">Séries</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/films">Films</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/jeunesse">Jeunesse</Link>
      </div>

      <div className="flex items-center ml-auto mr-8">
        <Link to="/accueil"><img className='w-auto h-10 mx-4' src="../../../assets/app_header_logo.png" alt="club illico" /></Link>
      </div>

      <div className='flex flex-row items-center space-x-6'>
        <SearchBar></SearchBar>
        <SubButton intent={'primary'} size={'small'}>S'abonner</SubButton>
        <LoginButton text="Connexion"></LoginButton>
      </div>
    </nav>
  );

}


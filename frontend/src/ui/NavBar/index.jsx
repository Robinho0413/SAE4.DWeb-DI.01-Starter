import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import SubButton from '../Button/SubButton';
import LoginButton from '../Button/LoginButton';


export default function NavBar() {

  return (

    <nav className="flex w-full items-center justify-between py-2.5 px-16 bg-black font-global">
      <div className="flex flex-row items-center space-x-8 text-white text-lg">
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/accueil">Accueil</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/series">Séries</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/films">Films</Link>
        <Link className="hover:text-navHover focus:text-[#BB0]" to="/jeunesse">Jeunesse</Link>
      </div>

      <div className="flex items-center">
        <Link to="/accueil"><img className='w-auto h-10 mx-4' src="../../../assets/app_header_logo.png" alt="club illico" /></Link>
      </div>

      <div className='flex flex-row items-center space-x-8'>
        <SearchBar className={'flex'}></SearchBar>
        <SubButton intent={'primary'} size={'small'}>S'abonner</SubButton>
        <LoginButton className={'flex flex-row items-center'}></LoginButton>
      </div>
    </nav>
  );

}


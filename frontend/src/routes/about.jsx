import { Link } from 'react-router-dom';
import SubButton from '../ui/Button/SubButton';

export default function About() {


  return (
    <div className="flex flex-col space-y-10 items-center my-20 text-globalText">
      <h1 className='text-xl'>A propos</h1>
      <p>Application réalisée dans un contexte universitaire, en utilisant React JS et Symfony</p>
      <p className='text-lg'>Par Robin Hajnoczy</p>
      <Link to="/accueil">
        <SubButton intent={'primary'} size={'large'}>Retourner à l'accueil</SubButton>
      </Link>
    </div>
  );
}
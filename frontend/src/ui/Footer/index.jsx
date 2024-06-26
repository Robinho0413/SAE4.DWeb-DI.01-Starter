import { Link } from 'react-router-dom';


export default function Footer() {

  return (

    <div className='flex flex-col md:flex-row justify-between bg-footerBackground text-globalText px-4 md:px-16 py-6 gap-4'>
        <div className='flex flex-wrap gap-4 md:gap-8'>
            <Link to="/about">Communiquer avec nous</Link>
            <Link to="/about">Modalités d'utilisation</Link>
            <Link to="/about">Politique de vie privée</Link>
        </div>
        <div className='flex flex-col items-end gap-2'>
            <div className='flex flex-row gap-6'>
                <img className='w-10' src="../../../assets/instagram.png" alt="instagram" />
                <div className='flex flex-wrap justify-start gap-2 h-10'>
                    <img className='h-10' src="../../../assets/apple-app-store.png" alt="app store" />
                    <img className='h-10' src="../../../assets/android-google-play.png" alt="google play" />
                </div>
            </div>
            <p className='text-sm'>Vidéotron © 2024</p>
        </div>
    </div>
  );

}


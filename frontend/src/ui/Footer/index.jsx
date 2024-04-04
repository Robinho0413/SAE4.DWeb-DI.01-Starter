import { Link } from 'react-router-dom';


export default function Footer() {

  return (

    <div className='flex flex-row justify-between bg-black text-white px-16 py-6'>
        <ul className='flex flex-wrap gap-8'>
            <li>Communiquer avec nous</li>
            <li>Modalités d'utilisation</li>
            <li>Politique de vie privée</li>
        </ul>
        <div className='flex flex-col items-end gap-2'>
            <div className='flex flex-row gap-6'>
                <img className='w-10' src="../../../assets/instagram.png" alt="instagram" />
                <div className='flex flex-row justify-start gap-2 h-10'>
                    <img className='' src="../../../assets/apple-app-store.png" alt="app store" />
                    <img className='' src="../../../assets/android-google-play.png" alt="google play" />
                </div>
            </div>
            <p className='text-sm'>Vidéotron © 2024</p>
        </div>
    </div>
  );

}


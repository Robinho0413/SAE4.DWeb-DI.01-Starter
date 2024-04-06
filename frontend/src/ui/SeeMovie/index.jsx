import { Link } from 'react-router-dom';
import ButtonMovie from '../Button/ButtonMovie';

export default function SeeMovie({ linkContent, movie }) {

    let imageMovie = '/assets/images/' + movie.urlImage;

    let catList = '';

    for (let i = 0; i < movie.category.length; i++) {
        if (i == 0) {
            catList += movie.category[i].name;
        } else {
            catList += ', ' + movie.category[i].name;
        }
    }

    return (
        <div className="flex flex-col justify-between overflow-hidden gap-4 m-8 lg:m-16 md:flex-row-reverse">
            <img src={imageMovie} alt={movie.title} className="object-contain rounded-lg"/>
            <div className="flex flex-col gap-8 p-4 text-globalText">
                <div>
                    <h3 className="text-3xl font-globalFont">{movie.name}</h3>
                    <h4 className="text-lg opacity-50 overflow-hidden text-nowrap font-normal">{catList}</h4>
                </div>
                <Link to={linkContent} className="w-full flex">
                    <ButtonMovie intent={'primary'} size={'medium'} className={'group flex gap-3 items-center'} text="BANDE-ANNONCE"></ButtonMovie>
                </Link>
                <div>
                    <p className="text-lg whitespace-nowrap text-wrap font-light h-min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reiciendis incidunt laborum repellat ut ipsam dolorem saepe a, sit illum ex, officiis accusantium eaque quas. Accusantium iusto, error eius consequatur impedit suscipit, sequi odit assumenda eaque omnis eveniet atque nam cupiditate molestiae facilis dolorem officiis optio, repellendus ipsa neque cum?</p>
                </div>
            </div>


        </div>
    )
}
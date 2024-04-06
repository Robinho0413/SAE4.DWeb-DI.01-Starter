import { useLoaderData } from "react-router-dom";
import { fetchOneMovie } from "../lib/loaders";
import SeeMovie from "../ui/SeeMovie";



export async function loader({params}){
    let data = await fetchOneMovie(params.idmovie);
    return data;
}
 

export default function Movie(){

    let movie = useLoaderData();

    let fillButtonLink = movie.trailer;


    return(
        <div className="min-h-screen">
            <SeeMovie linkContent={fillButtonLink} movie={movie}/>
        </div>
    )
    
}

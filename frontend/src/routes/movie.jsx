import { useLoaderData } from "react-router-dom";
import { fetchOneMovie } from "../lib/loaders";
import OneMovie from "../ui/OneMovie";



export async function loader({params}){
    let data = await fetchOneMovie(params.idmovie);
    return data;
}
 

export default function Movie(){

    let movie = useLoaderData();

    return(
        <div className="min-h-screen">
            <OneMovie movie={movie}/>
        </div>
    )
    
}

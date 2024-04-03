import { useLoaderData } from "react-router-dom"
import CardMovie from "../ui/CardMovie"
import { fetchSearch } from "../lib/loaders"

export async function loader({ params }) {
    let data = await fetchSearch(params.searched);
    return data
}

export default function SearchContent() {

    let dataSearch = useLoaderData()

    let moviesList = dataSearch.map((mov) => {

        let imageBox = '../../assets/images/' + mov.urlImage;

        return (
            <li key={mov.id} className="m-2 space-y-2">
                {/* <Link to={'/accueil/' + mov.id}> */}
                    <CardMovie
                        bgImage={imageBox}
                        title={mov.name}
                        size="small"
                    />
                    <h3 className="text-base max-w-40">{mov.name}</h3>
                {/* </Link> */}
            </li>
        );
    })


    if (dataSearch.length > 0) {

        return (
            <>
                <div className='flex flex-col font-global text-white text-2xl m-8 space-y-4'>
                    <h3 className="font-semibold">Résultats de recherche</h3>
                    <ul className='flex'>
                        {moviesList}
                    </ul>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h3 className="text-white">Aucuns résultats</h3>
            </>
        )
    }

}
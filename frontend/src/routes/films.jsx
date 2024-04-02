import CardMovie from '../ui/Card/CardMovie.jsx';
import { useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData, fetchByTypeData } from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader(){
    let moviesData = await fetchAllMoviesData();
    let catData = await fetchAllCategoriesData();
    let typeData = await fetchByTypeData();
    return {movies : moviesData, categories : catData, types : typeData};
  }
  
  export default function Films() {

    const data = useLoaderData();

    for (let type of data.types){
      if(type.id == 2){
        let categoryList = [];
        for (let category of data.categories){
          
          let moviesList = data.movies.map((mov) => {
    
            for(let i = 0; i< mov.category.length; i++){
              if(category.name ==  mov.category[i].name){
                let imageBox = './assets/images/'+mov.urlImage;
                
                return (
                  <li key={mov.id} className="m-2">
                    <Link to={'/accueil/'+ mov.id}>
                      <CardMovie
                        bgImage={imageBox}
                        title={mov.name}
                        size="small"
                      />
                    </Link>
                  </li>
                );
              }
            }
          })
            
          categoryList.push(
              <li className='space-y-4'>
                <h3>{category.name}</h3>
                <ul className="flex ">
                    {moviesList}
                </ul>
              </li>
          )
        }

      }
    }

    
    return (
      <ul className='font-global text-white text-2xl space-y-8 m-14'>
        {categoryList}

      </ul>
    )
  }
import CardMovie from '../ui/CardMovie/index.jsx';
import { useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData } from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader() {
  let moviesData = await fetchAllMoviesData();
  let catData = await fetchAllCategoriesData();
  return { movies: moviesData, categories: catData };
}

export default function Accueil() {

  const data = useLoaderData();

  let categoryList = [];
  for (let category of data.categories) {

    let moviesList = data.movies.map((mov) => {

      for (let i = 0; i < mov.category.length; i++) {
        if (category.name == mov.category[i].name) {
          let imageBox = './assets/images/' + mov.urlImage;

          return (
            <li key={mov.id} className="m-2">
              <Link to={'/accueil/' + mov.id}>
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

    if (moviesList.some(movie => movie !== undefined)) {
      categoryList.push(
        <li key={category.name} className='space-y-4'>
          <h3>{category.name}</h3>
          <ul className="flex">
            {moviesList}
          </ul>
        </li>
      );
    }
  }

  return (
    <ul className='font-global text-white text-2xl space-y-8 m-14'>
      {categoryList}
    </ul>
  )
}
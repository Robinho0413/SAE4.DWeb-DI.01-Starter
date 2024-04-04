import CardMovie from '../ui/CardMovie';
import { useLoaderData } from "react-router-dom";
import { fetchAllCategoriesData, fetchByTypeData } from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader() {
  let catData = await fetchAllCategoriesData();
  let typeData = await fetchByTypeData(3);
  return { categories: catData, types: typeData };
}

export default function Jeunesse() {

  const data = useLoaderData();

  let categoryList = [];
  for (let category of data.categories) {

    let moviesList = data.types.map((mov) => {

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
          <ul className="flex flex-wrap">
            {moviesList}
          </ul>
        </li>
      );
    }
  }

  return (
    <ul className='min-h-screen font-globalFont text-globalText text-2xl space-y-8 m-14'>
      {categoryList}

    </ul>
  )
}
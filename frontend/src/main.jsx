import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Accueil, {loader as accueilLoader} from './routes/accueil.jsx';
import Films, {loader as filmsLoader} from './routes/films.jsx';
import Series, { loader as seriesLoader} from './routes/series.jsx';
import Jeunesse, { loader as jeunesseLoader} from './routes/jeunesse.jsx';


import './index.css';
import ErrorPage from './ui/ErrorPage/index.jsx';

import DesignSystem from './routes/designSystem.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Accueil/>,
        loader: accueilLoader
      },
      {
        path: '/accueil',
        element: <Accueil/>,
        loader: accueilLoader
      },
      {
        path: '/series',
        element: <Series />,
        loader: seriesLoader
      },
      {
        path: '/films',
        element: <Films />,
        loader: filmsLoader
      },
      {
        path: '/jeunesse',
        element: <Jeunesse />,
        loader: jeunesseLoader
      },
      {
        path: '/design-system',
        element: <DesignSystem />,
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Accueil, {loader as accueilLoader} from './routes/accueil.jsx';
import OurTeams, { loader as ourTeamLoader} from './routes/ourteams.jsx';


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
        path: '/accueil',
        element: <Accueil/>,
        loader: accueilLoader
      },
      {
        path: '/team/:teamName',
        element: <OurTeams />,
        loader: ourTeamLoader
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

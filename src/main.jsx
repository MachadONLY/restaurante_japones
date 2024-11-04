import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home/Home';
import Produtos from './routes/Produtos/Produtos';
import Sobre from './routes/Sobre/Sobre';
import Login from './routes/Login/Login';
import Error from './routes/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/login', element: <Login /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

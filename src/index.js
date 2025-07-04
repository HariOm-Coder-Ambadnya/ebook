import React from 'react';
import ReactDOM from 'react-dom/client';
import './component/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './component/ThemeProvider';
import { Gallery } from './component/Gallery';
import { About } from './component/About';
import { Contact } from './component/Contact';
import { Portfolio } from './component/Portfolio';
import { Home } from './component/Home';
import { Error } from './component/Error';
import MainLayout from './component/MainLayout'; // ✅ Layout that wraps in ThemeProvider

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />, 
        children: [
            { index: true, element: <App /> },
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/gallery', element: <Gallery /> },
            { path: '/contact', element: <Contact /> },
            { path: '/portfolio', element: <Portfolio /> },
            { path: '/apps', element: <App /> },
            { path: '/error', element: <Error /> }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );

reportWebVitals();

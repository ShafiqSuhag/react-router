import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './contact';
import ErrorPage from './error-page';
import './index.css';
import Root, { loader as rootLoader } from './routes/root';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader , 
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ]
    // element: <div>Hello world!</div>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

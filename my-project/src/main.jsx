import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import LoggIn from './components/LoggIn.jsx';
import SingUp from './components/SingUp.jsx';
import OverPage from './components/OverPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<OverPage></OverPage>
      },
      {
        path:'/Loggin',
        element:<LoggIn></LoggIn>
      },
      {
        path:'/SingUp',
        element:<SingUp></SingUp>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

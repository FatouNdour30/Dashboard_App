import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './Pages/dashboard/Dashboard.jsx'
import Connexion from './Pages/Connexion/Connexion.jsx'
import Inscription from './Pages/inscription/Inscription.jsx'


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element:<Dashboard/>
  },
  {
    path: "/connexion",
    element:<Connexion/>
  },
  {
    path: "/inscription",
    element:<Inscription/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>,
)

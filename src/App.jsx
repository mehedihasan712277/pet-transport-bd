import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './pages/MainContainer'
import Error from './pages/Error'
import Transport from './pages/Service/transport/Transport'
import Product from './pages/Service/product/Product'
import Home from './pages/Home/Home'
import Details from './pages/About/Details'
import AuthProvider from './Provider/AuthProvider'
import LogIn from './pages/Authentication/LogIn'
import SignUp from './pages/Authentication/SignUp';
import Hostel from './pages/Service/hostel/Hostel'
import Grooming from './pages/Service/grooming/Grooming'
import Doctor from './pages/Service/doctor/Doctor'
import Private from './pages/Private'
import Control from './Control/Control'
import Edit from './Control/Edit'


const allRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer></MainContainer>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/details",
        element: <Details></Details>
      },
      {
        path: "/transport",
        element: <Private><Transport></Transport></Private>
      },
      {
        path: "/product",
        element: <Private><Product></Product></Private>
      },
      {
        path: "/hostel",
        element: <Hostel></Hostel>
      },
      {
        path: "/grooming",
        element: <Grooming></Grooming>
      },
      {
        path: "/doctor",
        element: <Doctor></Doctor>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/control",
        element: <Control></Control>,
        // loader: () => fetch('https://backend-ptbd.vercel.app/data')
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
        loader: ({ params }) => fetch(`https://backend-ptbd.vercel.app/data/${params.id}`)
      }
    ]
  }
])

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={allRoute}></RouterProvider>
    </AuthProvider>
  )
}

export default App
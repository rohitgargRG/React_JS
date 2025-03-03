import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
// create  router 

// m1

/*
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"" , 
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }
])
  */

// m2 of creating this router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path='' element = {<Home />}/>
      <Route path='about' element = {<About />}/>
      <Route path='contact' element = {<Contact />}/>

      {/* getting value from url */}
      <Route path = 'user/:userid' element = {<User/>}/>
      {/* we will be getting the access to this userId inside User component. */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)

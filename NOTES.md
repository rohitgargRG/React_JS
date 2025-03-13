// L1 ********************

Q) why to learn react?

ans) to build complex UI/frontEnd.

### NOTE - 
- at the end , react will get compiled to HTML,CSS and JS only.

- browser can only understand HTML,CSS and JS.

Q) why react was created?

- to solve ghost message problem.
- to sync state and UI properly.
- to create consistency in UI.

### NOTE - "react is a library".

#### Framework VS library

    - Framework has strict rules.
    - library does not have strict rules / provides more freedom.

- react creates SPA(single page application).

- react creates SPA because there is only one index.html file in which all the injections and operations are done.


- BAAS - backend as a service.

- react is not good fot SEO purpose.
- react does not have any routing servies.

// **************************************


// L2 *************************************

- refer react documentation (react.dev)

- for web application - react + react-DOM
- for mobile application - react + react-Native.

// create a react project

- npx -> node package executer
- npx create-react-app (don't use this , takes a lot of time to install)

Q) how to read and understand a react project?

ans) 1. always start reading package.json
     2. see name , version , dependencies.

- web vitals check the performance of the application.
- scripts are used to run the project.
- npm run script_name
- start script is used to run the project.
- npm run start / npm start. (like this we can run any script)

- npm run build -> after running this cmd , a build folder will be created which will contain JS extracted from react.

- during production this build folder is given to the client , not the src folder.

// create a project using VITE (USE THIS METHOD)

- npm create vite@latest

- npm i / npm install -> to bring node modules folder.

- npm run dev -> to run vite project.


// ****************************************


// L3 **************************************

- package-lock.json -> this is also a package.json file only , but here a stable version of dependencies are locked.

- manifest.json -> used for mobile devices.

- <noscript> tag -> it prints whatever written inside it when JS is not enabled on the browser.

- react-native is an implementation of react on mobile apps.

- react-DOM is an implementation of react on web Apps.

- react creates it's own DOM known as Virtual DOM . after creating this DOM , it compares this DOM with the actuak Main DOM.

- react-scripts are responsible for injecting Javascript in index.html file.

- App() is a function returning HTML.
- it provides you programming capabilities in HTML.

// for vite 

    - it does not provide react-scripts.
    - hence , JS is injected directly using   traditional method into HTML.

- we can return only one element from react function.
- hence if we want to return multiple elements , we need to wrap all those elements inside a fragment (<></>)

// best practices
    
    - start function names with capital letter.
    - start file name with capital letter.
    - some libraries will force you to keep file extension with .jsx . only for those files which are returning some HTML .
    
    - JSX - JS returning HTML.

    NOTE - any file returning HTML can have .jsx extension.

// ****************************************




// L4**************************************

// creating our own react

// 2:02:22

- react uses a bundler.

- expression , evaluated expression.

- we need to follow the standard syntax that has been predefined , while creating our own react element . we cannot use any random syntax while creating a react element.

steps to create our own react element - 

    1) first we need a container where we will inject our react element.
    2) now we need a customRender method using which we will inject our element.
    3) in this method we will pass the reactElement and the container on which we will inject our reactElement.
    4) NOTE - follow standard syntax while creating the reactElement.


    // summary 2:20:00 - 2:23:00

    // see react source code - github/facebook/react

    ### NOTE - read more about babel.

// ****************************************

// L5 *********************************************
# hooks

while creating projects - 

- main file is "main.jsx"
- do work on "App.jsx"

Counter Project -

- main power of react comes when there is UI updation.
- i.e, a single variable is getting updated at multiple places in UI.
- in such scenario , react controls the UI updation process smoothly.

- for this UI updation purpose , react provides some methods known as "hooks" , which helps in easy/smooth UI updation.

- every hook performs a particular task.

- import { useState } from 'react'  -> importing a hook.

different hooks - 

### useState - 
    - used to change state and update state in UI.

    // using a hook
  ** syntax - let [counter , setCounter] = useState(15) **

    // we can use any name in place of counter and setCounter.
    // counter variable used here will get updated in UI.
    // setCounter is  a method that will control counter variable.
    // 15 -> default value of counter variable. we can use any value here.
    // now whenever you want to update value of counter , just call setCounter method and do the updation inside that.
    // it will automatically update the value of counter at all the places in the UI.


// 2:55:40
// *************************************************

// L6 **********************************************
(Important for interview)

// virtual DOM in react
(not used today)

in react , 
-- createRoot() method creates a DOM like structure behind the scene.
-- this DOM is known as Virtual DOM.
-- then this virtual DOM is compared with browsers main DOM.
-- then instead od re-creating the entire DOM ,  only the required changes are made in the browsers actual DOM.
-- the algorithm used to update DOM by comparing with virtual DOM is "react fiber".

whereas,
-- in browser , everytime a new DOM is created . this is known as page-reloading , i.e, to create a new DOM everytime.

-- read article about react fiber
-- https://github.com/acdlite/react-fiber-architecture
-- key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

-- reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.

-- Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM.

// ********* imp for interview ******************
-- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
// ********************************************

The key points are:

-- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.

-- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.

-- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

-- pause work and come back to it later.
-- assign priority to different types of work.
-- reuse previously completed work.
-- abort work if it's no longer needed.
//***************************************************

// L7 ****************************************************
props(properties in react) and tailwind CSS

-- every tag must be  closed tag in react.

-- props make components reusable.

-- we can create components and reuse it as many times as we want.
-- we can also pass values from these components
-- to receive and use these values we will use props inside the function that we created for components. 

//*******************************************************

// 3:48:32 *******************************************
L8(important for interview)


// watch video

// *******************************************************

// 3:56:56 ********************************************





// *****************************************************

// 4:18:00 **********************************************
(password generator project)

useCallback() - read more about this hook

 -- useCallback is a React Hook that lets you cache a function definition between re-renders.
 -- The React useCallback Hook returns a memoized callback function.
 -- Think of memoization as caching a value so that it does not need to be recalculated.
 -- The useCallback Hook only runs when one of its dependencies update.
 -- This can improve performance.
 -- it tries to memorize the function as much as possible.

 useEffect() - read more about this hook

  -- while using useCallback().
  -- use useEffect() to make a function call.
  -- whenever our page reloads , then this hook or function inside is re-runned.
  -- even if there is any manipulation with the values that have been passed in dependencies array , this hook will re-run everytime a change or manipulation has been done on dependencies.


useRef() - hook use to refer something

    -- whenever we want reference of something , use useRef() hook.
    -- use ref keyword to get reference of the value stored in a field.
    
    
-- we can use window in core react.
-- in Next.js we can't use window object , since it runs on server side.

// use this code to copy content stored in password keyword to clipboard.
-- window.navigator.clipboard.writeText(password)

// this line will highlight the text while copying.
-- passwordRef.current?.select()

// this will select and copy only first three characters from the entire text.
-- passwordRef.current?.setSelectionRange(0,3)

// *******************************************************


// ***************************************************************
(5:12:13)

# Currency Convertor project - 

api - 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json'


// NOTE - mostly values fetched via an api call are in string format , hence we need to convert it into json format.

// creating custom hooks

best practice-
    -- name file with .js extension when you are returning js.
    -- name filw with .jsx extension when you are returning jsx.

// NOTE** - custom hooks can also use built-in hooks(useState , etc).

-- first letter of file inside component folder should be capital.

// best practice -
// create a index.js file in componenets folder and import all componenets in it 
// then export all components from that file
// instead of exporting each compoenent from its file.

# useId() hook -

-- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

-- useId returns a unique ID string associated with this particular useId call in this particular component.

-- Do not call useId to generate keys in a list. Keys should be generated from your data.




// ***************************************************************

// 6:14:00 ********************************************************
# React-Router-Dom

// website project

// reactrouter.com
// react router is a third party library , not a core part of react.js

// npm i react-router-dom -> to install reactrouter.

// there are multiple things which you get with react-router-dom.

// ************** interview question ***************
// <Link> tag - used in place of <a> tag.
// if you use <a> tag , then everytime the page will reload , but in react we do not want our page to reload everytime, hence we use <Link> tag which provides us  with this feature , hence do not use <a> tag.



<NavLink
className={(isActive) =>
`block py-2 pr-4 pl-3 duration-200 
${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}>Home
</NavLink>

// writing classes like this inside a callback provides us the flexibility to manipulate them .
// isActive automatically matches the current pages link with varaible and changes it acording to specified condition.
// **************************************************


// footer

-- react router provides <Outlet/>
-- wherever you have written <Outlet/> , there you can change things.

-- inside main.jsx replace <App /> by 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)

since we are using reat router , we will use react router for rendering , you no longer need to specify each component in App.jsx and create the structre of site.

<RouterProvider router = {router}/>

// this takes a prop router

// how to create  router?

// 2 ways

// m1 - pass the list of path and its corresponding element in an object inside createBrowserRouter method

/*
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,   // the parent element
    children:[
      {
        path:"" ,         // to display on path:/
        element:<Home/>
      },
      {
        path:"about",     // path : /about
        element:<About/>
      },
      {
        path:"contact",    // path : /contact
        element:<Contact/>
      }
    ]
  }
])
  */

  // create a Layout.jsx file and create a basic layout 

  eg - function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

// a very common scenario in react ->
in this layout header and footer will remain as it is
only the place where outlet is written will be changed.

// on changing path only place where outlet is written will be changed , rest will remain as it is.


// NOTE - define to = "path" in Link and navLink to properly navigate

// m2 of creating router (use this)

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

// import { useParams } from 'react-router-dom';
// returns userid value 
// const {userid} = useParams()

// more optimised way to load data

-- use loader in route
-- use useLoaderData() hook to get this loaded data.

-- loader starts fetching the data as soon as your cursor moves over the option even before clicking , this makes data fetching much faster and reduces the lag while data fetching.


// instead of doing like this use a loader
// const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohitgargRG')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


// read more about react-router-dom from documentation.

**********************************************************
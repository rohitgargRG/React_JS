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
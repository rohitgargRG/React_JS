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
    

// ****************************************
import { useState } from 'react'     // hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color , setColor] = useState("olive");

  return (
    
    <div className="w-full h-screen duration-200"
     style = {{ backgroundColor: color }}>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          
          <button
          onClick = {() => setColor("red")}
          className="outline-none px-4 shadow-lg" style = {{backgroundColor : "red"}}
          >Red</button>

          <button
          onClick = {() => setColor("green")}
          className="outline-none px-4 shadow-lg" style = {{backgroundColor : "green"}}
          >green</button>

          <button
          onClick = {() => setColor("blue")}
          className="outline-none px-4 shadow-lg" style = {{backgroundColor : "blue"}}
          >blue</button>


        </div>
     </div>
  )
}

export default App

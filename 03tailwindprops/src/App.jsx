import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards.jsx';

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "rg",
    age : 21
  }

  return (
    <>
    <h1 className='text-xl bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
    
    {/* // using props */}
    {/* pass values here to reflect these values in UI */}
    <Card userName = "rohitgarg" btnText = "text1"/>
    <Card userName = "rg" btnText = "text2"/>
    </>
  )
}

export default App

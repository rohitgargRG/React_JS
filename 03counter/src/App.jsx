import { useState } from 'react'     // hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  // using a hook
  let [counter , setCounter] = useState(15)
  // we can use any name in place of counter and setCounter.
  // counter variable used here will get updated in UI.
  // setCounter is  a method that will control counter variable.
  // 15 -> default value of counter variable. we can use any value here.
  // now whenever you want to update value of counter , just call setCounter method and do the updation inside that.
  // it will automatically update the value of counter at all the places in the UI.


  // let counter = 5; -> this variable would never get reflected in UI.

  function addValue(){
  
    // counter = counter + 1;
    // setCounter(counter)

    // OR

    if(counter <= 19) setCounter(counter + 1)
  }

  function subValue(){
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick={addValue}
     >add value :  {counter}</button>
     <br />
     <button
      onClick={subValue}
     >subtract value :  {counter}</button>
    </>
  )
}

export default App

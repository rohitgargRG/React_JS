import { useState , useCallback} from 'react'

function App() {
  
  // step 1 - create a hook to track length
  const [length, setLength] = useState(8)

  // step 2 - create a hook to track whether to use numbers/characters or not
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setcharacterAllowed] = useState(false)

  // step 3 - create a hook to track the text inside the input field
  const [password , setPassword] = useState("")

  // step 4 - create a password generator method
  // since this passwordGenertor method will be called in multiple places again and again.
  // read about useCallback hook
  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


      if(numberAllowed)str += "0123456789"
      if(characterAllowed) str += "!@#$%^&*()~"

      for(let i = 1 ; i <= length ; i++){
        let char = Math.floor(Math.random()*str.length + 1);
        pass = str.charAt(char)
      }

      setPassword(pass)
  },[length , numberAllowed , characterAllowed , setPassword])

  



  return (
    <>

    <div className='w-full max-h-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-white text-center my-3 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value = {password}
          className='outline-none w-full py-1 px-3 bg-white text-gray-600'
          placeholder='Password'
          readOnly
          />

      </div>


    </div>

    </>
  )
}

export default App

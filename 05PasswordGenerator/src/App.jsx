import { useState , useCallback , useEffect , useRef} from 'react'

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
        pass += str.charAt(char)
      }

      setPassword(pass)
  },[length , numberAllowed , characterAllowed , setPassword])

  // we cannot call this function like this now.
  // passwordGenerator()

  // use useEffect() hook to make the function call
  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , characterAllowed , passwordGenerator])


  // creating copy feature
  // useRef() hook
  const passwordRef = useRef(null)

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  } , [password])


  return (
    <>
    <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
      <div className='md:w-[80%]  lg:w-[50%]  w- max-h-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800'>
        <p className='text-white text-center my-3 text-5xl'>Password Generator</p>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            
            <input 
            type="text" 
            value = {password}
            className='outline-none w-full py-1 px-3 bg-white text-gray-600'
            placeholder='Password'
            readOnly
            // use ref to get reference of the value written inside this field.
            ref = {passwordRef}
            />

            <button
            onClick = {copyPasswordToClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>

        <div className='flex text-sm gap-x-8'>
          {/* // slider */}
          <div className='flex items-center gap-x-1'>
                <input 
                  type="range" 
                  min = {6} 
                  max = {100} 
                  value = {length} 
                  className='cursor-pointer' 
                  onChange={
                      (e) => {setLength(e.target.value)
                  }}
                />
                <label>Length: {length}</label>
          </div>

          {/* // numbers checkbox */}
          <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  defaultChecked = {numberAllowed}
                  id='numberInput'
                  onChange={
                       (e) => {setNumberAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor='numberInput'>Numbers</label>
          </div>

          {/* // characters checkbox */}
          <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  defaultChecked = {characterAllowed}
                  id='characterInput'
                  onChange={
                       (e) => {setcharacterAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor='characterInput'>Characters</label>
          </div>


        </div>


    </div>

    </div>

    </>
  )
}

export default App

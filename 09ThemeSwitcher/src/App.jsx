
import { useEffect , useState } from 'react'
// import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  // we have functions lightTheme() , darkTheme()
  // but we don't know what functionality they provide
  // in such scenarios you can directly create a method with that name here in App.jsx file
  // and defin it's functionality over here.
  // automatically that functionality will be provided to them

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme (use javascript)

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  // any change in themeMode will cause the useEffect to run


  return (

    <ThemeProvider value = {{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme button */}
                        <ThemeBtn/>
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                        {/* card */}
                        <Card/>
                    </div>
              </div>
        </div>
    </ThemeProvider>
  )
}

export default App

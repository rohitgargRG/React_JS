import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

const reactELement = (
   'a',
   {href : "https://google.com" , target : "_blank"},
   "click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  reactELement
)

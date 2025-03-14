import { useState } from 'react'
import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1>react JS</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

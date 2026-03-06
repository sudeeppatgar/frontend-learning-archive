import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Components/Header/Header'
import Sidebar1 from './Components/Sidebar/Sidebar'
import TopContent from './Components/Mid-top-content/Top'


function App() {

  return (
    <>
      <div className="App">
        <div className="side">
        <Sidebar1/>
        </div>
        <div className="main">
    <Dashboard/>
      <TopContent/>
    </div>
      </div>
      </>
  )
}

export default App

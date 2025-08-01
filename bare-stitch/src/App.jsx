import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar.jsx'
import videoBackground from './assets/background.mp4'
import './App.css'

const Card = ({title}) => {
  return (
    <div>{title}</div>
  )
}


const App = () => {
  return(
    <div>
    <video src={videoBackground} autoPlay loop muted className="w-screen h-screen object-cover"/>
    <main className="absolute w-screen h-screen top-0">
    <Navbar />
    <div>
    
    </div>
    </main>
    </div>
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import background from 'assets/background.mp4'
import './App.css'

const Card = ({title}) => {
  return (
    <div>{title}</div>
  )
}


const App = () => {
  return(
    <main>
    <div>
      <video src=
{background}
            autoplay="{true}" loop muted
            className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
    <h2 className="text-3xl font-bold underline">Bare Stitch</h2>
    <Card title = "Cute cat"/>
    </div>
    </main>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) => {
  return (
    <div>{title}</div>
  )
}


const App = () => {
  return(
    <div>
    <h2 className="text-3xl font-bold underline">Bare Stitch</h2>
    <Card title = "Cute cat"/>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Advice from './components/Advice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Advice></Advice>
    </>
  )
}

export default App

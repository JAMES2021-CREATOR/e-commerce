import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
import { useState } from 'react'
import viteLogo from './assets/vite.svg'

import './App.css'
import Hero from './component/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    </>
  )
}

export default App

import { useState } from 'react'
import viteLogo from './assets/vite.svg'

import './App.css'
import Hero from './component/Hero'
import Categories from './component/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Categories/>
    </>
  )
}

export default App

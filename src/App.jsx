import { useState } from 'react'
import viteLogo from './assets/vite.svg'

import './App.css'
import Hero from './component/Hero'
import Categories from './component/Categories'
import TrendingProducts from './component/Trendingproducts'
import PromoBanner from './component/PromoBanner'
import Newsletter from './component/Newsletter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Categories/>
    <TrendingProducts/>
    <PromoBanner/>
    <Newsletter/>
    </>
  )
}

export default App

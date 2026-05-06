import React from 'react'
import Hero from '../component/Hero'
import Categories from '../component/Categories'
import TrendingProducts from '../component/Trendingproducts'
import PromoBanner from '../component/PromoBanner'
import Newsletter from '../component/Newsletter'

function Home() {
  return (
    <div>
        <Hero/>
        <Categories/>
        <TrendingProducts/>
        <PromoBanner/>
        <Newsletter/>
        
    </div>
  )
}

export default Home
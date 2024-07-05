import React from 'react'
import About from './About/About'
import Footer from '../../Common/Footer/Footer'
import LastCollections from './LastCollections/LastCollections'
import MostWanted from './MostWanted/MostWanted'
import Navbar from '../../Common/Navbar/Navbar'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import TopCollection from './TopCollection/TopCollection'

const TheFirstPage = () => {
  return (
    <div>
      <Navbar/>
      <TopCollection/>
      <MostWanted/>
      <ShopByCategory/>
      <LastCollections/>
      <About/>
      <Footer/>
    </div>
  )
}

export default TheFirstPage
import React from 'react'
import About from './About/About'
import Cart from '../../Common/Cart/Cart'
import Footer from '../../Common/Footer/Footer'
import LastCollections from './LastCollections/LastCollections'
import MostWanted from './MostWanted/MostWanted'
import Navbar from '../../Common/Navbar/Navbar'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import TopCollection from './TopCollection/TopCollection'
import Search from '../../Common/Search/Search'

const TheFirstPage = () => {
  return (
    <div>
      {/* <Search/> */}
      <Navbar/>
      <Cart/>
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

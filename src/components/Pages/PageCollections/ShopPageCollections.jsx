import React from 'react'
import CollectionsCards from '../PageCollections/CollectionsCards/CollectionsCards'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import './ShopPageCollections.scss'

const ShopPageCollections = () => {
  return (
    <div>
      <Navbar/>
      <CollectionsCards/>
      <Footer/>
    </div>
  )
}

export default ShopPageCollections

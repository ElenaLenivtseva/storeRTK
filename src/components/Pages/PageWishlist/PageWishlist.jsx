import React from 'react'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import Wishes from './Wishes/Wishes'

const PageWishlist = () => {
  return (
    <div className='wishlist'>
      <Navbar/>
      <Wishes/>
      <Footer/>
    </div>
  )
}

export default PageWishlist

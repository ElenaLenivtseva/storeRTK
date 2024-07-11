import React from 'react'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import Recommendations from './Recommendations/Recommendations'
import SingleProductCard from './SingleProductCard/SingleProductCard'
import Reviews from './Reviews/Reviews'


const SingleProduct = () => {
  return (
    <div className='singleProduct'>
      <Navbar/>
      <SingleProductCard/>
      <Reviews/>
      <Recommendations/>
      <Footer/>
    </div>
  )
}

export default SingleProduct

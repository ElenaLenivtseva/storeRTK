import React from 'react'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import Recommendations from './Recommendations/Recommendations'
import ReviewCard from './Reviews/ReviewCard/ReviewCard'
import SingleProductCard from './SingleProductCard/SingleProductCard'


const SingleProduct = () => {
  return (
    <div className='singleProduct'>
      <Navbar/>
      <SingleProductCard/>
      <Recommendations/>
      <Footer/>
    </div>
  )
}

export default SingleProduct

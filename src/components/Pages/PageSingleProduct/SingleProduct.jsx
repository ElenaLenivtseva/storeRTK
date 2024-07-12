import React from 'react'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import Recommendations from './Recommendations/Recommendations'
import SingleProductCard from './SingleProductCard/SingleProductCard'
import Statistic from './Statistic/Statistic'
import Reviews from './Reviews/Reviews'

const SingleProduct = () => {
  return (
    <div className='singleProduct'>
      <Navbar/>
      <SingleProductCard/>
      <Statistic estimates={[86, 11, 3, 0, 0]}/>
      <Reviews/>
      <Recommendations/>
      <Footer/>
    </div>
  )
}

export default SingleProduct

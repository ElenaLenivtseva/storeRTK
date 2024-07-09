import React from 'react'
import Footer from '../../Common/Footer/Footer'
import Navbar from '../../Common/Navbar/Navbar'
import Recommendations from './Recommendations/Recommendations'

const SingleProduct = () => {
  return (
    <div className='singleProduct'>
      <Navbar/>
      <Recommendations/>
      <Footer/>
    </div>
  )
}

export default SingleProduct

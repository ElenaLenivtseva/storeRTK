import React from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import CategoriesWrap from './CategoriesWrap/CategoriesWrap'

const PageCategories = () => {
  return (
    <div className='pageCategories'>
      <Navbar/>
      <CategoriesWrap/>
      <Footer/>
    </div>
  )
}

export default PageCategories

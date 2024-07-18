import React from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import AccountWrap from './AccountWrap/AccountWrap'

const PageAccount = () => {
  return (
    <div className='pageAccount'>
      <Navbar/>
      <AccountWrap/>
      <Footer/>
    </div>
  )
}

export default PageAccount

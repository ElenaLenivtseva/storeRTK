import React from 'react'
import NavbarMenuItem from '../NavbarMenuItem/NavbarMenuItem'

const menuItems = [
  'Clothes',
  'Accessories',
  'Body Type',
  'Appearance'
]
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__top">
        <p className="navbar__offer">Enjoy Complimentary Shipping on All Orders Worldwide!</p>
      </div>
      <div className="navbar__bottom">
        <img className="navbar__log" src='' alt='logo'/>
        <div className="navbar__menu">
          {menuItems.map((item, index)=>{
            return (
              <NavbarMenuItem key={index} text={item}/>
            )
          })}
        </div>
        <div className="navbar__actionsWrap">
            <img className="navbar__actionImg" src="" alt="search"/>
            <img className="navbar__actionImg" src="" alt="account"/>
            <img className="navbar__actionImg" src="" alt="cart"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

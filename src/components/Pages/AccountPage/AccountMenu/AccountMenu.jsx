import React from 'react'
import AccountMenuItem from '../AccountMenuItem/AccountMenuItem'
import { accountMenuIcon, ordersMenuIcon, walletMenuIcon, addressMenuItem, outMenuItem } from '../../../icons'
import './AccountMenu.scss'

const menuItems = [
{title: 'My Personal Information', svg: accountMenuIcon},
{title: 'My Orders', svg: ordersMenuIcon},
{title: 'My Wallet', svg: walletMenuIcon},
{title: 'My Shipping Address', svg: addressMenuItem},
{title: 'Sign Out', svg: outMenuItem},
]
const AccountMenu = () => {
  return (
    <div className='accountMenu'>
      <h4 className='subtitle accountMenu__welcome'>Hello Chloe!</h4>
      <ul className="accountMenu__list">
      {menuItems.map((item, index)=>{
        return (
            <AccountMenuItem key={index} item={item}/>
        )
      })}
      </ul>
      
      
    </div>
  )
}

export default AccountMenu

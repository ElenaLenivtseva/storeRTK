import React from 'react'
import AccountMenuItem from '../AccountMenuItem/AccountMenuItem'
import { accountMenuIcon, ordersMenuIcon, walletMenuIcon, addressMenuItem, outMenuItem } from '../../../icons'
import './AccountMenu.scss'

const menuItems = [
{title: 'My Personal Information', svg: accountMenuIcon, type:'personalInfo'},
{title: 'My Orders', svg: ordersMenuIcon, type:'orders'},
{title: 'My Wallet', svg: walletMenuIcon, type:'wallet'},
{title: 'My Shipping Address', svg: addressMenuItem, type:'address'},
{title: 'Sign Out', svg: outMenuItem, type:'/exit'},
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

import React from 'react'
import './AccountMenuItem.scss'

const AccountMenuItem = ({item}) => {
  return (
    <li className='accountMenuItem'>
      {item.svg}
      {item.title}
    </li>
  )
}

export default AccountMenuItem

import React from 'react'
import './AccountMenuItem.scss'
import { Link } from 'react-router-dom'

const AccountMenuItem = ({item}) => {
  return (
    <Link to={`:${item.type}`}><li className='accountMenuItem'>
    {item.svg}
    {item.title}
  </li></Link>
    
  )
}

export default AccountMenuItem

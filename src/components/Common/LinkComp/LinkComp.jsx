import React from 'react'
import './LinkComp.scss'

const LinkComp = ({children}) => {
  return (
    // пока a, потом будет Link
    <a className='link' href="#">{children}</a>
  )
}

export default LinkComp

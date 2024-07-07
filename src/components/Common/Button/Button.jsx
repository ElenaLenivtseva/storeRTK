import React from 'react'
import './Button.scss'

const Button = ({className, children}) => {
  return (
    <div className={`button ${className}`}>
      {children}
    </div>
  )
}

export default Button

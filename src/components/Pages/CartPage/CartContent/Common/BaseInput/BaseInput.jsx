import React from 'react'
import './BaseInput.scss'

const BaseInput = ({type, placeholder}) => {
  return (
    <input className="input" type={type} placeholder={placeholder} />
  )
}

export default BaseInput

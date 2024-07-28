import React from 'react'
import './BaseInput.scss'

const BaseInput = ({info}) => {
  return (
    <input className="input" type={info.type} placeholder={info.placeholder} />
  )
}

export default BaseInput

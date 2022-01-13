import React from 'react'
import './Button.css'

const Button = props => {
  return (
    <button className="goBack" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button

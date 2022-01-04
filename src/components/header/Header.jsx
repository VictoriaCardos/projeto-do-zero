import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className="headerBox">
      <h1>{props.children}</h1>
      <span className="link">
        <Link to="/">Home</Link>
      </span>
      <span className="link">
        <Link to="/Sobre">Sobre</Link>
      </span>
      <span className="link">
        <Link to="/Cadastro">Cadastro</Link>
      </span>
    </div>
  )
}

export default Header

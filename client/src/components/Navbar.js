import React from 'react'

import logo from '../assets/images/logo1.jpeg'

const Navbar = ({ CartHandler }) => {
  return (
    <nav className="nav">
      <div>
        <p onClick={CartHandler}>Sub nav</p>
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </nav>
  )
}

export default Navbar

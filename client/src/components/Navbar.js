import React, { useContext } from 'react'
import { ChevronDown } from 'react-feather'
import { Menu, ShoppingCart, User } from 'react-feather'
import { Link } from 'react-router-dom'

import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import snapchat from '../assets/icons/snapchat.png'
import twitter from '../assets/icons/twitter.png'
import { AppContext } from '../utils/context/context'

// import logo from '../assets/images/logo1.jpeg'
const Navbar = ({ type }) => {
  const { cartItems, CartHandler, SideDrawerHandler } = useContext(AppContext)

  return (
    <nav className={type === 'nav-absolute' ? 'nav p-2 nav-absolute' : 'nav p-2 nav-fixed shadow'}>
      <div className="main-nav">
        <div className="main-nav__left">
          {/* <Menu className="icon" size="35" onClick={SideDrawerHandler} /> */}
          <Link to="/">
            <h1>MAZI</h1>
          </Link>
          <ul>
            {/* <li>
              <h6 className="text-sm mb-1">Categories</h6> <ChevronDown className="mr-2" />
            </li> */}
            <li>
              {/* <span className="text-sm mb-1">African stories</span> */}
              <Link className="nav-link text-dark" to="/products">
                All products
              </Link>
            </li>
            <li>
              {/* <span className="text-sm mb-1">African stories</span> */}
              <Link className="nav-link text-dark" to="/">
                New arrivals
              </Link>
            </li>
            <li>
              {/* <span className="text-sm mb-1">About us</span> */}
              <Link className="nav-link text-dark" to="/">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="main-nav__right">
          <Link className="text-dark" to="/login">
            <User className="icon" size="35" />
          </Link>

          <div className="cart-nav">
            <ShoppingCart className="icon" size="35" onClick={() => CartHandler(true)} />
            {cartItems.length > 0 && (
              <span className="cart-counter bg-primary" onClick={() => CartHandler(true)}>
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

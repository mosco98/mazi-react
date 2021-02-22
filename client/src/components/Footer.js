import React from 'react'
import { Facebook, Instagram, Twitter } from 'react-feather'

import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import masterCard from '../assets/icons/master-card.png'
import payStack from '../assets/icons/paystack-icon.png'
import snapchat from '../assets/icons/snapchat.png'
import twitter from '../assets/icons/twitter.png'
import visaCard from '../assets/icons/visa-card.png'

const Footer = () => {
  return (
    <footer className="px-4 py-5">
      <div className="footer__top py-2">
        <div>
          <h5>Join our mailing list</h5>
          <small className="text-muted">Be the first to get updates on new products</small>
          <form>
            <input
              className="form-control rounded-0 border-none outline-none"
              type="text"
              placeholder="Email address"
            />
            <button className="btn btn-dark rounded-0">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom py-2">
        <div className="mb-3">
          <a className="social-btn sb-light sb-twitter ml-2 mb-2" href="#">
            <img src={instagram} alt="instagram" />
          </a>
          <a className="social-btn sb-light sb-facebook ml-2 mb-2" href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a className="social-btn sb-light sb-instagram ml-2 mb-2" href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a className="social-btn sb-light sb-pinterest ml-2 mb-2" href="#">
            <img src={snapchat} alt="snapchat" />
          </a>
        </div>
        <ul>
          <li>
            <img src={masterCard} alt="masterCard-logo" />
          </li>
          <li>
            <img src={visaCard} alt="visaCard-logo" />
          </li>
          <li>
            <img className="paystack-icon" src={payStack} alt="payStack-logo" />
          </li>
        </ul>
      </div>
      <span className="mt-4 ml-2">© 2021, Mazi wears</span>
    </footer>
  )
}

export default Footer

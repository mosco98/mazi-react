import React from 'react'

import creditCard from '../assets/icons/credit-card.png'
import refund from '../assets/icons/refund.png'
import rocket from '../assets/icons/rocket.png'
import support from '../assets/icons/support.png'

const ServiceSection = () => {
  return (
    <div className="py-5 py-lg-6 service-section">
      <div className="container">
        <div className="row">
          <div className="py-4 service-column col-sm-6 col-lg-3">
            <img src={rocket} alt="rocket-icon" />
            <div className="service-text text-left">
              <h6 className="text-sm mb-1">Free shipping &amp; return</h6>
              <p className="text-muted font-weight-light text-sm mb-0">Free Shipping over $300</p>
            </div>
          </div>
          <div className="py-4 service-column col-sm-6 col-lg-3">
            <img src={refund} alt="refund-icon" />
            <div className="service-text text-left">
              <h6 className="text-sm mb-1">Money back guarantee</h6>
              <p className="text-muted font-weight-light text-sm mb-0">30 Days Money Back Guarantee</p>
            </div>
          </div>
          <div className="py-4 service-column col-sm-6 col-lg-3">
            <img src={creditCard} alt="credit-card-icon" />
            <div className="service-text text-left">
              <h6 className="text-sm mb-1">Best prices</h6>
              <p className="text-muted font-weight-light text-sm mb-0">Always the best prices</p>
            </div>
          </div>
          <div className="py-4 service-column col-sm-6 col-lg-3">
            <img src={support} alt="support-icon" />
            <div className="service-text text-left">
              <h6 className="text-sm mb-1">020-800-456-747</h6>
              <p className="text-muted font-weight-light text-sm mb-0">24/7 Available Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection

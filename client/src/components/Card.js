import React from 'react'

import productImg__1 from '../assets/images/IMG_3403-removebg-preview.png'

const Card = ({ product, AddToCartHandler }) => {
  return (
    <div className="card-ctn col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card px-4 py-3">
        <div className="img-ctn">
          <img src={productImg__1} alt="product-img" />
        </div>
        <div className="details-ctn">
          <div className="details">
            {/* <h3 className="font-size-xs category d-block">T-shirts</h3> */}
            <h5 className="mb-1 name d-block">{product.name}</h5>
            <div className="price">
              {product.old_price !== product.new_price && <span className="old-price mr-2">₦{product.old_price}</span>}
              <span>₦{product.new_price}</span>
            </div>
          </div>
          <button onClick={() => AddToCartHandler(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card

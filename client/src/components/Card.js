import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import productImg__1 from '../assets/images/IMG_3403-removebg-preview.png'
import { AppContext } from '../utils/context/context'

const Card = ({ product }) => {
  const { AddToCartHandler } = useContext(AppContext)
  return (
    <div className="card-ctn col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card px-4 py-3">
        <div className="img-ctn">
          <img src={product.image} alt="product-img" />
        </div>
        <div className="details-ctn">
          <div className="details">
            {/* <h3 className="font-size-xs category d-block">T-shirts</h3> */}

            <Link to={`/product/${product.id}`}>
              <h5 className="mb-1 name d-block">{product.name}</h5>
            </Link>

            <div className="price">
              {product.old_price !== product.new_price && (
                <span className="old-price mr-2 text-sm">₦{product.old_price}</span>
              )}
              <span>₦{product.new_price}</span>
            </div>
          </div>
          <button className="btn btn-dark" onClick={() => AddToCartHandler(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card

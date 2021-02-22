import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, ServiceSection } from '../components'
import { products } from '../utils/api'
import { AppContext } from '../utils/context/context'

const Product = ({ match }) => {
  const { AddToCartHandler } = useContext(AppContext)
  const {
    params: { productId }
  } = match

  const product = products.find((product) => product.id === productId)

  console.log(product)

  return (
    <div className="text-center">
      <Navbar type="nav-fixed" />
      <div className="page-content p-3 product-page-content row">
        <div className="product-image-ctn p-3 col-sm-6 col-lg-6">
          <div className="img-ctn">
            <img src={product.image} alt="product-img" />
          </div>
        </div>
        <div className="product-details-ctn p-3 text-left col-sm-6 col-lg-6">
          <div className="text-left product-details__title">
            <h1 className="text-uppercase">{product.name}</h1>
            <span className="text-muted">₦{product.new_price}</span>
          </div>
          <button className="btn btn-lg btn-dark rounded-0" onClick={() => AddToCartHandler(product)}>
            Add to cart
          </button>
          <div>
            <p>
              What inspired this design?{' '}
              <small>
                <Link to={`/story/${product.story.id}`}>Read here...</Link>
              </small>
            </p>
          </div>
          <div>
            <button>Twitter</button>
            <button>Facebook</button>
          </div>
        </div>
      </div>
      <span className="more">More products</span>
      <ServiceSection />
    </div>
  )
}

export default Product

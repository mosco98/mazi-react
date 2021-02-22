import React, { useContext } from 'react'
import { ChevronRight } from 'react-feather'

import { Card, Navbar } from '../components'
import { products } from '../utils/api'
import { AppContext } from '../utils/context/context'

const Products = () => {
  const { AddToCartHandler } = useContext(AppContext)
  return (
    <div>
      <Navbar type="nav-fixed" />
      <div className="page-content">
        <section className="container-fluid h-auto section px-5">
          <div className="pt-4 row">
            {products.map((product, i) => (
              <Card key={i} product={product} AddToCartHandler={AddToCartHandler} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products

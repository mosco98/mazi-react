import React from 'react'
import { ChevronRight } from 'react-feather'

import { Card } from '.'
import { products } from '../utils/api'

const Section = ({ AddToCartHandler }) => {
  return (
    <section className="container-fluid h-auto section px-5">
      <div className="section-header px-4">
        <h2 className="text-center h3">Products</h2>
      </div>
      <div className="pt-4 row">
        {products.map((product, i) => (
          <Card key={i} product={product} AddToCartHandler={AddToCartHandler} />
        ))}
      </div>
      <span className="more mt-3">
        More products
        <ChevronRight size="16" />
      </span>
    </section>
  )
}

export default Section

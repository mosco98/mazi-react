import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from '../components'
import { products } from '../utils/api'

const Story = ({ match }) => {
  const {
    params: { storyId }
  } = match

  const product = products.find((product) => product.story.id === storyId)

  return (
    <div>
      <Navbar type="nav-fixed" />
      <div className="page-content row p-3 mx-0">
        <div className="col-lg-6 col-md-6 col-sm-6 p-1">
          <div className="story-img-ctn">
            <span>Image</span>
            <Link to={`/product/${product.id}`}>See product</Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 story-text-ctn p-1">
          <h1 className="text-uppercase">{product.story.title}</h1>
          {product.story.text.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Story

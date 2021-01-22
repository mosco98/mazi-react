import React from 'react'
import Carousel from 'react-multi-carousel'

import { Navbar, Slide } from '.'
import { slides } from '../utils/api'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  // tablet: {
  //   breakpoint: { max: 1024, min: 464 },
  //   items: 2,
  //   slidesToSlide: 2 // optional, default to 1.
  // },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 1,
  //   slidesToSlide: 1 // optional, default to 1.
  // }
}

const Header = ({ CartHandler }) => {
  return (
    <>
      <Navbar CartHandler={CartHandler} />
      <Carousel
        // className="h-full w-full"
        arrows={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        customTransition="all .5"
        transitionDuration={1000}
        responsive={responsive}>
        {slides.map((slide, i) => (
          <Slide key={i} slide={slide} />
        ))}
      </Carousel>
    </>
  )
}

export default Header

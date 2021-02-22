import React, { Component } from 'react'
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

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { navbarPosition: 'absolute' }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.NavbarScrollHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.NavbarScrollHandler)
  }

  NavbarScrollHandler = () => {
    const header = document.getElementsByClassName('header')
    if (header && window.pageYOffset > header[0].offsetHeight) {
      this.setState({ navbarPosition: 'fixed' })
    } else {
      this.setState({ navbarPosition: 'absolute' })
    }
  }
  render() {
    return (
      <div className="header">
        <Navbar type={this.state.navbarPosition === 'absolute' ? 'nav-absolute' : 'nav-fixed'} />
        <Carousel
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
      </div>
    )
  }
}

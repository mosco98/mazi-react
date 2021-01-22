import React, { Component } from 'react'

import { Cart, Footer, Header, Section, ServiceSection, VideoSection } from '../components'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: [],
      showCart: true
    }
  }

  AddToCartHandler = (product) => {
    const { cartItems } = this.state
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)

    if (exists) {
      this.setState({
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...exists, qty: exists.qty + 1 } : cartItem
        )
      })
    } else {
      this.setState({
        cartItems: [...cartItems, { ...product, qty: 1 }]
      })
    }
  }

  RemoveFromCartHandler = (product) => {
    const { cartItems } = this.state
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)
    if (exists.qty === 1) {
      this.setState({
        cartItems: cartItems.filter((cartItem) => cartItem.id !== product.id)
      })
    } else {
      this.setState({
        cartItems: cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...exists, qty: exists.qty - 1 } : cartItem
        )
      })
    }
  }

  CartHandler = () => {
    this.setState({
      showCart: !this.state.showCart
    })
  }

  DeleteProductFromCart = (product) => {
    this.setState({
      cartItems: this.state.cartItems.filter((cartItem) => cartItem.id !== product.id)
    })
  }

  render() {
    const { cartItems, showCart } = this.state
    return (
      <>
        <Header CartHandler={this.CartHandler} />
        <Section title="New arrivals" AddToCartHandler={this.AddToCartHandler} />
        {showCart && (
          <Cart
            CartHandler={this.CartHandler}
            cartItems={cartItems}
            AddToCartHandler={this.AddToCartHandler}
            RemoveFromCartHandler={this.RemoveFromCartHandler}
            DeleteProductFromCart={this.DeleteProductFromCart}
          />
        )}
        <VideoSection />
        <ServiceSection />
        <Footer />
      </>
    )
  }
}

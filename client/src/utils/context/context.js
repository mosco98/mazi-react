import React, { Component, createContext } from 'react'

export const AppContext = createContext()

export class AppContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      showCart: false,
      showSideDrawer: false
      // navbarPosition: 'absolute'
    }
  }

  componentDidMount() {
    this.GetFromLocalStorage()
    // window.addEventListener('scroll', this.NavbarScrollHandler)
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.NavbarScrollHandler)
  // }

  GetFromLocalStorage = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'))
    if (cartItems) {
      this.setState({ cartItems })
    } else {
      this.setState({ cartItems: [] })
    }
  }

  AddToCartHandler = (product) => {
    const { cartItems } = this.state
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)

    if (exists) {
      const newArray = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exists, qty: exists.qty + 1 } : cartItem
      )
      this.setState({
        cartItems: newArray
      })
      this.SaveToLocalStorage(newArray)
    } else {
      const newArray = [...cartItems, { ...product, qty: 1 }]
      this.setState({
        cartItems: newArray
      })
      this.SaveToLocalStorage(newArray)
    }
  }

  RemoveFromCartHandler = (product) => {
    const { cartItems } = this.state
    const exists = cartItems.find((cartItem) => cartItem.id === product.id)
    if (exists.qty === 1) {
      const newArray = cartItems.filter((cartItem) => cartItem.id !== product.id)
      this.setState({
        cartItems: newArray
      })
      this.SaveToLocalStorage(newArray)
    } else {
      const newArray = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exists, qty: exists.qty - 1 } : cartItem
      )
      this.setState({
        cartItems: newArray
      })
      this.SaveToLocalStorage(newArray)
    }
  }

  DeleteProductFromCart = (product) => {
    const newArray = this.state.cartItems.filter((cartItem) => cartItem.id !== product.id)
    this.setState({
      cartItems: newArray
    })
    this.SaveToLocalStorage(newArray)
  }

  CartHandler = (bool) => {
    this.setState({ showCart: bool })

    // if (bool) {
    //   document.body.style.position = 'fixed'
    //   document.body.style.top = `-${window.scrollY}px`
    // } else {
    //   document.body.style.position = ''
    //   document.body.style.top = ''
    // }
  }

  SideDrawerHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer })
  }

  SaveToLocalStorage = (arr) => {
    localStorage.setItem('cartItems', JSON.stringify(arr))
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          cartItems: this.state.cartItems,
          showCart: this.state.showCart,
          CartHandler: this.CartHandler,
          AddToCartHandler: this.AddToCartHandler,
          RemoveFromCartHandler: this.RemoveFromCartHandler,
          DeleteProductFromCart: this.DeleteProductFromCart,
          showSideDrawer: this.state.showSideDrawer,
          SideDrawerHandler: this.SideDrawerHandler,
          // navbarPosition: this.state.navbarPosition,
          SaveToLocalStorage: this.SaveToLocalStorage
        }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

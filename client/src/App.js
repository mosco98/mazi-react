import React, { useContext } from 'react'
import { Route } from 'react-router-dom'

import { Cart, Footer, SideDrawer } from './components'
import { Checkout, Login, Main, Product, Products, Story } from './pages'
import { AppContext } from './utils/context/context'

const App = () => {
  const {
    showCart,
    CartHandler,
    cartItems,
    AddToCartHandler,
    RemoveFromCartHandler,
    DeleteProductFromCart,
    showSideDrawer,
    SideDrawerHandler
  } = useContext(AppContext)

  return (
    <>
      {showCart && (
        <Cart
          CartHandler={CartHandler}
          cartItems={cartItems}
          AddToCartHandler={AddToCartHandler}
          RemoveFromCartHandler={RemoveFromCartHandler}
          DeleteProductFromCart={DeleteProductFromCart}
        />
      )}
      {showSideDrawer && <SideDrawer SideDrawerHandler={SideDrawerHandler} showSideDrawer={showSideDrawer} />}
      <div className="content">
        <Route exact path="/" component={Main} />
        <Route exact path="/product/:productId" component={Product} />
        <Route exact path="/story/:storyId" component={Story} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
      <Footer />
    </>
  )
}

export default App

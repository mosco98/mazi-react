import React from 'react'
import { X } from 'react-feather'

const Cart = ({ CartHandler, cartItems, AddToCartHandler, RemoveFromCartHandler, DeleteProductFromCart }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.new_price, 0)
  return (
    <>
      <div className="back-drop" onClick={CartHandler} />
      <div className="cart p-4">
        <span className="close-cart">
          <X size="30" className="x" onClick={CartHandler} />
        </span>
        {cartItems.length === 0 ? (
          <span className="">Cart is empty</span>
        ) : (
          <>
            <div className="products">
              {cartItems.map((cartItem, i) => (
                <div key={i} className="product">
                  <div className="product__details-ctn">
                    <div className="product__img-ctn">
                      <img src={cartItem.image} alt="product-img" />
                    </div>
                    <div className="product__details">
                      <h6>{cartItem.name}</h6>
                      <small>Quantity: {cartItem.qty}</small>
                      <p>₦{cartItem.new_price * cartItem.qty}</p>
                    </div>
                  </div>
                  <div className="add-remove__btns-ctn">
                    <button className="remove" onClick={() => RemoveFromCartHandler(cartItem)}>
                      -
                    </button>
                    <button className="add" onClick={() => AddToCartHandler(cartItem)}>
                      +
                    </button>
                  </div>
                  <X size="18" className="x" onClick={() => DeleteProductFromCart(cartItem)} />
                </div>
              ))}
            </div>
            <div className="summary">
              <div className="total">
                <h5>Subtotal:</h5>
                <h5>₦{totalPrice}</h5>
              </div>
              <button className="btn btn-block btn-lg">Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart

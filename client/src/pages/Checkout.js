import React, { useContext } from 'react'

import { Navbar, ServiceSection } from '../components'
import { AppContext } from '../utils/context/context'

const Checkout = () => {
  const { cartItems } = useContext(AppContext)

  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.new_price, 0)
  return (
    <div>
      <Navbar type="nav-fixed" />
      <main className="page-content">
        <section class="hero py-4">
          <div class="container">
            <div class="hero-content">
              <h1 class="hero-heading">Checkout</h1>
              <div>
                <p class="lead text-muted">
                  Are you a returning customer? <a href="/customer-login">Login</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="pb-6 container">
          <div class="row">
            <div class="pr-xl-6 col-lg-7">
              <form action="/checkout-confirmed" class="">
                <div class="collapse show">
                  <h5 class="mb-5">Invoice address</h5>
                  <div class="row">
                    <div class="col-md-6 mb-4 form-group">
                      <label for="fullname_invoice" class="form-label">
                        Full Name
                      </label>
                      <input
                        name="fullname_invoice"
                        placeholder=""
                        id="fullname_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="emailaddress_invoice" class="form-label">
                        Email Address
                      </label>
                      <input
                        name="emailaddress_invoice"
                        placeholder=""
                        id="emailaddress_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="street_invoice" class="form-label">
                        Street
                      </label>
                      <input
                        name="street_invoice"
                        placeholder=""
                        id="street_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="city_invoice" class="form-label">
                        City
                      </label>
                      <input
                        name="city_invoice"
                        placeholder=""
                        id="city_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="zip_invoice" class="form-label">
                        ZIP
                      </label>
                      <input
                        name="zip_invoice"
                        placeholder=""
                        id="zip_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="state_invoice" class="form-label">
                        State
                      </label>
                      <input
                        name="state_invoice"
                        placeholder=""
                        id="state_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="phonenumber_invoice" class="form-label">
                        Phone Number
                      </label>
                      <input
                        name="phonenumber_invoice"
                        placeholder=""
                        id="phonenumber_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-12 mt-3 form-group">
                      <div class="custom-control custom-checkbox">
                        <input
                          class="custom-control-input"
                          id="show-shipping-address"
                          type="checkbox"
                          name="show-shipping-address"
                        />
                        <label class="custom-control-label align-middle" for="show-shipping-address">
                          Use a different shipping address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collapse">
                  <h5 class="my-4">Shipping address</h5>
                  <div class="row">
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_fullname_invoice" class="form-label">
                        Full Name
                      </label>
                      <input
                        name="shipping_fullname_invoice"
                        placeholder=""
                        id="shipping_fullname_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_emailaddress_invoice" class="form-label">
                        Email Address
                      </label>
                      <input
                        name="shipping_emailaddress_invoice"
                        placeholder=""
                        id="shipping_emailaddress_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_street_invoice" class="form-label">
                        Street
                      </label>
                      <input
                        name="shipping_street_invoice"
                        placeholder=""
                        id="shipping_street_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_city_invoice" class="form-label">
                        City
                      </label>
                      <input
                        name="shipping_city_invoice"
                        placeholder=""
                        id="shipping_city_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_zip_invoice" class="form-label">
                        ZIP
                      </label>
                      <input
                        name="shipping_zip_invoice"
                        placeholder=""
                        id="shipping_zip_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_state_invoice" class="form-label">
                        State
                      </label>
                      <input
                        name="shipping_state_invoice"
                        placeholder=""
                        id="shipping_state_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                    <div class="col-md-6 mb-4 form-group">
                      <label for="shipping_phonenumber_invoice" class="form-label">
                        Phone Number
                      </label>
                      <input
                        name="shipping_phonenumber_invoice"
                        placeholder=""
                        id="shipping_phonenumber_invoice"
                        type="text"
                        class="form-control-underlined pl-0 form-control"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-5">
              <h5 class="mb-5">Order Summary</h5>
              <table class="border-bottom border-dark mb-5 table">
                <tbody>
                  {cartItems.map((cartItem, i) => (
                    <tr class="text-sm">
                      <th class="py-4 font-weight-normal text-muted">
                        {cartItem.name} <span>x {cartItem.qty}</span>
                      </th>
                      <td class="py-4 text-right text-muted">₦{cartItem.new_price}</td>
                    </tr>
                  ))}
                  <tr>
                    <th class="py-4 text-uppercase font-weight-normal text-sm align-bottom">Order Subtotal </th>
                    <td class="py-4 text-right text-muted">₦{totalPrice}</td>
                  </tr>
                  <tr>
                    <th class="py-5 border-dark" colspan="2">
                      <div class="mb-4">Shipping and handling</div>
                      <div class="mb-1 ml-4 form-group">
                        <div class="custom-control custom-radio">
                          <input class="custom-control-input" id="shipping0" type="radio" name="shipping" checked="" />
                          <label class="custom-control-label text-sm font-weight-normal" for="shipping0">
                            DHL $10
                          </label>
                        </div>
                      </div>
                      <div class="mb-1 ml-4 form-group">
                        <div class="custom-control custom-radio">
                          <input class="custom-control-input" id="shipping1" type="radio" name="shipping" />
                          <label class="custom-control-label text-sm font-weight-normal" for="shipping1">
                            Branch pickup $5
                          </label>
                        </div>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <th class="py-4 text-uppercase font-weight-normal border-dark align-bottom">Total</th>
                    <td class="py-4 text-right h3 font-weight-normal border-dark">₦{totalPrice}</td>
                  </tr>

                  <tr>
                    <th class=" pt-4 pb-5 " colspan="2">
                      {/* <div class="collapse">
                        <div class="pt-4">
                          <p class="text-muted text-sm">
                            His room, a proper human room although a little too small, lay peacefully between its four
                            familiar
                          </p>
                        </div>
                      </div> */}
                    </th>
                  </tr>
                </tbody>
              </table>
              <p class="text-muted text-sm">
                Your personal data will be used to process your order, support your experience throughout this website,
                and for other purposes described in our <a href="#">privacy policy</a>.
              </p>
              <p class="text-muted text-sm mb-5">
                I have read and agree to the website <a href="#">terms and conditions</a>. *{' '}
              </p>
              <a href="/checkout-confirmed" class="mb-5 btn btn-dark btn-lg btn-block">
                Place order
              </a>
            </div>
          </div>
        </div>
      </main>
      <ServiceSection />
    </div>
  )
}

export default Checkout

import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkoutItem';
import StripeCheckoutBtn from '../../components/stripe-button/stripeButton';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkOutPage.scss';


const CheckOutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>
          Product
        </span>
      </div>
      <div className='header-block'>
        <span>
          Discription
        </span>
      </div>
      <div className='header-block'>
        <span>
          Quantitity
        </span>
      </div>
      <div className='header-block'>
        <span>
          Price
        </span>
      </div>
      <div className='header-block'>
        <span>
          Remove
        </span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card for payments
      <br />
      4242 4242 4242 4242 - Exp: 01/21 cvv: 123 
    </div>
    <StripeCheckoutBtn price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
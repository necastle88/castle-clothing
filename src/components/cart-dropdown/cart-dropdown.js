import React from 'react';
import { connect } from 'react-redux';

import CartItem from './../cart-item/cartItem';
import CustomButton from './../custom-button/customButton';
import './cart-dropdown.scss';


const CartDropdown = ({ cartItems }) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
        <CustomButton>CHECK OUT</CustomButton>  
      </div>
   </div> 
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
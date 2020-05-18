import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from './../cart-item/cartItem';
import CustomButton from './../custom-button/customButton';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          :
          <span className='empty-message'>Your cart us empty</span>
        }
        <CustomButton onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden());
        }}>CHECK OUT</CustomButton>  
      </div>
   </div> 
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
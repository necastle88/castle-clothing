import React from 'react';

import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.scss';


const CartDropdown = () => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>CHECK OUT</CustomButton>  
      </div>
   </div> 
  )
}

export default CartDropdown;
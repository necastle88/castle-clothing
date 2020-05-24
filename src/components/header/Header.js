import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'; 
import { selectCurrentUser } from '../../redux/user/user.selector';

import { signOutStart } from '../../redux/user/user.actions'
import { 
  HeaderContainer, 
  OptionDiv, 
  OptionsContainer,
  OptionLink,
  LogoContainer
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
}) 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);

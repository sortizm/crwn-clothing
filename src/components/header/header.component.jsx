import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import { auth } from 'components/firebase/firebase.utils'
import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "redux/user/user.selector";
import {selectToggleHidden} from "redux/cart/cart.selector";

import { ReactComponent as Logo } from 'assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './header.styles'

const Header = ( { currentUser, hidden }) => (
   <HeaderContainer>
       <LogoContainer to='/'>
           <Logo className='logo'/>
       </LogoContainer>
       <OptionsContainer>
           <OptionLink to='/shop'>
               SHOP
           </OptionLink>
           <OptionLink to='/shop'>
               CONTACT
           </OptionLink>
           {
               currentUser ?
                   <OptionDiv className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                   : <OptionLink to='/sign-in'>SIGN IN</OptionLink>
           }
           <CartIcon />
       </OptionsContainer>
       { hidden || <CartDropdown/> }
   </HeaderContainer>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectToggleHidden
});

export default connect(mapStateToProps)(Header);
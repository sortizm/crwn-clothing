import React from 'react';

import './cart-dropdown.styles.scss'
import CustomButton from "components/custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "components/cart-item/cart-item.component";
import {selectCartItems} from "redux/cart/cart.selector";

const CartDropdown = ( {cartItems} ) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems ?
                    cartItems.map(item =>
                        <CartItem key={item.id} item={item}></CartItem>)
                    :null
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

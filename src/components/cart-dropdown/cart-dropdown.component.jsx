import React from 'react';

import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "components/custom-button/custom-button.component";
import CartItem from "components/cart-item/cart-item.component";
import {hideShowCart} from "redux/cart/cart.actions";
import {selectCartItems} from "redux/cart/cart.selector";

import './cart-dropdown.styles.scss'

const CartDropdown = ( {cartItems, history, dispatch} ) => {

    const customButtonAction = () => {
        dispatch(hideShowCart());
        history.push('/checkout')
    };

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(item =>
                            <CartItem key={item.id} item={item}></CartItem>)
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => customButtonAction()}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

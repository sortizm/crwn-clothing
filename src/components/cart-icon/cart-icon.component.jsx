import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from "react-redux";

import { hideShowCart } from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss'

const CartIcon = ({ hideShowCart, itemCount }) => (
    <div className='cart-icon' onClick={hideShowCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    hideShowCart: () => dispatch(hideShowCart())
});

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
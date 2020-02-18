import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from "react-redux";

import { hideShowCart } from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss'

const CartIcon = ({ hideShowCart }) => (
    <div className='cart-icon' onClick={hideShowCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    hideShowCart: () => dispatch(hideShowCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);
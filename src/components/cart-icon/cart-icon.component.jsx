import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from "react-redux";

import { hideShowCart } from "redux/cart/cart.actions";
import {selectCartItemsCount} from "redux/cart/cart.selector";

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

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
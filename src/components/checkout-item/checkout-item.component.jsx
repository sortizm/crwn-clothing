import React from 'react';
import {connect} from "react-redux";

import {clearItemFromCart} from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({item, clearItemFromCart}) => {

    const {imageUrl, name, quantity, price} = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>&pound;{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(item)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);


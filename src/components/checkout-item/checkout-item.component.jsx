import React from 'react';
import {connect} from "react-redux";

import {clearItemFromCart, removeItem, addItem} from "redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({item, clearItem, decreaseItem, increaseItem}) => {

    const {imageUrl, name, quantity, price} = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(item)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => increaseItem(item)}>&#10095;</div>
            </span>
            <span className='price'>&pound;{price}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    decreaseItem: item => dispatch(removeItem(item)),
    increaseItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);


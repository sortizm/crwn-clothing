import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({item: {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>&pound;{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default CheckoutItem;


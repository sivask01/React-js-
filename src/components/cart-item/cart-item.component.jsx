import React from 'react'
import './cart-item.styles.scss';

const CartItem = ({ name, price, imageUrl, quantity}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='img' />
        <div className='item-details'>
            <span className='item-name'> {name} </span>
            <span className='price'>{quantity} x {price}</span>
        </div>
    </div>
)

export default CartItem;
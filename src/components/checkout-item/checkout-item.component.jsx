import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, claerItem, addItem, removeItem }) => ( 
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt="img" />
        </div>
        <span className='name'> {cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}> &#10094;</div>
            <span className='value'> {cartItem.quantity} </span>
            <div className='arrow' onClick={() => addItem(cartItem)}> &#10095;</div>
        </span>
        <span className='price'> {cartItem.price}</span>
        <span className='remove-buton' onClick={() => claerItem(cartItem)}> &#10005;</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    claerItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispathToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
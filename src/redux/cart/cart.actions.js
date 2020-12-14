import { cartActionTypes } from './cart.types';

const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
})

const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export {
    toggleCartHidden,
    addItem,
    removeItem,
    clearItemFromCart
}
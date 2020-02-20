import {CartActionTypes} from "./cart.types";

export const hideShowCart = () => ({
    type: CartActionTypes.HIDE_SHOW_CART
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

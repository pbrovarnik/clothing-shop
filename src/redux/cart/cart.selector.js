import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const cartItems = createSelector([selectCart], (cart) => cart.cartItems);
export const cartItemsCount = createSelector([cartItems], (cartItems) =>
	cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
);

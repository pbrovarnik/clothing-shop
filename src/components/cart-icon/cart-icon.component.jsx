import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { cartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{cartItemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (rootState) => ({
	cartItemCount: cartItemsCount(rootState),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

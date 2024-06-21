import React from 'react';
import { connect } from 'react-redux';

import shoppingIcon from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, cartItemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<img className="shopping-icon" src={shoppingIcon} alt="Shopping Icon" />
		<span className="item-count">{cartItemCount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (rootState) => ({
	cartItemCount: selectCartItemsCount(rootState),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import { takeLatest, put, call, all, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';

import { clearCart, setCartFromFirebase, updateCartInFirebaseSuccess, updateCartInFirebaseFailure } from './cart.actions';

import { getUserCartRef } from '../../firebase/firebase.utils';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* updateCartInFirebase() {
	const currentUser = yield select(selectCurrentUser);
	if (currentUser) {
		try {
			const cartRef = yield getUserCartRef(currentUser.id);
			const cartItems = yield select(selectCartItems);
			yield cartRef.update({ cartItems });
			yield put(updateCartInFirebaseSuccess());
		} catch (error) {
			yield put(updateCartInFirebaseFailure(error));
		}
	}
}

export function* checkCartFromFirebase({ payload: user }) {
	const cartRef = yield getUserCartRef(user.id);
	const cartSnapshot = yield cartRef.get();
	yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onUserSignIn() {
	yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
	yield takeLatest([CartActionTypes.ADD_ITEM, CartActionTypes.REMOVE_ITEM, CartActionTypes.CLEAR_ITEM_FROM_CART], updateCartInFirebase);
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}

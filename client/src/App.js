import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.conponent';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import ErrorPage from './components/error-boundary/error.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignOutPage = lazy(() =>
	import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.compenent'));

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	let { pathname } = useLocation();

	if (pathname.endsWith('/')) {
		pathname = pathname.slice(0, -1);
	}

	const hasPath = [
		'/',
		'/shop',
		'/shop/hats',
		'/shop/jackets',
		'/shop/sneakers',
		'/shop/womens',
		'/shop/mens',
		'/checkout',
		'/signIn',
	].includes(pathname);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path='/' component={HomePage} />

						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route
							exact
							path='/signin'
							render={() =>
								currentUser ? <Redirect to='/' /> : <SignInAndSignOutPage />
							}
						/>
						{!hasPath && (
							<Route
								render={() => <ErrorPage message='Sorry, this page does not exist' />}
							/>
						)}
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapStateToProps = (rootState) => ({
	currentUser: selectCurrentUser(rootState),
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

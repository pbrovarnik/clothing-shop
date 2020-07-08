import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.compenent';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
	componentDidMount() {
		const { checkUserSession } = this.props;

		checkUserSession();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignOutPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (rootState) => ({
	currentUser: selectCurrentUser(rootState),
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

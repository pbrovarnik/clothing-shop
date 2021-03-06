import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

import CartIcon from './cart-icon.component';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CartIcon component', () => {
	let wrapper;
	let mockToggleCartHidden;
	beforeEach(() => {
		mockToggleCartHidden = jest.fn();

		const mockProps = {
			cartItemCount: 0,
			toggleCartHidden: mockToggleCartHidden,
		};

		wrapper = shallow(
			<Provider store={store}>
				<CartIcon {...mockProps} />
			</Provider>
		);
	});

	it('should render CartIcon component', () => {
		expect(wrapper).toMatchSnapshot();
	});

	// it('should call toggleCartHidden when icon is clicked', () => {
	// 	wrapper.find('CartContainer').simulate('click');
	// 	expect(mockToggleCartHidden).toHaveBeenCalled();
	// });

	// it('should render the itemCount as the text', () => {
	// 	const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
	// 	expect(itemCount).toBe(0);
	// });
});

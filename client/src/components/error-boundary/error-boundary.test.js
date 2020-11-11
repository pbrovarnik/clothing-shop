import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './error-boundary.component';

it('should render ErrorBoundary component', () => {
	expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

it('should have initial hasError state of false', () => {
	const wrapper = shallow(<ErrorBoundary />);
	expect(wrapper.state()).toEqual({ hasError: false });
});

import React from 'react';

import ErrorPage from './error.component';

export default class ErrorBoundry extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log('Error Boundary:', error);
		console.log('Info:', info);
	}

	render() {
		if (this.state.hasError) {
			return <ErrorPage message='Sorry this page is broken' />;
		}

		return this.props.children;
	}
}

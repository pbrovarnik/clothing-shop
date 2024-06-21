import React from 'react';

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './error-boundary.styles';

const ErrorPage = ({ message }) => {
	return (
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
			<ErrorImageText>{message}</ErrorImageText>
		</ErrorImageOverlay>
	);
};

export default ErrorPage;

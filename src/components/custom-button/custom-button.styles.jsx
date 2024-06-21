import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;

		@media screen and (max-width: 800px) {
			background-color: black;
			color: white;
			border: none;
		}
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;

		@media screen and (max-width: 800px) {
			background-color: white;
			color: black;
			border: 1px solid black;
		}
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;

		@media screen and (max-width: 800px) {
			background-color: #4285f4;
			color: white;
		}
	}
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
	if (isGoogleSignIn) return googleSignInStyles;
	return inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;

	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	transition: all 0.2s;

	&:focus {
		outline: none;
	}

	&:active {
		transform: translateY(0.3rem);
		-webkit-tap-highlight-color: transparent;
	}

	${getButtonStyles}
`;

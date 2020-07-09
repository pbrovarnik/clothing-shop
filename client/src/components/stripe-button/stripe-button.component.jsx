import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H1insJy1Xvz6b3qhK5P7jr3eWB0HRDkJPzCXFTazw4jjctiESSywVa55N7YHWO5dNMy3NaqLKNpU6OxP16K6YMY00ecxpRm3M';

	const onToken = (token) => {
		console.log('TOKEN', token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Clothing Shop Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H1insJy1Xvz6b3qhK5P7jr3eWB0HRDkJPzCXFTazw4jjctiESSywVa55N7YHWO5dNMy3NaqLKNpU6OxP16K6YMY00ecxpRm3M';

	const onToken = async (token) => {
		try {
			await axios.post('payment', {
				amount: priceForStripe,
				token,
			});
			alert('Payment successful');
		} catch (error) {
			console.log('Payment error', error);
			alert('There was an issue with your payment.');
		}
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

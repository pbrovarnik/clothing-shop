import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const { APP_SERVER_URL, APP_STRIPE_PK } = import.meta.env;
	const priceForStripe = price * 100;

	const onToken = async (token) => {
		try {
			await axios.post(`${APP_SERVER_URL}/api/v1/clothing-shop/payment`, {
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
			label="Pay Now"
			name="Clothing Shop Ltd."
			billingAddress
			shippingAddress
			image="./crwn-192x192.png"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={APP_STRIPE_PK}
		/>
	);
};

export default StripeCheckoutButton;

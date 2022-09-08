import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51LdDQaGcK2JxN5u1ieOVJaPVR1JGPtzVrY3O3EbdEJBRXYFhwQfYu8esD2NAXEV7UHelLwjavScZQeUKtrbYiCy700Upnn5kaG"
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Alley Cart"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now!'
            token={onToken}
            stripeKey ={publishableKey}
        />
    )
    
}
export default StripeButton
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kZ6mb6chTBLGbUmuko0rrQWI00N38EE8kV';

  const onToken = token => {
    console.log('Payment Successful');
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Castle Clothing Inc'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutBtn;
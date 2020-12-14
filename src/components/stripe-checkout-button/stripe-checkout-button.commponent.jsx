import React, { PureComponent } from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_uv520wrOAmj5S0R6pSMqfQuO';
    const onToken = token => {
        console.log('token: ', token)
        alert('payment sucessful')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name="CRWN Clothing LTD."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            publishableKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;
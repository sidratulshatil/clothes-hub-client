import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';


import { useLoaderData } from 'react-router-dom';

import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51M6eANFDKB65LLecgEIFZBrcd7ymeG1busVhQm828FxowLJWPAA7HBURBiqAPKRwtFbmATJCDop8BWOkLoIixh7R0012oRdEIY")
console.log(stripePromise)
const Payment = () => {
    const [wishData, setWishData] = useState({})
    const booking = useLoaderData()
    console.log(wishData)

    const { name, price } = booking

    useEffect(() => {
        fetch('http://localhost:5000/mywishlists')
            .then(res => res.json())
            .then(data => setWishData(data))
    }, [wishData])
    return (
        <div>
            <h2 className="text-2xl">Payment For: <span className='text-xl text-red-600 font-bold'>{name}</span> </h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                        wishData={wishData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
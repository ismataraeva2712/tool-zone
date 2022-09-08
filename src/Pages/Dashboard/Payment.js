import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Loginpage/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1e33Efv3AwCzKHSoqQn7qNtzjrto0TC2JkL2dZABrwlXykdyMwO8AylGNuv1Z0P9ZDcH6NEgKZnqjxNbRNM7WL00YDQTx1E8');

const Payment = () => {
    const { id } = useParams()
    const url = `https://toolzone.onrender.com/booking/${id}`
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className='text-primary text-2xl'>Dear customer please Pay Here</h2>


        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body text-left">
                <p className='text-primary font-bold'>Hello, {order?.name}</p>
                <h2 className="card-title">Pay for : {order?.productName}</h2>
                <p>We will provide your product very soon</p>
                <p>Please pay ${order?.price}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">

                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>


    </div>
    );
};

export default Payment;
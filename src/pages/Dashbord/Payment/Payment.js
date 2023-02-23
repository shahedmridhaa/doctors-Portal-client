import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51M6whnJG3RT8PjQ3en8E1GNxsKvtNUvhWQgOnBoV7QWAySRJWrUjnL18igGihGWHuFUsT4Idj3AZ8t1Kj1u8ZaFt008ZabJTDP')



const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);
   const {treatment, appoinmentDate, slot, price} = booking[0]
   
    return (
        <div>

            <h3 className="text-3xl font-semibold">payment for {treatment}</h3>
            <div className="text-xl font-normal py-2">
                please pay ${price} for your appoinment on {appoinmentDate} at {slot}
            </div>


         <div className='w-96 pt-5'>
           <Elements
            stripe={stripePromise} >
               <CheckoutForm
                   booking={booking[0]}   
               />
            </Elements>
         </div>


        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

const CheckoutForm = ({ booking }) => {
  const { patient, price, email, _id } = booking
  const [clientSecret, setClientSecret] = useState('')
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [tranjiction, setTranjiction] = useState('')
  const [processing, setProcessing] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    fetch('https://dentist-server-side.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log(error)
      setCardError(error.message)
    } else {
      setCardError('')
    }

    setSuccess('')
    setProcessing(true)
    //card payment
    const {
      paymentIntent,
      error: confirmError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: patient,
          email: email,
        },
      },
    })

    if (confirmError) {
      setCardError(confirmError.message)
    }
    if (paymentIntent.status === 'succeeded') {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      }

      fetch('https://dentist-server-side.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            setSuccess('Congrats! Your payment completed')
            setTranjiction(paymentIntent.id)
          }
        })
    }
    setProcessing(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm my-4"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <>
          <p className="text-green-600">{success}</p>
          <p>
            Your transactionId:{' '}
            <span className="font-semibold">{tranjiction}</span>
          </p>
        </>
      )}
    </div>
  )
}

export default CheckoutForm

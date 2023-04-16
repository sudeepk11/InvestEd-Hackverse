import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: event.target.name.value,
          email: event.target.email.value,
          address: {
            line1: event.target.address1.value,
            line2: event.target.address2.value,
            city: event.target.city.value,
            state: event.target.state.value,
            postal_code: event.target.postalCode.value,
            country: event.target.country.value,
          },
        },
      },
      {
        amount: amount,
        currency: "usd",
      }
    );

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // handle successful payment here
      setProcessing(false);
      setSucceeded(true);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div className="bg-primary py-4">
      <div className="max-w-xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <div className="flex flex-row  items-center mb-3">
          <h2 className="text-lg font-semibold  inline">Checkout Powered By</h2>
          <img
            className="inline  h-10 w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
          ></img>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border bg-primary p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border bg-primary p-2 rounded-lg w-full"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="address1"
                className="block text-gray-700 font-medium mb-2"
              >
                Address Line 1
              </label>
              <input
                id="address1"
                name="address1"
                type="text"
                className="border bg-primary  p-2 rounded-lg w-full"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="address2"
                className="block text-gray-700 font-medium mb-2"
              >
                Address Line 2
              </label>
              <input
                id="address2"
                name="address2"
                type="text"
                className="border bg-primary  p-2 rounded-lg w-full"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-medium mb-2"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="border bg-primary  p-2 rounded-lg w-full"
                required
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 font-medium mb-2"
              >
                State/Province/Region
              </label>
              <input
                id="state"
                name="state"
                className="border bg-primary  p-2 rounded-lg w-full "
                type="text"
                required
              />
            </div>

            <div>
              <label htmlFor="postalCode">Postal Code/Zip</label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                className="border bg-primary  p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                type="text"
                className="border bg-primary  p-2 rounded-lg w-full"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-medium mb-2"
              >
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="border bg-primary  p-2 rounded-lg w-full"
                required
                min="0"
                step="0.01"
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <div className="p-5">
            <label htmlFor="cardElement" className="">
              Credit or Debit Card
            </label>
            <CardElement id="cardElement" />
          </div>

          <button
            type="submit"
            className="p-2 border bg-blue-500 text-white rounded-lg w-full"
            disabled={!stripe}
          >
            Pay
          </button>

          {error && <div>{error}</div>}
          {succeeded && <div>Payment succeeded!</div>}
          {processing && <div>Processing payment...</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

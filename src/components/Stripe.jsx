import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51MxD9DSD7QFH9NStXfyHa84nNLehSg3WHY3Axcp6G3bxhtVFPaTKisy2ex0wa7q3RlZCUsAfjPplb1BqnNhLTsWG002SrdOBjC");

const StripeProvider = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
        {children}
    </Elements>
  );
};

export default StripeProvider;

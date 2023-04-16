import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51MxD9DSD7QFH9NStXfyHa84nNLehSg3WHY3Axcp6G3bxhtVFPaTKisy2ex0wa7q3RlZCUsAfjPplb1BqnNhLTsWG002SrdOBjC");

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;


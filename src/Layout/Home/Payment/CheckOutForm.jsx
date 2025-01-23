import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FaCreditCard } from "react-icons/fa6";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          style={{
            base: {
              fontSize: "22px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          }}
        ></CardElement>
        <div className="flex justify-center">
          <button className="btn mt-3 text-xl px-32 text-white bg-red-950 hover:bg-black">
            <FaCreditCard></FaCreditCard> Pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;

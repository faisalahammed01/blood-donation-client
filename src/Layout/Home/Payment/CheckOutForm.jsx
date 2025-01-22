import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

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
          <button className="btn  mt-6 text-white rounded-b-2xl rounded-r-2xl  bg-red-700">
            Pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;

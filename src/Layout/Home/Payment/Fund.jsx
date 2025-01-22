import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { FaStripe } from "react-icons/fa6";

const stripePromise = loadStripe("pk_test_51J0ZQvK5 ...");
const Fund = () => {
  return (
    <>
      <h2 className="uppercase text-center mt-4 text-4xl text-red-800">
        -----------------payment-----------------
      </h2>
      <div className=" mt-20 md:mx-44">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </>
  );
};

export default Fund;

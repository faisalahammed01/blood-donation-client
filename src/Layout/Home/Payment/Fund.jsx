import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { FaCcMastercard, FaCcVisa, FaCreditCard } from "react-icons/fa";

const stripePromise = loadStripe("pk_test_51J0ZQvK5 ...");
const Fund = () => {
  return (
    <div className="">
      <h1 className="flex justify-center text-4xl mt-10 gap-4">
        <FaCcVisa></FaCcVisa>
        <FaCcMastercard />
        <FaCreditCard />
      </h1>
      <div className=" mt-20 md:mx-96">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Fund;

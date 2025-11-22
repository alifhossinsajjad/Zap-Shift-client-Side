import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = UseAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["payment", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const haddlePayment = async () => {
    // Payment processing logic goes here
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);

    window.location.href = res.data.url;
    console.log(res.data);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2>
        please pay ${parcel.cost} for : {parcel.parcelName}{" "}
      </h2>
      <button onClick={haddlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
};

export default Payment;

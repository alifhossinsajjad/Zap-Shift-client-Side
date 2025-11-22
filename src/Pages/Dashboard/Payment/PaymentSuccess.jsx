import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();
  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      // Here you can verify the payment status with your backend if needed
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log("Payment success updated:", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h1>your payment was successful</h1>
      <p>Your transection id : {paymentInfo?.transactionId}</p>
      <p>Your parcel Tracking id: {paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;

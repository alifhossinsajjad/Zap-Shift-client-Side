import React from "react";
import { Link } from "react-router";

const PaymentCancled = () => {
  return (
    <div>
      <h2>Payment is cancled please try agaim later</h2>
    
    <Link to="/dashboard/my-parcels"><button className="btn btn-primary text-secondary">Go to my parcels</button></Link>
    
    </div>
  );
};

export default PaymentCancled;

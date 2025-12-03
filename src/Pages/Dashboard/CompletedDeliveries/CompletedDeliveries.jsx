import React from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "parcel_delivered"],

    queryFn: async () => {
      console.log("Fetching parcels for rider:", user.email);
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=parcel_delivered`
      );
      console.log("api response", res.data);
      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.8;
    }
    else {
      return parcel.cost * 0.6 
    }
  };

  return (
    <div>
      <h2>Completed Deliveries : {parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Cost</th>
              {/* <th>Transaction Id</th> */}
              <th>Payout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                {/* <td>{parcel.transactionId}</td> */}
                <td>{calculatePayout(parcel)}</td>
                <td>
                  <button
                    // onClick={()}
                    className="btn btn-primary1"
                  >
                    Cash Out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;

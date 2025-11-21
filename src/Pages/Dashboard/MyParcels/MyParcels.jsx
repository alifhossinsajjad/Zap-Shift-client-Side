import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaEdit, FaEye, FaStreetView } from "react-icons/fa";
import { FaDeleteLeft, FaMagnifyingGlass, FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = UseAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log("delete parcel", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount > 0) {
            refetch();
            {
              Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
            }
          }
        });
      }
    });
  };

  const haddlePayment = async (parcel) => {
    // Payment processing logic goes here
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmial: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);

    window.location.href = res.data.url;
    console.log(res.data);
  };

  return (
    <div>
      <h2>add of my all parcels : {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Cost</th>
              <th>Type</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Sender</th>
              <th>Acrions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelWeight}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.parcelType}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    // <Link to={`/dashboard/payment/${parcel._id}`}>
                    //   <button className="btn btn-primary btn-sm">Pay</button>
                    // </Link>

                    <button
                      onClick={() => haddlePayment(parcel)}
                      className="btn btn-primary btn-sm"
                    >
                      pay
                    </button>
                  )}
                </td>
                <td></td>
                <td>{parcel.senderDistrict}</td>
                <td className="space-x-2">
                  <button className="btn btn-square hover:btn-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:btn-primary"
                  >
                    <FaTrashCan />
                  </button>
                  <button className="btn btn-square hover:btn-primary">
                    <FaEdit />
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

export default MyParcels;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaEye, FaTrash, FaUserPlus, FaUserSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    refetch,
    data: riders = [],
    isLoading,
  } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      console.log(res.data);
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure
      .patch(`/riders/${rider._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider status is set to ${status}`,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      })
      .catch((error) => {
        console.error("Update error:", error);
        Swal.fire("Error!", "Failed to update rider status.", "error");
      });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  const handleRiderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/riders/${id}`)
          .then((res) => {
            console.log("Delete response:", res.data);

            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Rider has been deleted.", "success");
            } else {
              Swal.fire(
                "Error!",
                "Rider not found or already deleted.",
                "error"
              );
            }
          })
          .catch((error) => {
            console.error("Delete error:", error);
            Swal.fire(
              "Error!",
              error.response?.data?.message ||
                "Failed to delete rider. Please try again.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Riders pending Approval : {riders.length}
      </h2>

      {isLoading ? (
        <p>Loading riders...</p>
      ) : riders.length === 0 ? (
        <p className="text-gray-500">No riders available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-center">
                <th>SN</th>
                <th>Rider Name</th>
                <th>Email</th>
                <th>Work Status</th>
                <th>Rider Nid</th>
                <th>Application Status</th>
                <th>Bike Brand</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {riders.map((rider, index) => (
                <tr key={rider._id}>
                  <td>{index + 1}</td>
                  <td>{rider.name}</td>
                  <td>{rider.email}</td>
                  <td>{rider.workStatus}</td>
                  <td>{rider.nid}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded ${
                        rider.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : rider.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {rider.status}
                    </span>
                  </td>
                  <td>{rider.bikeBrand}</td>
                  <td className="flex gap-2">
                    {rider.status !== "approved" && (
                      <button
                        onClick={() => handleApproval(rider)}
                        className="btn btn-sm btn-success text-white"
                        title="Approve Rider"
                      >
                        <FaUserPlus />
                      </button>
                    )}
                    {rider.status !== "rejected" && (
                      <button
                        onClick={() => handleRejection(rider)}
                        className="btn btn-sm btn-warning text-white"
                        title="Reject Rider"
                      >
                        <FaUserSlash />
                      </button>
                    )}
                    <button
                      onClick={() => handleRiderDelete(rider._id)}
                      className="btn btn-sm btn-error text-white"
                      title="Delete Rider"
                    >
                      <FaTrash />
                    </button>
                    <button
                      // onClick={() => handleRiderDelete(rider._id)}
                      className="btn btn-sm btn-error text-white"
                      title="Delete Rider"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApproveRiders;

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);

  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegions = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);

    const districts = regionDistricts.map((d) => d.district);

    return districts;
  };

  //   console.log(regions);

  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";

    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;

        const extraWeight = parcelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);
    Swal.fire({
      title: "Please Confirm your parcel",
      text: `You will be charged ! ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree with Pay",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the pacerl info in the data base

        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
        });

        // Swal.fire({
        //   title: "Cancel !",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-12 bg-white rounded-lg shadow-xl my-20">
      <h2 className="text-3xl font-semibold mb-6">Add Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel Details */}
        <div className="mb-6">
          <p className="font-medium mb-2">Enter your parcel details</p>
          <div className="flex items-center space-x-4 mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                // name="parcelType"
                {...register("parcelType")}
                value="document"
                className="text-green-600 cursor-pointer"
                defaultChecked
              />
              <span>Document</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                // name="parcelType"
                {...register("parcelType")}
                value="not-document"
                className="text-green-600 cursor-pointer"
              />
              <span>Not Document</span>
            </label>
          </div>

          <div className="grid xl:lg:md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Parcel Name"
              className="border border-gray-300 rounded px-3 py-2"
              //   name="parcelName"
              {...register("parcelName")}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Parcel Weight (KG)"
              className="border border-gray-300 rounded px-3 py-2"
              //   name="parcelWeight"
              {...register("parcelWeight")}
            />
          </div>
        </div>

        {/* Sender and Receiver Details */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* Sender Details */}
          <div>
            <h3 className="font-semibold mb-4">Sender Details</h3>

            <input
              type="email"
              placeholder="Sender Email"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
              //   name="senderName"
              defaultValue={user?.email}
              {...register("senderEmail")}
            />
            <div className="xl:lg:md:flex gap-4">
              <input
                type="text"
                placeholder="Sender Name"
                defaultValue={user?.displayname}
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                //   name="senderName"
                {...register("senderName")}
              />
             
            </div>
            <div className="flex  gap-4">
              <select
                className="w-full border border-gray-300 rounded px-3 mb-3"
                //   name="senderRegion"
                {...register("senderDistrict")}
                defaultValue="pick a district"
              >
                <option value="" disabled>
                  Select your district
                </option>
                {districtByRegions(senderRegion).map((d, i) => (
                  <option value={d} key={i}>
                    {d}
                  </option>
                ))}

                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                placeholder="Sender Contact No."
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                //   name="senderContact"
                {...register("senderContact")}
              />
            </div>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              //   name="senderRegion"
              {...register("senderRegion")}
              defaultValue="pick a reagion"
            >
              <option value="" disabled>
                Select your region
              </option>
              {regions.map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}

              {/* Add more options as needed */}
            </select>
          </div>

          {/* Receiver Details */}
          <div>
            <h3 className="font-semibold mb-4">Receiver Details</h3>

            <input
              type="email"
              placeholder="Receiver Email"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
              //   name="senderName"
              {...register("receiverEmail")}
            />

            <div className="xl:lg:md:flex gap-4">
              <input
                type="text"
                placeholder="Receiver Name"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                // name="receiverName"
                {...register("receiverName")}
              />
             
            </div>
            <div className="flex gap-4">
              <select
                className="w-full border border-gray-300 rounded px-3 mb-3"
                //   name="receiverRegion"
                {...register("receiverDistrict")}
                defaultValue="pick a district"
              >
                <option value="" disabled>
                  Receiver district
                </option>
                {districtByRegions(receiverRegion).map((d, i) => (
                  <option value={d} key={i}>
                    {d}
                  </option>
                ))}

                {/* Add more options as needed */}
              </select>
              <input
                type="text"
                placeholder="Receiver Contact No."
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                // name="receiverContact"
                {...register("receiverContact")}
              />
            </div>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              //   name="receiverRegion"
              {...register("receiverRegion")}
              defaultValue="pick a reagion"
            >
              <option value="" disabled>
                Select your region
              </option>
              {regions.map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}

              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        {/* Pickup and Delivery Instructions */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <textarea
            placeholder="Pickup Instruction"
            className="border border-gray-300 rounded px-3 py-2 w-full h-20"
            // name="pickupInstruction"
            {...register("pickupInstruction")}
          />
          <textarea
            placeholder="Delivery Instruction"
            className="border border-gray-300 rounded px-3 py-2 w-full h-20"
            // name="deliveryInstruction"
            {...register("deliveryInstruction")}
          />
        </div>

        {/* Note */}
        <p className="text-sm mb-6 font-semibold text-green-600">
          * Pickup Time 4pm-7pm Approx.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-lime-400 text-white font-semibold px-6 py-2 rounded"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;

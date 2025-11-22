import React from "react";
import { useForm, useWatch } from "react-hook-form";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router";
import riderImage from "../../assets/agent-pending.png";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const serviceCenters = useLoaderData();
  const navigate = useNavigate();

  // Get unique regions
  const regionsDuplicate = serviceCenters?.map((c) => c.region) || [];
  const regions = [...new Set(regionsDuplicate)];

  // Watch for region changes
  const riderRegion = useWatch({ control, name: "region" });

  // Get districts based on selected region
  const districtByRegions = (region) => {
    if (!region) return [];
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return [...new Set(districts)]; // Remove duplicates
  };

  const handleRiderApplication = (data) => {
    const riderData = {
      name: data.name,
      email: data.email,
      age: parseInt(data.age),
      nid: data.nid,
      region: data.region,
      district: data.district,
      contact: data.contact,
      bikeBrand: data.bikeBrand,
      bikeRegNo: data.bikeRegNo,
      additionalInfo: data.additionalInfo,
    };

    console.log(riderData);

    axiosSecure
      .post("/riders", riderData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:
              "Your applicatrions has been submitted. we will reach to you in 15 days ",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        toast.error("Failed to submit application. Please try again.");
      });
  };

  return (
    <div className="mx-auto bg-white rounded-3xl shadow-md p-5 md:p-20 lg:p-24 xl:p-28 2xl:p-32">
      <h1 className="text-4xl font-bold text-secondary mb-4">Be a Rider</h1>
      <p className="text-gray-600 mb-8 w-fit md:w-1/2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="divider"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit(handleRiderApplication)}
          className="space-y-4"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName || ""}
                readOnly
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                defaultValue={user?.email || ""}
                readOnly
                {...register("email", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="number"
                placeholder="Your age"
                min="18"
                max="65"
                onWheel={(e) => e.target.blur()} // Prevents mouse wheel changes
                onKeyDown={(e) => {
                  // Prevent negative sign and scientific notation
                  if (e.key === "-" || e.key === "e" || e.key === "E") {
                    e.preventDefault();
                  }
                }}
                {...register("age", {
                  required: "Age is required",
                  min: { value: 18, message: "Must be at least 18 years old" },
                  max: { value: 65, message: "Must be under 65 years old" },
                  valueAsNumber: true,
                })}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="NID No"
                {...register("nid", {
                  required: "NID is required",
                  pattern: {
                    value: /^[0-9]{10,17}$/,
                    message: "Enter a valid NID number",
                  },
                })}
                className="input input-bordered w-full"
              />
            </div>

            {errors.age && (
              <p className="text-red-500 text-sm ml-2">{errors.age.message}</p>
            )}
            {errors.nid && (
              <p className="text-red-500 text-sm ml-2">{errors.nid.message}</p>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <select
                {...register("region", { required: "Region is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select your region</option>
                {regions.map((division, index) => (
                  <option key={index} value={division}>
                    {division}
                  </option>
                ))}
              </select>

              <select
                {...register("district", { required: "District is required" })}
                className="select select-bordered w-full"
                disabled={!riderRegion}
              >
                <option value="">Select your district</option>
                {districtByRegions(riderRegion).map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {errors.region && (
              <p className="text-red-500 text-sm ml-2">
                {errors.region.message}
              </p>
            )}
            {errors.district && (
              <p className="text-red-500 text-sm ml-2">
                {errors.district.message}
              </p>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Contact"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9+-\s()]{11,15}$/,
                    message: "Enter a valid contact number",
                  },
                })}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Bike Brand"
                {...register("bikeBrand", {
                  required: "Bike brand is required",
                })}
                className="input input-bordered w-full"
              />
            </div>

            {errors.contact && (
              <p className="text-red-500 text-sm ml-2">
                {errors.contact.message}
              </p>
            )}
            {errors.bikeBrand && (
              <p className="text-red-500 text-sm ml-2">
                {errors.bikeBrand.message}
              </p>
            )}

            <input
              type="text"
              placeholder="Bike Registration Number"
              {...register("bikeRegNo", {
                required: "Bike registration is required",
              })}
              className="input input-bordered w-full"
            />

            {errors.bikeRegNo && (
              <p className="text-red-500 text-sm ml-2">
                {errors.bikeRegNo.message}
              </p>
            )}

            <textarea
              placeholder="Additional Information"
              {...register("additionalInfo")}
              className="textarea textarea-bordered w-full"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="btn bg-primary text-black w-full hover:bg-primary-dark"
          >
            Submit Application
          </button>
        </form>

        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src={riderImage}
            alt="Rider"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;

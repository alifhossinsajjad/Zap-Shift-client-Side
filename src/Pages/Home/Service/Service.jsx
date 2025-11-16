import React from "react";
import serviceLogo from "../../../assets/service.png";
const Service = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="bg-secondary py-16 rounded-lg">
        <div className="my-8">
          <h1 className="text-center text-white font-bold text-2xl my-7">
            Our Services
          </h1>
          <p className="text-center text-white">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to <br /> business shipments —
            we deliver on time, every time.
          </p>
        </div>
        <div className="grid xl:lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-10">
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="flex justify-center">
              <div className="flex justify-center items-center bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-16 h-16">
                <img src={serviceLogo} alt="" className="w-10 h-10 flex " />
                {/* <p className="flex items-center">alif</p> */}
              </div>
            </div>
            <div className="text-secondary">
              <h2 className="text-center my-3 ">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-12 h-12">
              <img src="" alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="text-center mb-3">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-12 h-12">
              <img src="" alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="text-center mb-3">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-12 h-12">
              <img src="" alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="text-center mb-3">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="">
              <div className=" flex justify-center bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-12 h-12">
                <img src="" alt="" />
              </div>
            </div>
            <div className="text-secondary">
              <h2 className="text-center mb-3">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="bg-white p-16 rounded-xl hover:bg-primary">
            <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent rounded-full w-12 h-12">
              <img src="" alt="" />
            </div>
            <div className="text-secondary">
              <h2 className="text-center mb-3">Express & Standard Delivery</h2>
              <p className="text-center">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

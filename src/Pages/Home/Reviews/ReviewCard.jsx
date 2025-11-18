import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-md rounded-xl py-12 px-7 ">
      <div className="flex items-start gap-3">
        <FaQuoteLeft className="text-2xl mb-4  text-primary" />

        <p className="text-sm ">{testimonial}</p>
      </div>

      <div className="divider my-4"></div>

      <div className="flex items-center gap-3">
        <div className="border-4 border-secondary rounded-full">
          <img src={user_photoURL} alt="" className="rounded-full w-14 " />
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">{userName}</h2>
          <p className="text-xs text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

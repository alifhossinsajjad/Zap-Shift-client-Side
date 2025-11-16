import React from "react";
import { FaTruck } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

const Work = () => {
  const features = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From product packaging to browser delivery - we deliver on time every time.",
      icon: <FiTruck size={40} color="text-secondary" />,
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From product packaging to browser delivery - we deliver on time every time.",
      icon: <FiTruck size={40} color="text-secondary" />,
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From product packaging to browser delivery - we deliver on time every time.",
      icon: <FiTruck size={40} color="text-secondary" />,
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From product packaging to  browser delivery - we deliver on time every time.",
      icon: <FiTruck size={40} color="text-secondary" />,
    },
  ];

  return (
    <section className="mt-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How it Works
          </h2>
          {/* <div className="w-20 h-1 bg-blue-500 mx-auto"></div> */}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" bg-white rounded-xl py-12 px-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="flex justify-start mb-6">
                <div className="b">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="flex justify-start text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <div className=" w-60">
                <p className="text-start">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

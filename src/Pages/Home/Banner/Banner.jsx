import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../../assets/banner/banner1.png";
import image2 from "../../../assets/banner/banner2.png";
import image3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        showArrows={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <li
            className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${
              isSelected ? "bg-blue-500" : "bg-white bg-opacity-50"
            }`}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          />
        )}
      >
        {/* Slide 1 */}
        <div className="relative ">
          <img
            src={image1}
            alt="Fast parcel delivery"
            className=" object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute top-10/12 left-4 lg:left-20 text-white max-w-2xl z-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary text-secondary px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Track Your Parcel
              </button>
              <button className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Be A Rider
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative ">
          <img src={image2} alt="Reliable shipping" className=" object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute top-10/12 left-4 lg:left-20  text-white max-w-2xl z-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary text-secondary px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Track Your Parcel
              </button>
              <button className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Be A Rider
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative ">
          <img
            src={image3}
            alt="Business solutions"
            className=" object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          <div className="absolute top-10/12 left-4 lg:left-20 text-white max-w-2xl z-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary text-secondary px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Track Your Parcel
              </button>
              <button className="border-2 border-white text-black hover:bg-white hover:text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                Be A Rider
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

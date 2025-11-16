import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import monstar from "../../../assets/brands/moonstar.png";
import amazonVactor from "../../../assets/brands/amazon_vector.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
const Brands = () => {
  const brandsLogo = [
    amazon,
    casio,
    amazonVactor,
    monstar,
    randstad,
    star,
    startPeople,
  ];

  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      speed={7000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {brandsLogo.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide></SwiperSlide>
      <SwiperSlide>
        <img src={amazonVactor} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={monstar} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={randstad} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={star} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={startPeople} alt="" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Brands;

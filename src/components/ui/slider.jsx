import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
    arrows: false,
  };
  return (
    <div className="slider-container w-[600px] mx-auto bg-[#ef6344d6] !important">
      <Slider {...settings}>
        <div className="text-center w-screen bg-[#ef6344d6] bg-opacity-[80%] h-12 md:text-lg  flex items-center justify-center text-white">
          <h3> Make Your Business Online With Us in Your Budget.</h3>
        </div>
        <div className="text-center w-screen bg-[#ef6344d6] bg-opacity-[80%] h-12 md:text-lg  flex items-center justify-center text-white">
          <h3>Get a professional static website in Chhattisgarh just @9999.</h3>
        </div>
        <div className="text-center w-screen bg-[#ef6344d6] bg-opacity-[80%] h-12 md:text-lg  flex items-center justify-center text-white">
          <h3>Get free maintenance and updates for up to one year.</h3>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;

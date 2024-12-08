

import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "./Usefetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "./Footer";
import FormReview from "./FormReview";
import DataResolve from "./DataResolve";
import { data } from "autoprefixer";

const CustomPrevArrow = ({ onClick }) => {

  
  return (
    <div
      className="absolute top-28 rev transform -translate-y-1/2 left-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
      onClick={onClick}
    >
      <IoIosArrowDropleft className="w-6 h-6 text-black" />
    </div>
  );
};

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-28 rev transform -translate-y-1/2 right-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
      onClick={onClick}
    >
      <IoIosArrowDropright className="w-6 h-6 text-black" />
    </div>
  );
};

CustomNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    error,
  } = DataResolve("http://localhost:5000/api/getclient/reviews/", "GET");

  console.log(reviews);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative ">
      <div className=" bg-primary px-2 py-10 mb-10 ">
        <div className="relative">
          <Slider {...settings}>
            {reviews.map((client) => (
              <div
                key={client.id}
                className="relative bg-white h-[450px] rounded-md shadow-md"
              >
                <div className="h-[200px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400">
                  <img
                    className="cursor-pointer object-cover  rounded-full h-44 w-44"
                    src={`./images/${client.image}.jpg`}
                    alt="client image"
                  />
                </div>
                <div className="mt-12 px-3">
                  <p className="mt-2 flex justify-center items-center font-semibold">
                    {client.name}, <br />
                  </p>
                  <p className="mt-2 flex justify-center items-center font-semibold">
                    {client.location}
                  </p>
                  <p className="italic flex justify-center items-center pl-3">
                    {client.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <FormReview />

      <div className="w-full pt-5 px-3 flex justify-center items-center">
        <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;

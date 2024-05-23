// const Akara = () => {
//   const Items = [
//     {
//       id: 1,
//       title: "Adicolor Classics Joggers",
//       category: "Dress",
//       price: 63.85,
//       image: "2923",
//       status: "Best Selers",
//     },
//     {
//       id: 2,
//       title: "Nike Sportswear Futura Luxe",
//       category: "Bag",
//       price: 130.0,
//       image: "ankara2",
//       status: "Best Selers",
//     },
//     {
//       id: 3,
//       title: "Geometric print Scarf",
//       category: "Dress",
//       price: 53.0,
//       image: "47625",
//       status: "Best Selers",
//     },
//     {
//       id: 4,
//       title: "Yellow Reserved Hoodie",
//       category: "Hoodies",
//       price: 63.85,
//       image: "5052",
//       status: "New Arriaval",
//     },
//     {
//       id: 5,
//       title: "Basic Dress Green",
//       category: "Dress",
//       price: 236.0,
//       image: "2148747911",
//       status: "New Arriaval",
//     },
//     {
//       id: 6,
//       title: "Nike Air Zoom Pegasus",
//       category: "Shoe",
//       price: 198.0,
//       image: "ankara",
//       status: "Best Selers",
//     },
//     {
//       id: 7,
//       title: "Nike Repel Miler",
//       category: "Hoodies",
//       price: 120.5,
//       image: "5052",
//       status: "Best Selers",
//     },
//     {
//       id: 8,
//       title: "Nike Sportswear Futura Luxe",
//       category: "Glasses",
//       price: 160.0,
//       image: "woman",
//     },
//   ];
//   return (
//     <div className=" flex flex-col md:flex-row justify-center items-center">
//       {Items.map((item) => (
//         <div key={item.id}>
//           <img
//             className="cursor-pointer object-cover z-10 rounded-full h-44 w-44"
//             src={`./Public/images/${item.image}.jpg`}
//             alt="client image"
//           />
//           <p className="mt-2 flex justify-center items-center font-semibold">
//             {item.title}, <br />
//           </p>
//           <p className="mt-2 flex justify-center items-center font-semibold">
//             {item.price}
//           </p>
//           <p className="italic flex justify-center items-center pl-3">
//             {item.status}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Akara;

import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../Usefetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "../Footer";
import { PreloadImages } from "../../../Components/PreloadImages";
import { FaFilter } from "react-icons/fa";

// const CustomPrevArrow = ({ onClick }) => {
//   const imageUrl = [
//     "./images/5052.jpg",
//     "./images/ankara.jpg",
//     "./images/2148747911.jpg",
//     "./images/woman.jpg",
//   ];

//   PreloadImages(imageUrl);

//   return (
//     <div
//       className="absolute top-28 rev transform -translate-y-1/2 left-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
//       onClick={onClick}
//     >
//       <IoIosArrowDropleft className="w-6 h-6 text-black" />
//     </div>
//   );
// };

// CustomPrevArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

const Reviews = () => {
  const [SelectCategory, SetSelectCategory] = useState("All");
  const [filtereItems, SetfiltereItems] = useState([]);
  const {
    data: Items,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/Products");

  const FilterItems = (category) => {
    const filtered =
      category === "All"
        ? Items
        : Items.filter((item) => {
            item.category === category;
          });

    
  };

  return (
    <div className="relative  bg-primary  ">
      <div className="px-6 py-10 mb-10 ">
        <div className="flex justify-between py-6   items-start   md:items-center">
          <div className=" flex flex-col md:flex-row justify-center gap-2 md:gap-6 items-start md:items-center ">
            <span className="cursor-pointer ">All</span>
            <span className="cursor-pyointer ">Matching</span>
            <span className="cursor-pointer ">New</span>
            <span className="cursor-pointer ">Old Trending</span>
          </div>
          <div className="flex justify-center  items-center ">
            <div className="bg-black p-2  ">
              <FaFilter className="h-3 w-3 text-white" />
            </div>

            <select className="  cursor-pointer border-2 border-black  ">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low-High">Low-High</option>
              <option value="High-Low">High-Low</option>
            </select>
          </div>
        </div>
        <div className=" ">
          {isLoading ? (
            <div>Loading reviews...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 XL:grid-cols-4">
              {Items?.map((review) => (
                <div
                  key={review.id}
                  className="relative bg-white hover:scale-105  transition ease-in-out duration-300 h-[550px] rounded-md shadow-md"
                >
                  <div
                    className="h-[450px]  flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
                    style={{
                      background: `url(./images/${review.image}.jpg) center center/ cover`,
                    }}
                  >
                    {/* <img
                    className="cursor-pointer object-cover "
                    src={`./Public/images/${review.image}.jpg`}
                    alt="client image"
                  /> */}
                  </div>
                  <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
                    <p className="mt-2 w-full font-semibold">
                      {review.title} <br />
                    </p>
                    <div className="flex justify-between w-full items-center">
                      <p className="italic ">{review.status}</p>
                      <p className=" font-semibold">${review.price}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* <CustomPrevArrow onClick={() => settings.slickPrev()} />
            <CustomNextArrow onClick={() => settings.slickNext()} /> */}
            </div>
          )}
        </div>
      </div>
      <div className="w-full pt-5 px-3 flex justify-center items-center">
        <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;

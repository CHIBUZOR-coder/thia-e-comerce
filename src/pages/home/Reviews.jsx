import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "./Usefetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "./Footer";
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-28 transform rev -translate-y-1/2 left-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
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
      className="absolute top-28 transform rev -translate-y-1/2 right-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
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
  } = useFetch("http://localhost:8000/Clients");

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
    <div className="relative">
      {isLoading ? (
        <div>Loading reviews...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Slider {...settings}>
          {reviews?.map((review) => (
            <div
              key={review._id}
              className="relative bg-gray-100 h-[450px] rounded-md shadow-md"
            >
              <div className="h-[200px] flex justify-center items-center p-2 mt-4 w-full bg-blue-400">
                <img
                  className="cursor-pointer z-10 rounded-full h-44 w-44"
                  src={`./images/${review.image}.jpg`}
                  alt="client image"
                />
              </div>
              <div className="mt-12 px-3">
                <p className="mt-2 flex justify-center items-center font-semibold">
                  {review.name}, <br />
                </p>
                <p className="mt-2 flex justify-center items-center font-semibold">
                  {review.location}
                </p>
                <p className="italic flex justify-center items-center pl-3">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <div className="w-full flex justify-center items-center">
        <div className="revLogo w-1/2 h-56 rounded-sm shadow-lg"></div>{" "}
      </div>
      {/* <img className="h-10 w-10" src="RiviewImage/Irene.jpg" alt="" /> */}
      <Footer />
    </div>
  );
};

export default Reviews;

// import React from "react";
// import PropTypes from "prop-types";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import useFetch from "./Usefetch";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
// import Footer from "./Footer";

// const Clients = [
//   {
//     id: "1",
//     name: "Confy",
//     image: "Confy",
//     location: "Los Angeles",
//     text: "Amazing quality and fast shipping.",
//   },
//   {
//     id: "2",
//     name: "Roselyn",
//     image: "Roselyn",
//     location: "New York",
//     text: " Great product! Highly recommend.",
//   },
//   {
//     id: "3",
//     name: "Stella Ode",
//     image: "Stella",
//     location: "Dubai",
//     text: "Awesome, i got the perfect fit!",
//   },
//   {
//     id: "4",
//     name: "Annie",
//     image: "Annie",
//     location: "Chicago",
//     text: "Customer service was very helpful.",
//   },
//   {
//     id: "6",
//     name: "Emelda",
//     image: "Emelda",
//     location: "Usa",
//     text: "Adada Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eveniet officiis asperiores totam soluta. Iure?",
//   },
//   {
//     id: "7",
//     name: "Ebere",
//     image: "Ebere",
//     location: "New York",
//     text: "A very good work, Lorem ipsum dolor sit amet, consectetur",
//   },
//   {
//     id: "8",
//     name: "Amaka",
//     image: "Amaka",
//     location: "Usa",
//     text: "A very good work. sit amet, consectetur adipisicing elit. Quasi eveniet officiis asperiores totam soluta. Iure?",
//   },
//   {
//     id: "9",
//     name: " Cynthia ",
//     image: "thia1",
//     location: "United Kingdom",
//     text: "good one",
//   },
//   {
//     id: "10",
//     name: "Uju",
//     image: "uju",
//     location: "France",
//     text: "A very good work.  elit. Quasi eveniet officiis asperiores totam soluta. Iure? ",
//   },
//   {
//     id: "5",
//     name: " Nkechi",
//     image: "Nkechi",
//     location: "Houston",
//     text: "I love it! Will buy again.",
//   },
//   {
//     id: "11",
//     name: "Irene ",
//     image: "Irene",
//     location: "Canada",
//     text: "nice, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eveniet officiis asperiores totam soluta. Iure?",
//   },
//   {
//     id: "61f5",
//     name: "Emekalam Chibuzor ",
//     location: "Maryland",
//     text: "well done",
//     image: "",
//   },
//   {
//     id: "40a4",
//     name: "PatrickOfm",
//     location: "Manchester Uk",
//     text: "bIought it for my and she was very happy",
//     image: "",
//   },
// ];
// const CustomPrevArrow = ({ onClick }) => {
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

// const CustomNextArrow = ({ onClick }) => {
//   return (
//     <div
//       className="absolute top-28 rev transform -translate-y-1/2 right-4 w-8 h-8 cursor-pointer z-20 flex justify-center items-center bg-white rounded-full shadow"
//       onClick={onClick}
//     >
//       <IoIosArrowDropright className="w-6 h-6 text-black" />
//     </div>
//   );
// };

// CustomNextArrow.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

// const Reviews = () => {
//   const {
//     data: reviews,
//     isLoading,
//     error,
//   } = useFetch("http://localhost:8000/Clients");

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="relative ">
//       <div className=" bg-primary px-2 py-10 mb-10 ">
       
          
//           <div className="relative">
//             <Slider {...settings}>
//               {Clients.map((client) => (
//                 <div
//                   key={client.id}
//                   className="relative bg-white h-[450px] rounded-md shadow-md"
//                 >
//                   <div className="h-[200px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400">
//                     <img
//                       className="cursor-pointer object-cover  rounded-full h-44 w-44"
//                       src={`./RiviewImage/${client.image}.jpg`}
//                       alt="client image"
//                     />
//                   </div>
//                   <div className="mt-12 px-3">
//                     <p className="mt-2 flex justify-center items-center font-semibold">
//                       {client.name}, <br />
//                     </p>
//                     <p className="mt-2 flex justify-center items-center font-semibold">
//                       {client.location}
//                     </p>
//                     <p className="italic flex justify-center items-center pl-3">
//                       {client.text}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
    
//       </div>

//       <div className="w-full pt-5 px-3 flex justify-center items-center">
//         <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Reviews;

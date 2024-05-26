// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import useFetch from "../Usefetch";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
// import Footer from "../Footer";
// import { PreloadImages } from "../../../Components/PreloadImages";
// import { FaFilter } from "react-icons/fa";
// import { data } from "autoprefixer";

// const Reviews = () => {
//   const [selectCategory, setSelectCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [sortOptions, setSortOptions] = useState("Default");
//   const {
//     data: items,
//     isLoading,
//     error,
//   } = useFetch("http://localhost:8000/Ankara");

//   // Function to filter items based on the selected category
//   const filterItems = (category) => {
//     const filtered =
//       category === "All"
//         ? items
//         : items.filter((item) => item.category === category);
//     setFilteredItems(filtered);
//     setSelectCategory(category);
//   };

//   // Update filteredItems when items data is loaded
//   useEffect(() => {
//     if (items) {
//       setFilteredItems(items);
//     }
//   }, [items]);

//   // Sorting function
//   const handleSortChange = (option) => {
//     setSortOptions(option);

//     // Logic for sorting
//     let sortedItems = [...filteredItems];

//     switch (option) {
     

//       case "Low-High":
//         sortedItems.sort((a, b) => a.price - b.price);
//         break;

//       case "High-Low":
//         sortedItems.sort((a, b) => b.price - a.price);
//         break;

//       case "Default":
//       default:
//         // Reset to the initial state of filteredItems based on the current category
//         filterItems(selectCategory);
//         return;
//     }
//     setFilteredItems(sortedItems);
//   };

//   return (
//     <div className="relative bg-primary">
//       <div className="px-6 py-10 mb-10">
//         <div className="flex justify-between py-6 items-start md:items-center">
//           <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 items-start md:items-center">
//             <span className="cursor-pointer" onClick={() => filterItems("All")}>
//               All
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Suit")}
//             >
//               Suit
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Gown")}
//             >
//               Gown
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Fitted")}
//             >
//               Fitted
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Pinner Four")}
//             >
//               Pinner Four
//             </span>
//           </div>
//           <div className="flex justify-center items-center">
//             <div className="bg-black p-2">
//               <FaFilter className="h-3 w-3 text-white" />
//             </div>
//             <select
//               id="sort"
//               onChange={(e) => handleSortChange(e.target.value)}
//               value={sortOptions}
//               className="cursor-pointer border-2 border-black"
//             >
//               <option value="default">Default</option>
             
//               <option value="Low-High">Low-High</option>
//               <option value="High-Low">High-Low</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           {isLoading ? (
//             <div>Loading Data...</div>
//           ) : error ? (
//             <div>Error: {error}</div>
//           ) : (
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
//               {filteredItems.map((review) => (
//                 <div
//                   key={review.id}
//                   className="relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[550px] rounded-md shadow-md"
//                 >
//                   <div
//                     className="h-[600px] md:h-[450px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
//                     style={{
//                       background: `url(./images/${review.image}.jpg) center center/ cover`,
//                     }}
//                   ></div>
//                   <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
//                     <p className="mt-2 w-full font-semibold">
//                       {review.title} <br />
//                     </p>
//                     <div className="flex justify-between w-full items-center">
//                       <p className="italic">{review.status}</p>
//                       <p className="font-semibold">${review.price}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="w-full  bg-white py-5  flex justify-center items-center">
//         <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Reviews;








import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "../Footer";
import { PreloadImages } from "../../../Components/PreloadImages";
import { FaFilter } from "react-icons/fa";

const Akara = () => {
  const Items = useMemo(
    () => [
      {
        id: 1,
        title: "Gown",
        category: "Gown",
        price: 63.85,
        image: "2923",
        status: "Best Sellers",
      },
      {
        id: 2,
        title: "Matching",
        category: "Matching",
        price: 130.0,
        image: "ankara2",
        status: "Best Sellers",
      },
      {
        id: 3,
        title: "Gown",
        category: "Gown",
        price: 53.0,
        image: "47625",
        status: "Best Sellers",
      },
      {
        id: 4,
        title: "Pinner Four",
        category: "Pinner Four",
        price: 63.85,
        image: "5052",
        status: "New Arrival",
      },
      {
        id: 5,
        title: "Suit",
        category: "Suit",
        price: 236.0,
        image: "2148747911",
        status: "New Arrival",
      },
      {
        id: 6,
        title: "Gown",
        category: "Gown",
        price: 198.0,
        image: "ankara",
        status: "Best Sellers",
      },
      {
        id: 7,
        title: "Half Sleeve",
        category: "Gown",
        price: 120.5,
        image: "red2",
        status: "Best Sellers",
      },
      {
        id: 8,
        title: "Fitted",
        category: "Fitted",
        price: 160.0,
        image: "woman",
        status: "Old Trending",
      },

      {
        id: 9,
        title: "Gown",
        category: "Gown",
        price: 122.5,
        image: "fine",
        status: "Best Sellers",
      },
    ],
    []
  );

  const [selectCategory, setSelectCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOptions, setSortOptions] = useState("Default");

  const filterItems = (category) => {
    const filtered =
      category === "All"
        ? Items
        : Items.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectCategory(category);
  };

  useEffect(() => {
    setFilteredItems(Items);
  }, [Items]);

  const handleSortChange = (option) => {
    setSortOptions(option);
    let sortedItems = [...filteredItems];

    switch (option) {
      
      case "Low-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "Default":
      default:
        sortedItems =
          selectCategory === "All"
            ? Items
            : Items.filter((item) => item.category === selectCategory);
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="relative bg-primary">
      <div className="px-6 py-10 mb-10">
        <div className="flex justify-between py-6 items-start md:items-center">
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 items-start md:items-center">
            <span className="cursor-pointer" onClick={() => filterItems("All")}>
              All
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Suit")}
            >
              Suit
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Gown")}
            >
              Gown
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Fitted")}
            >
              Fitted
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Pinner Four")}
            >
              Pinner Four
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-black p-2">
              <FaFilter className="h-3 w-3 text-white" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOptions}
              className="cursor-pointer border-2 border-black"
            >
              <option value="Default">Default</option>
             
              <option value="Low-High">Low-High</option>
              <option value="High-Low">High-Low</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {filteredItems.map((review) => (
              <div
                key={review.id}
                className="relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[550px] rounded-md shadow-md"
              >
                <div
                  className="h-[600px] md:h-[450px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
                  style={{
                    background: `url(./images/${review.image}.jpg) center center/ cover`,
                  }}
                ></div>
                <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
                  <p className="mt-2 w-full font-semibold">
                    {review.title} <br />
                  </p>
                  <div className="flex justify-between w-full items-center">
                    <p className="italic">{review.status}</p>
                    <p className="font-semibold">${review.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-5 px-3 flex justify-center items-center">
        <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Akara;

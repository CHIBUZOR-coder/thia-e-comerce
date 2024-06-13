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
// import { Link } from "react-router-dom";

// const Reviews = () => {
//   const [selectCategory, setSelectCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [sortOptions, setSortOptions] = useState("Default");
//   const {
//     data: items,
//     isLoading,
//     error,
//   } = useFetch("http://localhost:8000/Bridals");

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
//               onClick={() => filterItems("Sleave")}
//             >
//               Sleave
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Sleaveless")}
//             >
//               Sleaveless
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Native")}
//             >
//               Native
//             </span>
//             <span
//               className="cursor-pointer"
//               onClick={() => filterItems("Shifon")}
//             >
//               Shifon
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
//               {filteredItems.map((item) => (
//                 <Link
//                   to={`/thia-e-comerce/Bridals/${item.id}`}
//                   key={item.id}
//                   className="relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[550px] rounded-md shadow-md"
//                 >
//                   <div
//                     className="h-[600px] md:h-[450px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
//                     style={{
//                       background: `url(./images/${item.image}.jpg) center center/ cover`,
//                     }}
//                   ></div>
//                   <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
//                     <p className="mt-2 w-full font-semibold">
//                       {item.title} <br />
//                     </p>
//                     <div className="flex justify-between w-full items-center">
//                       <p className="italic">{item.status}</p>
//                       <p className="font-semibold">${item.price}</p>
//                     </div>
//                   </div>
//                 </Link>
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











//The commented code above is set for when there is incorporation the backend It uses the shop container, while The code below is set to make the project avalable for viewing on web and it uses the shopp container.





import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../Usefetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "../Footer";
import { PreloadImages } from "../../../Components/PreloadImages";
import { FaFilter } from "react-icons/fa";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const  Bridals= () => {
  const Items = useMemo(
    () => [
      {
        id: 1,
        title: "Sleavless && Net Sleeve",
        category: "Sleave",
        price: 63.85,
        image: "aabb",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 38,
      },
      {
        id: 2,
        title: "Flare Gown",
        category: "Sleavless",
        price: 130.0,
        image: "bridal",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
      },
      {
        id: 3,
        title: "Sweeper Gown",
        category: "Sleave",
        price: 160.0,
        image: "bridal000",
        status: "Old Trending",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 42,
      },
      {
        id: 4,
        title: "Ashoebi Bridal Gown",
        category: "Sleaveless",
        price: 53.0,
        image: "brialppp",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 40,
      },
      {
        id: 5,
        title: "Flower Shoulder ",
        category: "Sleave",
        price: 236.0,
        image: "brial99",
        status: "New Arrival",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
      },
      {
        id: 6,
        title: "Shifon Bridal Gown",
        category: "Shifon",
        price: 120.5,
        image: "brial111",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 38,
      },
      {
        id: 7,
        title: "Net Sleave",
        category: "Sleave",
        price: 160.0,
        image: "bridalooo",
        status: "Old Trending",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 36,
      },
      {
        id: 8,
        title: "Tralditional Gown",
        category: "Native",
        price: 195.0,
        image: "abb2",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 42,
      },
      {
        id: 9,
        title: "Flare White",
        category: "Sleave",
        price: 63.85,
        image: "bridal44",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
      },
      {
        id: 10,
        title: "Lace & Shifoon Mix",
        category: "Shifon",
        price: 63.85,
        image: "bridal77",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
      },
      {
        id: 11,
        title: "Buterfly Lace Gown",
        category: "Sleave",
        price: 63.85,
        image: "product",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
      },
      {
        id: 12,
        title: "Lace Special",
        category: "Sleaveless",
        price: 198.0,
        image: "thia2",
        status: "Best Sellers",
        Description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placealaborum et,  quaerat ullam animi rem nam enim architecto quod perferen numquam sed?      ",
        size: 34,
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
        filterItems(selectCategory);
        return;
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
              onClick={() => filterItems("Sleave")}
            >
              Sleave
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Sleaveless")}
            >
              Sleaveless
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Native")}
            >
              Native
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Shifon")}
            >
              Shifon
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
            {filteredItems.slice(0, 9).map((item) => (
              <Link
                to={`/thia-e-comerce/Bridals/${item.id}`}
                key={item.id}
                className="relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[600px]  xl:h[700px]  rounded-md shadow-md"
              >
                <div
                  className="h-[600px]   md:h-[500px] xl:h[600px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
                  style={{
                    background: `url(./images/${item.image}.jpg) center center/ cover`,
                  }}
                ></div>
                <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
                  <p className="mt-2 w-full font-semibold">
                    {item.title} <br />
                  </p>
                  <div className="flex justify-between w-full items-center">
                    <p className="italic">{item.status}</p>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full  bg-white py-5  flex justify-center items-center">
        <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Bridals;





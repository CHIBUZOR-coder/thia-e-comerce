import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../Usefetch";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from "../Footer";
import { PreloadImages } from "../../../Components/PreloadImages";
import { FaFilter, FaPlus } from "react-icons/fa";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import DataResolve from "../DataResolve";
import { DataContext } from "../../../Components/DataContext";

const Kidis = () => {
  const {
    error,
    isLoading,
    KidiesProducts: items,
    popStates,
    HandlePopCart,
    AddToCart,
    setCartRender,
  } = useContext(DataContext);

  const [selectCategory, setSelectCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOptions, setSortOptions] = useState("Default");

  // Function to filter items based on the selected category
  const filterItems = (category) => {
    const filtered =
      category === "All"
        ? items
        : items.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectCategory(category);
  };

  // Update filteredItems when items data is loaded
  useEffect(() => {
    if (items) {
      setFilteredItems(items);
    }
  }, [items]);

  // Sorting function
  const handleSortChange = (option) => {
    setSortOptions(option);

    // Logic for sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "Low-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;

      case "High-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      case "Default":
      default:
        // Reset to the initial state of filteredItems based on the current category
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
              onClick={() => filterItems("Long")}
            >
              Long
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Short")}
            >
              Short
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Native")}
            >
              Native
            </span>
            <span
              className="cursor-pointer"
              onClick={() => filterItems("Matching")}
            >
              Matching
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
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low-High">Low-High</option>
              <option value="High-Low">High-Low</option>
            </select>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div>Loading Data...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[550px] rounded-md shadow-md"
                >
                  <Link
                    to={`/Kidies/${item.id}`}
                    className="h-[600px] md:h-[450px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400"
                    style={{
                      background: `url(${item.image}) center center/ cover`,
                    }}
                  ></Link>
                  <div className="mt-4 px-3 flex flex-col justify-center items-center gap-2">
                    <div className="mt-2 w-full font-semibold flex justify-between">
                      <p> {item.style} </p>
                      <button
                        onClick={() => {
                          HandlePopCart(item.id);
                              setCartRender((prev) => !prev);
                              AddToCart(item, 1, item?.price);
                        }}
                        className={` ${
                          popStates[item.id] ? "pop" : ""
                        }   cursor-pointer  bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 p-2`}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className="flex justify-between w-full items-center">
                      <p className="italic">{item.status}</p>
                      <p className="font-semibold">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full  bg-white py-5  flex justify-center items-center">
        <div className="revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Kidis;

//The commented code above is set for when there is incorporation the backend It uses the shop container, while The code below is set to make the project avalable for viewing on web and it uses the shopp container.

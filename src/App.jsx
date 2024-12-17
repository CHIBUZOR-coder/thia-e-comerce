import React, { useState, useRef, useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbarr";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import DataProvider, { DataContext } from "./Components/DataContext";

function App() {
  const [IsSearchOpen, SetIsSearchOpen] = useState(false);
  const [IsCartOpen, SetIsCarthOpen] = useState(false);
  const inputRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  //Search Featues initialization below
  const [fetchStart, setFetchStart] = useState(false);
  const [result, setResult] = useState(null);
  const [searchTem, setSearchTem] = useState("");
  const [error, setError] = useState(true);
  const [heightTrue, setheightTrue] = useState(false);
  ////////End
  const location = useLocation();
  const textRef = useRef(null);
  const [isLoading, setIsloading] = useState(true);
  // const { UserInfo } = useContext(DataContext);

  const localData = JSON.parse(localStorage.getItem("cartItems")) || false;
  const UserInfo = JSON.parse(localStorage.getItem("userInfo")) || false;
  console.log("Local Storage Data:", localData);

  let cartitems;
  if (!UserInfo) {
    cartitems = localData ? localData.products : [];
  } else {
    cartitems = localData ? localData : [];
  }

  console.log("Cart Items:", cartitems);
  // console.log(typeof cartitems);

  const HandleFetchStart = async (value) => {
    try {
      let data;
      const res = await fetch("http://localhost:5000/api/cloths", {
        method: "GET",
        headers: {
          "Content-Type": "Application/Json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch search results");
      }

      data = await res.json();
      setResult(
        data.filter((cloth) => {
          return (
            value &&
            cloth &&
            cloth.style &&
            cloth.style.toLowerCase().includes(value)
          );
        })
      );

      console.log(result);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
      setError("Failed to fetch search results. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value) {
      setheightTrue(true);
    } else {
      setheightTrue(false);
    }
    setSearchTem(value); // Update search term state
    HandleFetchStart(value); // Perform the fetch
    if (value.length <= 0) {
      setheightTrue(false);
    }
  };

  const NavItems = [
    { tittle: "Home", path: "/thia-e-comerce/", id: "1" },
    { tittle: "About", path: "/thia-e-comerce/About", id: "2" },
    { tittle: "Reviews", path: "/thia-e-comerce/Reviews", id: "4" },
    { tittle: "Contact", path: "/thia-e-comerce/Contact", id: "5" },
    { tittle: "Custom Fit", path: "/thia-e-comerce/Custom", id: "6" },
    { tittle: "Shop All", path: "/", id: "7" },
  ];
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLink = () => {
    setIsLinkOpen(!isLinkOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(!setIsMenuOpen);
  };
  const handleCart = () => {
    console.log("Cart open");
    SetIsCarthOpen(!IsCartOpen);
    stopScreenScroll(!IsCartOpen);
  };

  const handleSearch = () => {
    console.log("open");
    SetIsSearchOpen(!IsSearchOpen);
    stopScreenScroll(!IsSearchOpen);

    if (!IsSearchOpen) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100); // Delay to ensure the modal is rendered
    }
  };

  const stopScreenScroll = (isOpen) => {
    const body = document.body;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.style.overflowY = isOpen ? "hidden" : "auto";
    body.style.paddingRight = isOpen ? `${scrollBarWidth}px` : "0";
  };

  const closeSearchModal = (e) => {
    if (e.target.classList.contains("coverDiv")) {
      SetIsSearchOpen(false);
      stopScreenScroll(false);
    }
  };

  const DoubleToggle = () => {
    handleClose();
    handleCart();
  };

  const closeCartModal = (e) => {
    if (e.target.classList.contains("coverDiv2")) {
      SetIsCarthOpen(false);
      stopScreenScroll(false);
    }
  };
  const HandleLoading = () => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  };
  useEffect(() => {
    HandleLoading();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex min-h-[100vh] justify-center items-center">
          <div className=" animate-spin flex justify-center items-center border-2 border-x-emerald-600 rounded-full h-36 w-36">
            <div className=" border-2 h-[60%] w-[60%]  border-x-black rounded-full"></div>
          </div>
        </div>
      ) : (
        <>
          <DataProvider>
            <div className="relative z-10">
              <Navbar
                handleSearch={handleSearch}
                handleCart={handleCart}
                toggle={toggle}
                closeCartModal={closeCartModal}
                close={close}
              />

              <Outlet />
            </div>

            {/* smallscreen Cart header */}
            <div
              onClick={closeCartModal}
              className={`absolute  w-full top-0 left-0 min-h-[100vh] z-10 coverDiv2  ${
                IsCartOpen ? "open" : ""
              } `}
            >
              {/* Cart section */}
              <div
                className={`search2 absolute w-full md:w-[45%] h-[100vh] overflow-y-scroll  gap-3  top-0 right-0 flex flex-col justify-center  items-start bg-white  z-50 text-black  ${
                  IsCartOpen ? "open" : "closed"
                }  `}
              >
                <header className=" top-0 w-full px-4 bg-white md:px-28 headerrr md:z-40 z-10 ">
                  {/* Cart Navbar */}
                  <nav className="container navcart relative bg-blue-800  flex justify-between md:justify-center  p-2 ">
                    <a
                      className=""
                      style={{ display: "inline-block", width: "fit-content" }}
                      href="/thia-e-comerce/"
                    >
                      <div className="w-24 h-24 logo bg-slate-500"></div>
                    </a>
                    <div className="block md:hidden">
                      <button onClick={toggle}>
                        {isMenuOpen ? (
                          <FaTimes className="w-6 h-6 text-black" />
                        ) : (
                          <FaBars className="w-6 h-6 text-black" />
                        )}
                      </button>
                    </div>
                  </nav>
                  <hr />

                  {/* Cart navbar  Menu conten small screen */}
                  <div className="block md:hidden ">
                    <ul
                      className={`bg-black relative flex justify-between text-white px-4 py-4 rounded ${
                        isMenuOpen && screenWidth < 760 ? "" : "hidden"
                      }`}
                    >
                      <div className="  flex flex-col gap-4 ">
                        {NavItems.map(({ tittle, path }) => (
                          <li
                            key={tittle}
                            className={`decorate  no-underline hover:underline text-white transition ease-in-out duration-700 ${
                              location.pathname === path
                                ? "active-nav-item"
                                : ""
                            }`}
                          >
                            {tittle === "Shop All" ? (
                              <span className="relative  flex w-24 gap-1">
                                {tittle}
                                <span
                                  onClick={toggleLink}
                                  className="text-red-500"
                                >
                                  {isLinkOpen ? (
                                    <FaTimes className="w-6 h-6 text-white" />
                                  ) : (
                                    <IoIosArrowDropright className="w-6 h-6 text-white" />
                                  )}
                                </span>
                                <ul
                                  className={`bg-white text-black absolute subnav -top-[209.5px]  flex flex-col justify-center w-36 gap-2 z-20 px-4 py-3 transition ease-in-out duration-700 ${
                                    isLinkOpen ? "subopen" : "hidden hide"
                                  }`}
                                >
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Akara"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Akara"
                                  >
                                    Ankara
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Ashebi"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Ashebi"
                                  >
                                    Ashoebi
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === "/"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Coprate"
                                  >
                                    Coperate
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Kaftn"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Kaftn"
                                  >
                                    Kaftan
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Bridls"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Bridls"
                                  >
                                    Bridals
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Matchng"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Matchng"
                                  >
                                    Matching Set
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname ===
                                      "/thia-e-comerce/Kidis"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                                    to="/thia-e-comerce/Kidis"
                                  >
                                    Kiddies
                                  </Link>
                                </ul>
                              </span>
                            ) : (
                              <Link onClick={DoubleToggle} to={path}>
                                {tittle}
                              </Link>
                            )}
                          </li>
                        ))}
                      </div>

                      <div className=" flex flex-col gap-4">
                        <div className="text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden">
                          <a
                            href="/thia-e-comerce/Login"
                            className="flex items-baseline"
                          >
                            <FaUser />
                            Account
                          </a>

                          {/* <span
                        onClick={DoubleToggle}
                        className="flex items-baseline"
                      >
                        <FaShoppingBag />
                        Shop
                      </span> */}
                        </div>

                        <div className="flex justify-end mt-3">
                          <FaSearch
                            onClick={handleSearch}
                            className="w-5 h-5 text-white cursor-pointer md:hidden"
                          />
                        </div>
                      </div>
                    </ul>
                  </div>
                  {/* Cart navbar  Menu conten  */}
                </header>

                <div className="w-full flex  justify-center items-center">
                  {cartitems && cartitems.length >= 1 ? (
                    <div className="w-full flex justify-start h-[300px] overflow-scroll md:justify-center items-start">
                      <table className="table-auto text-gray-500  bg-slate-700   w-full">
                        <thead>
                          <tr className="bg-red-400 sticky top-0 left-0">
                            <th className="w-[10%]">S/n</th>
                            <th className="">Style</th>
                            <th className="">Size</th>
                            <th className="">Quantity</th>
                            <th className="">Amount</th>
                            <th className="">Image</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartitems.map((item, index) => (
                            <tr key={item.id} className="font-semibold">
                              <td>{Number(index + 1)}</td>
                              <td>
                                {UserInfo ? item.style : item.product.style}
                              </td>
                              <td>
                                {UserInfo ? item.sizee : item.product.size}
                              </td>
                              <td>
                                {UserInfo
                                  ? item.quantity
                                  : item.product.quantity}
                              </td>
                              <td>
                                ${UserInfo ? item.amount : item.product.amount}
                              </td>
                              <td className="flex justify-center items-center">
                                <img
                                  src={
                                    UserInfo ? item.image : item.product.image
                                  }
                                  alt={
                                    UserInfo ? item.image : item.product.image
                                  }
                                  className="h-[50px] w-[40px] object-cover"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center items-center cartSection text-center">
                      <span className="md:w-[200px] w-full">
                        You have no items in your shopping bag
                      </span>
                    </div>
                  )}
                </div>

                <div className="  flex justify-center items-center w-full   md:top-1/2  py-4 ">
                  <a
                    href={`/thia-e-comerce/Allshops`}
                    className="w-1/2   h-[60px] flex justify-center py-5 items-center  hover:bg-red-700 transition text-center ease-in-out duration-500 bg-red-600 rounded-sm text-white "
                  >
                    {cartitems && cartitems.length >= 1
                      ? "Shop More"
                      : "Shop Our Collections"}
                  </a>
                </div>
              </div>
            </div>
            {/* --- */}

            {/* Cart navbar */}
            <div
              onClick={closeSearchModal}
              className={`absolute w-full top-0 bg-yellow-300 left-0 right-0 h-[100vh] z-50 md:z-10 coverDiv  ${
                IsSearchOpen ? "open" : ""
              } `}
            >
              <div
                className={`search absolute w-full md:w-1/2 top-0 left-0  h-[100vh] z-30 text-black bg-white ${
                  result ? "overflow-y-scroll" : ""
                } ${IsSearchOpen ? "open" : "closed"}  `}
              >
                <div className="absolute z-40 md:px-16 px-4 w-full md:top-[200px] top[50px] ">
                  <div className="flex justify-end w-full p-2 my-2">
                    <span onClick={handleSearch}>
                      <FaXmark className="h-6 w-6 cursor-pointer" />
                    </span>
                  </div>
                  <p className="text-3xl font-semibold capitalize ">Search</p>

                  <div>
                    <div className="flex w-full justify-center items-center p-2 gap-5">
                      <input
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                        ref={inputRef}
                        className="w-full h-10 outline-none"
                        placeholder="What are you looking for?"
                      />

                      <Link
                        onClick={handleSearch}
                        to="/thia-e-comerce/SearchPage"
                      >
                        <IoIosArrowDropright className="rounded-full h-7 w-7" />
                      </Link>
                    </div>
                  </div>

                  <hr className="my-2" />
                  <div
                    className={` w-full ${
                      heightTrue ? " h-[200px] " : ""
                    } overflow-y-scroll `}
                  >
                    {result && result.length > 0 ? (
                      result.map((product) => (
                        <div
                          key={product.id}
                          className="result-item p-4 border-b w-full    bg-spinbg  flex justify-start items-center gap-4"
                        >
                          <p className="product-name  font-semibold">
                            {product.style}
                          </p>
                          <p className="product-name  font-semibold">
                            {product.brand}
                          </p>
                          <p
                            className="product-description text-gray-600 bg-cover bg-center bg-no-repeat w-[60px] h-[80px] border border-gray-300 rounded-md"
                            style={{ backgroundImage: `url(${product.image})` }}
                          ></p>

                          <p className="product-price text-green-500">
                            ${product.price}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 mt-4">
                        No results found.
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    <p className="font-bold">Help</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="help">Customer Care</span>
                    <Link to="/thia-e-comerce/Terms" className="help">
                      Delivery Information
                    </Link>
                    <Link to="/thia-e-comerce/Care" className="help">
                      Care Guide
                    </Link>
                    <a href="/thia-e-comerce/FAQs" className="help">
                      FAQs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <data />
          </DataProvider>
        </>
      )}
    </div>
  );
}

export default App;

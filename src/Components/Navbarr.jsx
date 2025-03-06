import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosArrowDropright,
  IoIosArrowUp,
} from "react-icons/io";
import { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
// import { UseQuantity } from "../pages/home/Quantity";
import { DataContext } from "./DataContext";

const Navbar = ({ handleSearch, handleCart }) => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  const location = useLocation();

  const handleClose = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const { isUser, cartCount, cartRender } = useContext(DataContext);

  console.log(cartCount);
  
useEffect(() => {
  console.log("cartRender changed:", cartRender);
}, [cartRender]);


  // useEffect(() => {
  //   console.log(cartCount);
  // }, [cartCount]);

  //  console.log(totalQuantity)
  const togglee = () => {
    setIsMenuOpen(!IsMenuOpen);
  };

  const DoubleToggle = () => {
    handleClose();
    handleCart();
    // handleClose();
  };

  const toggleLink = () => {
    setIsLinkOpen(!isLinkOpen);
  };
  const NavItems = [
    { tittle: "Home", path: "/", id: "1" },
    { tittle: "About", path: "/About", id: "2" },
    { tittle: "Reviews", path: "/Reviews", id: "4" },
    { tittle: "Contact", path: "/Contact", id: "5" },
    { tittle: "Custom Fit", path: "/Custom", id: "6" },
    { tittle: "Shop All", path: "/", id: "7" },
  ];

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const myRef = useRef(null);
  const childRef = useRef(null);

  const custom = "text-black";
  const defaultt = "text-white";
  // const colorChange = () => {
  //   setCustom("text-white");
  //   // myRef.children[1].classList.add(custom);
  // };

  const colorCustom = () => {
    // setCustom("text-black");

    if (myRef.current && myRef.current.children[1]) {
      myRef.current.children[1].classList.remove(defaultt);
      myRef.current.children[1].classList.add(custom);
    }
    // console.log(myRef.current.children[1]);
  };

  const colorDefualt = () => {
    if (myRef.current && myRef.current.children[1]) {
      myRef.current.children[1].classList.remove(custom);
      myRef.current.children[1].classList.add(defaultt);
    }
    console.log(myRef.current.children[1]);
  };
  return (
    <header className="relative px-4 bg-white md:px-28 headerrr md:z-40 z-10 ">
      <nav className="container relative flex justify-between py-4 md:py-4   ">
        {/* Search Bar */}
        <FaSearch
          onClick={handleSearch}
          className="hidden w-5 h-5 text-black cursor-pointer md:block"
        />

        {/* Logo */}
        <Link
          className=""
          style={{ display: "inline-block", width: "fit-content" }}
          to="/"
        >
          <div className="w-24 h-24 logo bg-slate-500"></div>
        </Link>

        {/* Account & User */}
        <div className="hidden gap-10 text-lg text-black md:flex justify-center items-start z-20 ">
          {/* Cart count*/}
          <span
            ref={myRef}
            onClick={handleCart}
            className={`parrent  cursor-pointer  transition ease-in-out duration-700 h-8 w-8 rounded-full flex justify-center items-baseline relative z-20`}
          >
            <FaShoppingBag className="w-7 h-7 text-black  relative"></FaShoppingBag>
            <p className="absolute font-semibold top-1 text-white z-10">
              {cartCount}
            </p>
            {/* <span
              ref={childRef}
              className={`absolute ${defaultt} bg-yellow-300 text-sm  top-[12px] flex justify-center items-center  h-[14px] w-[14px] rounded-full`}
              onClick={DoubleToggle}
            ></span> */}
          </span>
          <Link
            to={`${
              isUser ? "/Account" : "/Login"
            }`}
            className="flex items-baseline "
          >
            <FaUser className="w-7 h-7" />
            Account
          </Link>
        </div>

        {/* Navbar toggler for sm devices */}
        <div className="block md:hidden">
          <button onClick={togglee}>
            {IsMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* Big Screen */}
      <div className="hidden pt-4 largeScreen hider md:block ">
        <ul className="items-center justify-between hidden gap-4 font-semibold text-black md:flex">
          {NavItems.map(({ tittle, path }) => (
            <li
              key={tittle}
              className={`decorate no-underline hover:underline text-footerlinks hover:text-black transition ease-in-out duration-700 ${
                location.pathname === path ? "active-nav-item" : ""
              }`}
            >
              {tittle === "Shop All" ? (
                <span className="relative flex items-center justify-center gap-1">
                  {tittle}
                  <span onClick={toggleLink} className="text-red-500">
                    {isLinkOpen ? (
                      <IoIosArrowUp className="w-6 h-6 text-black" />
                    ) : (
                      <IoIosArrowDown className="w-6 h-6 text-black" />
                    )}
                  </span>
                  <ul
                    className={`bg-primary2 absolute   subnav top-6 flex flex-col justify-center w-36 gap-2 z-30 px-4 py-5 transition ease-in-out duration-700 ${
                      isLinkOpen ? "" : "hidden"
                    }`}
                  >
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Akara"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Akara"
                    >
                      Ankara
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Ashebi"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Ashebi"
                    >
                      Ashoebi
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/Coprate"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Coprate"
                    >
                      Coperate
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/Kaftn"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Kaftn"
                    >
                      Kaftan
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/Bridls"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Bridls"
                    >
                      Bridals
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/Matchng"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Matchng"
                    >
                      Matching Set
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/Kidis"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/Kidis"
                    >
                      Kiddies
                    </Link>
                  </ul>
                </span>
              ) : (
                <Link to={`${path}`}>{tittle}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="block md:hidden">
        <ul
          className={`bg-black relative flex justify-between text-white px-4 py-4 rounded ${
            IsMenuOpen && screenWidth < 760 ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4">
            {NavItems.map(({ tittle, path }) => (
              <li
                key={tittle}
                className={`decorate no-underline hover:underline text-white transition ease-in-out duration-700 ${
                  location.pathname === path ? "active-nav-item" : ""
                }`}
              >
                {tittle === "Shop All" ? (
                  <span className="relative  flex w-24 gap-1">
                    {tittle}
                    <span onClick={toggleLink} className="text-red-500">
                      {isLinkOpen ? (
                        <FaTimes className="w-6 h-6 text-white" />
                      ) : (
                        <IoIosArrowDropright className="w-6 h-6 text-white" />
                      )}
                    </span>
                    <ul
                      className={`bg-primary2 text-black absolute subnav  -top-[209.5px] flex flex-col justify-center w-36 gap-2 z-20 px-4 py-3 transition ease-in-out duration-700 ${
                        isLinkOpen ? "subopen" : "hidden"
                      }`}
                    >
                      <Link
                        onClick={handleClose}
                        className={`decorate2 ${
                          location.pathname === "/Akara"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Akara"
                      >
                        Ankara
                      </Link>
                      <Link
                        onClick={handleClose}
                        className={`decorate2 ${
                          location.pathname === "/Ashebi"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Ashebi"
                      >
                        Ashoebi
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/" ? "text-red-500" : ""
                        }`}
                        to="/Coprate"
                      >
                        Coperate
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/Kaftn"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Kaftn"
                      >
                        Kaftan
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/Bridls"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Bridls"
                      >
                        Bridals
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/Matchng"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Matchng"
                      >
                        Matching Set
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/Kidis"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/Kidis"
                      >
                        Kiddies
                      </Link>
                    </ul>
                  </span>
                ) : (
                  <Link onClick={handleClose} to={path}>
                    {tittle}
                  </Link>
                )}
              </li>
            ))}
          </div>

          {/* menu */}
          <div className="flex flex-col gap-4 bg-yellow-300">
            <div className="text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden">
              <Link
                onClick={togglee}
                to={`${
                  isUser ? "/Account" : "/Login"
                }`}
                href="/Login"
                className="flex items-baseline"
              >
                <FaUser className="text-[23px]"></FaUser>
                Account
              </Link>

              <span className="flex items-center justify-center relative  text-[28px]relative   ">
                <div
                  onClick={DoubleToggle}
                  className="bg-trans cursor-pointer z-20 absolute w-full h-full"
                ></div>
                <FaShoppingBag className="text-[23px]"></FaShoppingBag>
                <p className="absolute text-[18px] top-[4px] font-semibold  text-black">
                  {cartCount} 
                </p>
              </span>
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
    </header>
  );
};

// Navbar.propTypes = {
//   handleSearch: PropTypes.func.isRequired,
//   handleCart: PropTypes.func.isRequired,
// };

export default Navbar;

// // Inside your Navbar component
// import {
//   FaBars,
//   FaSearch,
//   FaShoppingBag,
//   FaTimes,
//   FaUser,
// } from "react-icons/fa";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLinkOpen, setIsLinkOpen] = useState(false);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const location = useLocation();
//   const toggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const toggle2 = () => {
//     setIsLinkOpen(!isLinkOpen);
//   };
//   const NavItems = [
//     { tittle: "Home", path: "/thia-e-comerce/", id: "1" },
//     { tittle: "About", path: "/thia-e-comerce/About", id: "2" },

//     { tittle: "Reviews", path: "/thia-e-comerce/Reviews", id: "4" },
//     { tittle: "Contact", path: "/thia-e-comerce/Contact", id: "5" },
//     { tittle: "Custom Fit", path: "/thia-e-comerce/Custom", id: "6" },
//     { tittle: "Shop All", path: "/", id: "7" },
//   ];

//   useEffect(() => {
//     // Function to update screen width on window resize
//     const updateScreenWidth = () => {
//       setScreenWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", updateScreenWidth);

//     return () => {
//       window.removeEventListener("resize", updateScreenWidth);
//     };
//   }, []);

//   console.log("hi");

//   return (
//     <header className=" md:px-28 bg-white px-4  top-0 left-0 right-0">
//       <div className="  bg-blue-500 search absolute w-[400px]   left-0 right-0 h-full">

//       </div>
//       <nav  className="flex justify-between container md:py-4 py-4">
//         {/* Search Bar */}
//         <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />

//         {/* Logo */}
//         <a
//           className=""
//           style={{ display: "inline-block", width: "fit-content" }}
//           href="/thia-e-comerce/Home"
//         >
//           <div className="logo bg-slate-500 h-24 w-24"></div>
//         </a>

//         {/* Account & User */}
//         <div className="text-lg text-black md:flex gap-4 hidden">
//           <a href="/thia-e-comerce/Home" className="flex items-baseline">
//             <FaUser />
//             Account
//           </a>
//           <a href="/thia-e-comerce/Home" className="flex items-baseline">
//             <FaShoppingBag />
//             Shop
//           </a>
//         </div>

//         {/* Navbar toggler for sm devices */}
//         <div className="md:hidden block">
//           <button onClick={toggle}>
//             {isMenuOpen ? (
//               <FaTimes className="h-6 w-6 text-black" />
//             ) : (
//               <FaBars className="h-6 w-6 text-black" />
//             )}
//           </button>
//         </div>
//       </nav>
//       <hr />

//       {/* Big Screen */}
//       <div className="pt-4 hidden hider z-20 md:block ">
//         <ul className="md:flex items-center justify-between font-semibold text-black hidden gap-4">
//           {NavItems.map(({ tittle, path }) => (
//             <li
//               key={tittle}
//               className={`decorate no-underline hover:underline text-footerlinks hover:text-black transition ease-in-out duration-700 ${
//                 location.pathname === path ? "active-nav-item" : "" // <--- Added conditional class
//               }`}
//             >
//               {/* Conditional rendering of span for "Shop All" */}
//               {tittle === "Shop All" ? (
//                 <span className="relative flex justify-center items-center gap-1">
//                   {tittle}
//                   <span onClick={toggle2} className="text-red-500">
//                     {/* <IoIosArrowDown className="h-6 w-6 text-black" /> */}

//                     {isLinkOpen ? (
//                       <IoIosArrowUp className="h-6 w-6 text-black" />
//                     ) : (
//                       <IoIosArrowDown className="h-6 w-6 text-black" />
//                     )}
//                   </span>
//                   <ul
//                     className={`bg-primary2 absolute subnav top-6 flex flex-col justify-center w-36 gap-2 z-10  px-4 py-5 transition ease-in-out duration-700    ${
//                       isLinkOpen ? "" : "hidden"
//                     }`}
//                   >
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Akara"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Akara"
//                     >
//                       Ankara
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Ashebi"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Ashebi"
//                     >
//                       Ashoebi
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Coprate"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Coprate"
//                     >
//                       Coperate
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Kaftn"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Kaftn"
//                     >
//                       Kaftan
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Bridls"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Bridls"
//                     >
//                       Bridals
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Matchng"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Matchng"
//                     >
//                       Matching Set
//                     </Link>
//                     <Link
//                       className={`decorate2 ${
//                         location.pathname === "/thia-e-comerce/Kidis"
//                           ? "text-red-500"
//                           : ""
//                       }`}
//                       to="/thia-e-comerce/Kidis"
//                     >
//                       Kiddies
//                     </Link>
//                   </ul>
//                 </span>
//               ) : (
//                 <Link to={`${path}`}>{tittle}</Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile menu */}
//       <div className=" md:hidden block">
//         <ul
//           className={`bg-black relative flex justify-between  text-white px-4 py-2 rounded ${
//             isMenuOpen && screenWidth < 760 ? "" : "hidden"
//           }`}
//         >
//           <div className="">
//             {NavItems.map(({ tittle, path }) => (
//               <li
//                 key={tittle}
//                 className={`decorate no-underline hover:underline text-white  transition ease-in-out duration-700 ${
//                   location.pathname === path ? "active-nav-item" : "" // <--- Added conditional class
//                 }`}
//               >
//                 {/* Conditional rendering of span for "Shop All" */}
//                 {tittle === "Shop All" ? (
//                   <span className="relative flex   gap-1 w-24">
//                     {tittle}
//                     <span onClick={toggle2} className="text-red-500">
//                       {/* <IoIosArrowDown className="h-6 w-6 text-black" /> */}

//                       {isLinkOpen ? (
//                         <IoIosArrowUp className="h-6 w-6 text-white" />
//                       ) : (
//                         <IoIosArrowDown className="h-6 w-6 text-white" />
//                       )}
//                     </span>
//                     <ul
//                       className={`bg-primary2 text-black absolute subnav top-6 flex flex-col justify-center w-36 gap-2 z-10 px-4 py-5 transition ease-in-out duration-700    ${
//                         isLinkOpen ? "" : "hidden"
//                       }`}
//                     >
//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Akara"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Akara"
//                       >
//                         Ankara
//                       </Link>
//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Ashebi"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Ashebi"
//                       >
//                         Ashoebi
//                       </Link>
//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/" ? "text-red-500" : ""
//                         }`}
//                         to="/thia-e-comerce/Coprate"
//                       >
//                         Coperate
//                       </Link>
//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Kaftn"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Kaftn"
//                       >
//                         Kaftan
//                       </Link>

//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Bridls"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Bridls"
//                       >
//                         Bridals
//                       </Link>

//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Matchng"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Matchng"
//                       >
//                         Matching Set
//                       </Link>
//                       <Link
//                         className={`decorate2 ${
//                           location.pathname === "/thia-e-comerce/Kidis"
//                             ? "text-red-500"
//                             : ""
//                         }`}
//                         to="/thia-e-comerce/Kidis"
//                       >
//                         Kiddies
//                       </Link>
//                     </ul>
//                   </span>
//                 ) : (
//                   <Link to={path}>{tittle}</Link>
//                 )}
//               </li>
//             ))}
//           </div>

//           <div>
//             <div className="text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden ">
//               <a href="/" className="flex items-baseline">
//                 <FaUser />
//                 Account
//               </a>
//               <a href="/" className="flex items-baseline">
//                 <FaShoppingBag />
//                 Shop
//               </a>
//             </div>

//             <div className="flex justify-end mt-3">
//               <FaSearch className="text-white w-5 h-5 cursor-pointer  md:hidden" />
//             </div>
//           </div>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({handleSearch}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggle2 = () => {
    setIsLinkOpen(!isLinkOpen);
  };
  const NavItems = [
    { tittle: "Home", path: "/thia-e-comerce/", id: "1" },
    { tittle: "About", path: "/thia-e-comerce/About", id: "2" },
    { tittle: "Reviews", path: "/thia-e-comerce/Reviews", id: "4" },
    { tittle: "Contact", path: "/thia-e-comerce/Contact", id: "5" },
    { tittle: "Custom Fit", path: "/thia-e-comerce/Custom", id: "6" },
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

  return (
    <header className="relative md:px-28 bg-white px-4 headerrr ">
      <nav className="flex justify-between container md:py-4 py-4 relative ">
        {/* Search Bar */}
        <FaSearch
          onClick={handleSearch}
          className="text-black w-5 h-5 cursor-pointer hidden md:block"
        />

        {/* Logo */}
        <a
          className=""
          style={{ display: "inline-block", width: "fit-content" }}
          href="/thia-e-comerce/Home"
        >
          <div className="logo bg-slate-500 h-24 w-24"></div>
        </a>

        {/* Account & User */}
        <div className="text-lg text-black md:flex gap-4 hidden">
          <a href="/thia-e-comerce/Home" className="flex items-baseline">
            <FaUser />
            Account
          </a>
          <a href="/thia-e-comerce/Home" className="flex items-baseline">
            <FaShoppingBag />
            Shop
          </a>
        </div>

        {/* Navbar toggler for sm devices */}
        <div className="md:hidden block">
          <button onClick={toggle}>
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-black" />
            ) : (
              <FaBars className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* Big Screen */}
      <div className="pt-4 largeScreen hidden  hider md:block">
        <ul className="md:flex items-center justify-between font-semibold text-black hidden gap-4">
          {NavItems.map(({ tittle, path }) => (
            <li
              key={tittle}
              className={`decorate no-underline hover:underline text-footerlinks hover:text-black transition ease-in-out duration-700 ${
                location.pathname === path ? "active-nav-item" : ""
              }`}
            >
              {tittle === "Shop All" ? (
                <span className="relative flex justify-center items-center gap-1">
                  {tittle}
                  <span onClick={toggle2} className="text-red-500">
                    {isLinkOpen ? (
                      <IoIosArrowUp className="h-6 w-6 text-black" />
                    ) : (
                      <IoIosArrowDown className="h-6 w-6 text-black" />
                    )}
                  </span>
                  <ul
                    className={`bg-primary2 absolute  subnav top-6 flex flex-col justify-center w-36 gap-2 z-30 px-4 py-5 transition ease-in-out duration-700 ${
                      isLinkOpen ? "" : "hidden"
                    }`}
                  >
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Akara"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Akara"
                    >
                      Ankara
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Ashebi"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Ashebi"
                    >
                      Ashoebi
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Coprate"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Coprate"
                    >
                      Coperate
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Kaftn"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Kaftn"
                    >
                      Kaftan
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Bridls"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Bridls"
                    >
                      Bridals
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Matchng"
                          ? "text-red-500"
                          : ""
                      }`}
                      to="/thia-e-comerce/Matchng"
                    >
                      Matching Set
                    </Link>
                    <Link
                      className={`decorate2 ${
                        location.pathname === "/thia-e-comerce/Kidis"
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
                <Link to={`${path}`}>{tittle}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden block">
        <ul
          className={`bg-black relative flex justify-between text-white px-4 py-2 rounded ${
            isMenuOpen && screenWidth < 760 ? "" : "hidden"
          }`}
        >
          <div>
            {NavItems.map(({ tittle, path }) => (
              <li
                key={tittle}
                className={`decorate no-underline hover:underline text-white transition ease-in-out duration-700 ${
                  location.pathname === path ? "active-nav-item" : ""
                }`}
              >
                {tittle === "Shop All" ? (
                  <span className="relative flex gap-1 w-24">
                    {tittle}
                    <span onClick={toggle2} className="text-red-500">
                      {isLinkOpen ? (
                        <IoIosArrowUp className="h-6 w-6 text-white" />
                      ) : (
                        <IoIosArrowDown className="h-6 w-6 text-white" />
                      )}
                    </span>
                    <ul
                      className={`bg-primary2 text-black absolute subnav top-6 flex flex-col justify-center w-36 gap-2 z-20 px-4 py-5 transition ease-in-out duration-700 ${
                        isLinkOpen ? "" : "hidden"
                      }`}
                    >
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Akara"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/thia-e-comerce/Akara"
                      >
                        Ankara
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Ashebi"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/thia-e-comerce/Ashebi"
                      >
                        Ashoebi
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/" ? "text-red-500" : ""
                        }`}
                        to="/thia-e-comerce/Coprate"
                      >
                        Coperate
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Kaftn"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/thia-e-comerce/Kaftn"
                      >
                        Kaftan
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Bridls"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/thia-e-comerce/Bridls"
                      >
                        Bridals
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Matchng"
                            ? "text-red-500"
                            : ""
                        }`}
                        to="/thia-e-comerce/Matchng"
                      >
                        Matching Set
                      </Link>
                      <Link
                        className={`decorate2 ${
                          location.pathname === "/thia-e-comerce/Kidis"
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
                  <Link to={path}>{tittle}</Link>
                )}
              </li>
            ))}
          </div>

          <div>
            <div className="text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden">
              <a href="/" className="flex items-baseline">
                <FaUser />
                Account
              </a>
              <a href="/" className="flex items-baseline">
                <FaShoppingBag />
                Shop
              </a>
            </div>

            <div className="flex justify-end mt-3">
              <FaSearch
                onClick={handleSearch}
                className="text-white w-5 h-5 cursor-pointer md:hidden"
              />
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Navbar;

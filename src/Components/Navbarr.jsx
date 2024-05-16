// import {
//   FaBars,
//   FaSearch,
//   FaShoppingBag,
//   FaTimes,
//   FaUser,
// } from "react-icons/fa";
// // import logo from "../../public/logo.png";
// // import logo99bb from "../public/images/logo9.png";
// import { list } from "postcss";
// import { useState } from "react";

// const Navbar = () => {
//   const [IsmenuOpen, SetIsmenuOpen] = useState(false);
//   const toggle = () => {
//     SetIsmenuOpen(!IsmenuOpen);
//   };
//   const NavItems = [
//     { tittle: "Home", path: "", id: "1" },
//     { tittle: "About", path: "", id: "2" },
//     { tittle: "Services", path: "", id: "3" },
//     { tittle: "Reviews", path: "", id: "4" },
//     { tittle: "Contact", path: "", id: "5" },
//     { tittle: " Hot Sales ", path: "", id: "6" },
//     { tittle: "Shop All", path: "", id: "7" },
//   ];

//   let showAll = NavItems[3];

//   console.log(showAll);
//   return (
//     <header className="max-w-screen-2xl xl:px-28 bg-white px-4 absolute top-0 left-0 right-0">
//       <nav className="flex justify-between container md:py-4 py-4">
//         {/* ************************ */}
//         {/* search Bar */}
//         <FaSearch className="text-blackk w-5 h-5 cursor-pointer hidden md:block" />
//         {/* ************************ */}
//         {/* logo */}
//         <a
//           className=""
//           style={{ display: "inline-block", width: "fit-content" }}
//           href="/"
//         >
//           {" "}
//           <div className="logo bg-slate-500  h-24 w-24"></div>
//         </a>
//         {/* ************************ */}
//         {/* Account & User */}
//         <div className="text-lg text-blackk sm:flex gap-4 hidden">
//           <a href="/" className="flex items-baseline ">
//             <FaUser />
//             Account
//           </a>
//           <a href="/" className="flex items-baseline ">
//             <FaShoppingBag />
//             Shop
//           </a>
//         </div>
//         {/* ************************ */}
//         {/* Navbar toogler for sm devices */}
//         <div className="md:hidden block">
//           <button onClick={toggle}>
//             {IsmenuOpen ? (
//               <FaTimes className=" h-6 w-6 text-blackk" />
//             ) : (
//               <FaBars className=" h-6 w-6 text-blackk" />
//             )}
//           </button>
//         </div>
//         {/* ************************ */}
//       </nav>
//       <hr />

//       {/* Big Screen */}
//       <div className="pt-4">
//         <ul className="md:flex items-center justify-between font-semibold text-blackk hidden gap-4">
//           {NavItems.map(({ tittle }) => (
//             <li
//               key={tittle}
//               className=" decorate no-underline hover:underline text-footerlinks hover:text-black transition ease-in-out duration-700"
//             >
//               <a href="/">{tittle}</a>
//             </li>
//           ))}
//         </ul>

//       </div>

//       {/* Mobile menu  */}
//       <div>
//         <ul
//           className={`bg-black text-white px-4 py-2 rounded ${
//             IsmenuOpen ? "" : "hidden"
//           } `}
//         >
//           {NavItems.map(({ tittle }) => (
//             <li
//               key={tittle}
//               className=" text-footerlinks hover:text-black transition ease-in-out duration-700 my-3 cursor-pointer w-8"
//             >
//               <a href="/">{tittle}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// Inside your Navbar component
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggle2 = () => {
    setIsLinkOpen(!isLinkOpen);
  };
  const NavItems = [
    { tittle: "Home", path: "", id: "1" },
    { tittle: "About", path: "", id: "2" },
    { tittle: "Services", path: "", id: "3" },
    { tittle: "Reviews", path: "", id: "4" },
    { tittle: "Contact", path: "", id: "5" },
    { tittle: "Hot Sales", path: "", id: "6" },
    { tittle: "Shop All", path: "", id: "7" },
  ];

  useEffect(() => {
    // Function to update screen width on window resize
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <header className="max-w-screen-2xl xl:px-28 bg-white px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between container md:py-4 py-4">
        {/* Search Bar */}
        <FaSearch className="text-black w-5 h-5 cursor-pointer hidden md:block" />

        {/* Logo */}
        <a
          className=""
          style={{ display: "inline-block", width: "fit-content" }}
          href="/"
        >
          <div className="logo bg-slate-500 h-24 w-24"></div>
        </a>

        {/* Account & User */}
        <div className="text-lg text-black sm:flex gap-4 hidden">
          <a href="/" className="flex items-baseline">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-baseline">
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
      <div className="pt-4">
        <ul className="md:flex items-center justify-between font-semibold text-black hidden gap-4">
          {NavItems.map(({ tittle }) => (
            <li
              key={tittle}
              className="decorate no-underline hover:underline text-footerlinks hover:text-black transition ease-in-out duration-700"
            >
              {/* Conditional rendering of span for "Shop All" */}
              {tittle === "Shop All" ? (
                <span className="relative flex justify-center items-center gap-1">
                  {tittle}
                  <span onClick={toggle2} className="text-red-500">
                    {/* <IoIosArrowDown className="h-6 w-6 text-black" /> */}

                    {isLinkOpen ? (
                      <IoIosArrowUp className="h-6 w-6 text-black" />
                    ) : (
                      <IoIosArrowDown className="h-6 w-6 text-black" />
                    )}
                  </span>
                  <ul
                    className={`bg-primary2 absolute subnav top-6 flex flex-col justify-center w-36 gap-2  px-4 py-5 transition ease-in-out duration-700    ${
                      isLinkOpen ? "" : "hidden"
                    }`}
                  >
                    <a className="decorate2" href="/">
                      Ankara
                    </a>
                    <a className="decorate2" href="/">
                      Ashoebi
                    </a>
                    <a className="decorate2" href="/">
                      Coperate
                    </a>
                    <a className="decorate2" href="/">
                      Kaftan
                    </a>
                    <a className="decorate2" href="/">
                      Matching Set
                    </a>
                    <a className="decorate2" href="/">
                      Kiddies
                    </a>
                  </ul>
                </span>
              ) : (
                <a href="/">{tittle}</a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="">
        <ul
          className={`bg-black relative flex justify-between  text-white px-4 py-2 rounded ${
            isMenuOpen && screenWidth < 760 ? "" : "hidden"
          }`}
        >
          <div className="">
            {NavItems.map(({ tittle }) => (
              <li
                key={tittle}
                className="text-white hover:text-footerlinks transition ease-in-out duration-700 my-3 cursor-pointer w-20"
              >
                {/* Conditional rendering of span for "Shop All" */}
                {tittle === "Shop All" ? (
                  <span className="relative flex   gap-1 w-24">
                    {tittle}
                    <span onClick={toggle2} className="text-red-500">
                      {/* <IoIosArrowDown className="h-6 w-6 text-black" /> */}

                      {isLinkOpen ? (
                        <IoIosArrowUp className="h-6 w-6 text-white" />
                      ) : (
                        <IoIosArrowDown className="h-6 w-6 text-white" />
                      )}
                    </span>
                    <ul
                      className={`bg-primary2 text-black absolute subnav top-6 flex flex-col justify-center w-36 gap-2  px-4 py-5 transition ease-in-out duration-700    ${
                        isLinkOpen ? "" : "hidden"
                      }`}
                    >
                      <a className="decorate22" href="/">
                        Ankara
                      </a>
                      <a className="decorate22" href="/">
                        Ashoebi
                      </a>
                      <a className="decorate22" href="/">
                        Coperate
                      </a>
                      <a className="decorate22" href="/">
                        Kaftan
                      </a>
                      <a className="decorate22" href="/">
                        Matching Set
                      </a>
                      <a className="decorate22" href="/">
                        Kiddies
                      </a>
                    </ul>
                  </span>
                ) : (
                  <a href="/">{tittle}</a>
                )}
              </li>
            ))}
          </div>

          <div>
            <div className="text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden ">
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
              <FaSearch className="text-white w-5 h-5 cursor-pointer  md:hidden" />
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

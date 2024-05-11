import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
// import logo from "../../public/logo.png";
// import logo99bb from "../public/images/logo9.png";
import { list } from "postcss";
import { useState } from "react";

const Navbar = () => {
  const [IsmenuOpen, SetIsmenuOpen] = useState(false);
  const toggle = () => {
    SetIsmenuOpen(!IsmenuOpen);
  };
  const NavItems = [
    { tittle: "Ankara", path: "" },
    { tittle: "Ashoebi", path: "" },
    { tittle: "Cooperate", path: "" },
    { tittle: "Kaftan", path: "" },
    { tittle: "Bridals", path: "" },
    { tittle: "Matching Set ", path: "" },
    { tittle: "Kiddies", path: "" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 bg-white px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between container md:py-4 py-4">
        {/* ************************ */}
        {/* search Bar */}
        <FaSearch className="text-blackk w-5 h-5 cursor-pointer hidden md:block" />
        {/* ************************ */}
        {/* logo */}
        <a
          className=""
          style={{ display: "inline-block", width: "fit-content" }}
          href="/"
        >
          {" "}
          <div className="logo bg-slate-500  h-24 w-24"></div>
        </a>
        {/* ************************ */}
        {/* Account & User */}
        <div className="text-lg text-blackk sm:flex gap-4 hidden">
          <a href="/" className="flex items-baseline ">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-baseline ">
            <FaShoppingBag />
            Shop
          </a>
        </div>
        {/* ************************ */}
        {/* Navbar toogler for sm devices */}
        <div className="md:hidden block" >
          <button onClick={toggle}>
            {IsmenuOpen ? (
              <FaTimes className=" h-6 w-6 text-blackk" />
            ) : (
              <FaBars className=" h-6 w-6 text-blackk" />
            )}
          </button>
        </div>
        {/* ************************ */}
      </nav>
      <hr />

      {/* Big Screen */}
      <div className="pt-4">
        <ul className="md:flex items-center justify-between font-semibold text-blackk hidden gap-4">
          {NavItems.map(({ tittle }) => (
            <li key={tittle} className="hover:text-yellow-500">
              <a href="/">{tittle}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu  */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            IsmenuOpen ? "" : "hidden"
          } `}
        >
          {NavItems.map(({ tittle }) => (
            <li
              key={tittle}
              className="hover:text-yellow-500 my-3 cursor-pointer w-8"
            >
              <a href="/">{tittle}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

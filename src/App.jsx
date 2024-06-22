import React, { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbarr";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

function App() {
  const [IsSearchOpen, SetIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

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

  return (
    <>
      <div className=" ">
        <Navbar handleSearch={handleSearch} />
        <Outlet />
      </div>
      <div
        onClick={closeSearchModal}
        className={`absolute w-full top-0 left-0 right-0 h-[100vh] z-10 coverDiv ${
          IsSearchOpen ? "open" : ""
        } `}
      >
        <div
          className={`search absolute w-full md:w-1/2 top-0 left-0 right-0 h-[100vh] z-30 text-black bg-white ${
            IsSearchOpen ? "open" : "closed"
          }  `}
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
                  ref={inputRef}
                  className="w-full h-10 outline-none"
                  placeholder="What are you looking for?"
                />

                <Link onClick={handleSearch} to="/thia-e-comerce/SearchPage">
                  <IoIosArrowDropright className="rounded-full h-7 w-7" />
                </Link>
              </div>
            </div>

            <hr className="my-2" />

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
              <a href="/thia-e-comerce/FAQs " className="help">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

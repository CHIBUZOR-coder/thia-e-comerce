// import { Outlet } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Components/Navbarr";
// import { FaXmark } from "react-icons/fa6";
// import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
// import { useState } from "react";

// function App() {
//   const [IsSearchOpen, SetIsSearchOpen] = useState(false);

//   const handleSearch = () => {
//     SetIsSearchOpen(!IsSearchOpen);
//   };
//   return (
//     <>
//       <div className="">
//         {/* <Navbar  /> */}
//         <Navbar handleSearch={handleSearch} />
//         <Outlet />
//       </div>

//       <div
//         className={`search absolute w-full md:w-1/2 top-0 left-0 right-0 h-[100vh] z-10  text-black bg-white ${
//           IsSearchOpen ? "" : "hidden"
//         }  `}
//       >
//         <div className="absolute md:px-16 px-4  w-full top-[200px] ">
//           <div className="   flex justify-end w-full p-2  my-2">
//             <span onClick={handleSearch}>
//               <FaXmark className="h-6 w-6" />
//             </span>
//           </div>
//           <p className="text-3xl font-semibold capitalize  my-4">Search</p>

//           <div>
//             <div className=" flex w-full justify-center items-center  p-2  gap-5">
//               <input
//                 type="text"
//                 className="w-full h-10 outline-none "
//                 placeholder="What are you looking for?"
//               />
//               <IoIosArrowDropright className="    rounded-full  h-7 w-7" />
//             </div>
//           </div>

//           <hr className=" my-2" />

//           <div>
//             <p className=" font-bold">Help</p>
//           </div>

//           <div className="flex flex-col ">
//             <span className="help">Customer Care</span>
//             <span className="help">Delivery Information</span>
//             <span className="help">Returns and Exchanges</span>
//             <span className="help">FAQs</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbarr";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

function App() {
  const [IsSearchOpen, SetIsSearchOpen] = useState(false);

  const handleSearch = () => {
    console.log("open");
    SetIsSearchOpen(!IsSearchOpen);
     stopScreenScroll(!IsSearchOpen);
  };
  
  
  const stopScreenScroll = (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Prevent scrolling when modal is open
  };

  return (
    <>
      <div className=" ">
        <Navbar handleSearch={handleSearch} />
        <Outlet />
      </div>
      <div
        onClick={handleSearch}
        className={` absolute w-full top-0 left-0 right-0 h-[100vh] z-20 coverDiv ${
          IsSearchOpen ? "open" : ""
        } `}
      >
        <div
          className={`search absolute w-full md:w-1/2 top-0 left-0 right-0 h-[100vh] z-20   text-black bg-white ${
            IsSearchOpen ? "open" : "closed"
          }  `}
        >
          <div className="absolute md:px-16 px-4  w-full top-[200px] ">
            <div className="flex justify-end w-full p-2 my-2">
              <span onClick={handleSearch}>
                <FaXmark className="h-6 w-6 cursor-pointer" />
              </span>
            </div>
            <p className="text-3xl font-semibold capitalize my-4">Search</p>

            <div>
              <div className="flex w-full justify-center items-center p-2 gap-5">
                <input
                  type="text"
                  className="w-full h-10 outline-none"
                  placeholder="What are you looking for?"
                />
                <IoIosArrowDropright className="rounded-full h-7 w-7" />
              </div>
            </div>

            <hr className="my-2" />

            <div>
              <p className="font-bold">Help</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="help">Customer Care</span>
              <span className="help">Delivery Information</span>
              <span className="help">Returns and Exchanges</span>
              <span className="help">FAQs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

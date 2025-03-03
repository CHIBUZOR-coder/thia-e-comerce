import { useContext } from "react";
import { MdOutlineReviews } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineTransaction } from "react-icons/ai";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { DataContext } from "../Components/DataContext";
import { GrView } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lightMode } = useContext(DataContext);

  const HandelToggler = () => {
    setIsOpen(!isOpen);
  };

  const Navlists = [
    {
      tittle: "Products",
      path: "/Admin/Products",
      icon: <CgProductHunt />,
      id: "1",
    },
    {
      tittle: "Orders",
      path: "/Admin",
      icon: <MdOutlineProductionQuantityLimits />,
      id: "2",
    },
    {
      tittle: "Reviews",
      path: "/Reviews",
      icon: <MdOutlineReviews />,
      id: "3",
    },
    {
      tittle: "Transactions",
      path: "/Contact",
      icon: <AiOutlineTransaction />,
      id: "4",
    },
    {
      tittle: "Customers",
      path: "/Contact",
      icon: <IoIosContact />,
      id: "5",
    },
  ];

  return (
    <div
      className={`${
        lightMode
          ? "bg-AdminnavLight text-white"
          : "bg-AdminblueBlack text-adminTex"
      }  h-full  p-3`}
    >
      <ul className="flex flex-col  gap-3">
        {/* mapping to nav links */}
        {Navlists.map((list) => {
          //mapping to add links under product dropdowmn
          if (list.tittle === "Products") {
            return (
              <div key={list.id}>
                <div
                  className={`font-semibold w-[50%]  flex gap-1 justify-start items-center ${
                    lightMode
                      ? " text-gray-500  hover:text-black"
                      : " text-adminTex  hover:text-white"
                  }   transition ease-in-out duration-700`}
                >
                  {list.icon} {list.tittle}{" "}
                  {isOpen ? (
                    <RiArrowDropUpLine
                      className="text-3xl cursor-pointer"
                      onClick={HandelToggler}
                    />
                  ) : (
                    <RiArrowDropDownLine
                      className="text-3xl cursor-pointer"
                      onClick={HandelToggler}
                    />
                  )}
                </div>
                {/* the listed links under products that can be toggled */}
                <ul
                  className={`text-gray-600 ${
                    isOpen ? "block" : "hidden"
                  }     ${
                    lightMode
                      ? " text-gray-500  hover:text-black"
                      : " text-adminTex  hover:text-white"
                  }  flex flex-col  `}
                >
                  <Link
                    to={`/`}
                  
                    className={`font-semibold w-[60%]  flex justify-start items-center gap-1 ${
                      lightMode
                        ? " text-gray-500  hover:text-black"
                        : " text-adminTex  hover:text-white"
                    } transition-all ease-in-out duration-500 cursor-pointer p-2 rounded-md`}
                  >
                    <FaCartShopping />
                    <p>Webstore</p>
                  </Link>
                  <Link
                    to={`/Admin`}
                
                    className={`font-semibold w-[65%]  flex justify-start items-center gap-1 ${
                      lightMode
                        ? " text-gray-500  hover:text-black"
                        : " text-adminTex  hover:text-white"
                    } transition-all ease-in-out duration-700 cursor-pointer p-2 rounded-md`}
                  >
                    <GrView />
                    <p> View Products</p>
                  </Link>

                  <Link
                    to={`/Admin/AddProduct`}
                
                    className={`font-semibold w-[60%]  flex justify-start items-center gap-1 ${
                      lightMode
                        ? " text-gray-500  hover:text-black"
                        : " text-adminTex  hover:text-white"
                    } transition-all ease-in-out duration-150 cursor-pointer p-2 rounded-md`}
                  >
                    <IoAddCircle />
                    <p> Add Products</p>
                  </Link>
                </ul>
              </div>
            );
          } else {
            return (
              <li key={list.id}>
                <Link
                  to={list.path}
                  className={`font-semibold w-[50%]  ${
                    lightMode
                      ? " text-gray-500 hover:text-black"
                      : " text-adminTex  hover:text-white"
                  }  flex gap-1 justify-start items-center text-adminTex hover:text-black transition ease-in-out duration-700
                  }`}
                >
                  {list.icon} {list.tittle}
                </Link>
              </li>
            );
          }
        })}
      </ul>

      <div className={`mt-3 `}>
        <hr
          className={`${
            lightMode
              ? " text-gray-500  hover:text-black"
              : " text-adminTex  hover:text-white"
          } `}
        />
      </div>

      <div
        className={`  ${
          lightMode
            ? " text-gray-500  hover:text-black"
            : " text-adminTex  hover:text-white"
        } w-[50%] flex justify-start items-center font-semibold  text-adminTex mt-3 gap-1  hover:text-black transition ease-in-out duration-700 cursor-pointer`}
      >
        <IoIosSettings />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default AdminNav;

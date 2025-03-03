import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Components/DataContext";
import { CiEdit } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Account = () => {
  const [manageAccount, setMange] = useState(false);
  const [lightModeA, setlightMode] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [AccountSumary, setAccountSumary] = useState(true);
  const [Orders, setOrders] = useState(false);
  const [Address, setAddress] = useState(false);
  const [show, setShow] = useState("Your Account Summary");

  // const HandleToggleChange = () => {
  //   setMange(!manageAccount);
  // };

  const acctLinks = [
    {
      id: 1,
      tittle: "Your Account Summary",
    },
    {
      id: 2,
      tittle: "Your Address",
    },
    {
      id: 3,
      tittle: "Your Orders",
    },
  ];

  const HandleLogout = async () => {
    try {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isAuthentified");
      const res = await fetch("http://localhost:5000/clear-cookies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      let data;
      if (res.ok) {
        data = await res.json();
        console.log(data);
        window.location.href = "/";
        localStorage.clear();
      }
    } catch (error) {
      console.log("unable to logout", error.message);
    }
  };

  const HandleMenuToggle = (item) => {
    setIsMenuOpen(!isMenuOpen);
    setIsLink(!isLink);
    console.log(item.tittle);

    if (item.tittle === "Your Account Summary") {
      setAccountSumary(true);
      setOrders(false);
      setAddress(false);
      setShow(item.tittle);
      console.log("Acct Sum:", AccountSumary);
      console.log("adress:", Address);
      console.log("Orders:", Orders);
    } else if (item.tittle === "Your Address") {
      setAddress(true);
      setAccountSumary(false);
      setOrders(false);
      setShow(item.tittle);
      console.log("adress:", Address);
      console.log("Acct Sum:", AccountSumary);
      console.log("Orders:", Orders);
    } else if (item.tittle === "Your Orders") {
      setOrders(true);
      setAddress(false);
      setAccountSumary(false);
      setShow(item.tittle);

      console.log("Orders:", Orders);
      console.log("adress:", Address);
      console.log("Acct Sum:", AccountSumary);
    }
  };

  const HandleLink_MenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLink(!isLink);
  };

  // just to toggle link div
  const HandleLinkToggle = () => {
    setIsLink(!isLink);
  };
  const { UserInfo } = useContext(DataContext);

  // useEffect(() => {
  //   console.log(userDetails);
  // });

  return (
    <div className="w-full">
      {/* Small screen */}
      <div className="block md:hidden w-full  ">
        <div className="w-full  bg-AccountNav min-h-32 p-4 flex flex-col gap-12 ">
          <div className="flex flex-col gap-6">
            <p className="text-3xl">
              {" "}
              Hi {UserInfo.firstname} {UserInfo.lastname},{" "}
            </p>

            <div
              onClick={HandleLogout}
              className="flex justify-start items-center gap-2"
            >
              <p>Signout</p>
              <SlLogout />
            </div>
          </div>

          <div className="bg-AdminnavLight p-3 flex justify-between items-center">
            <p>{show}</p>

            {isMenuOpen ? (
              <GoChevronUp
                className="cursor-pointer"
                onClick={HandleLink_MenuToggle}
              />
            ) : (
              <GoChevronDown
                className="cursor-pointer"
                onClick={HandleLink_MenuToggle}
              />
            )}
          </div>

          {/* Links */}
          <div className={`w-full  ${isLink ? "expanded" : "Acct_links"}  `}>
            <div className={`flex flex-col gap-5 w-[60%] `}>
              {acctLinks.map((item) => (
                <p
                  key={item.id}
                  onClick={() => HandleMenuToggle(item)}
                  className="cursor-pointer hover:text-gray-500   transition ease-in-out duration-500"
                >
                  {item.tittle}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Account Sumary */}
        <div
          className={`w-full ${
            AccountSumary ? "block" : "hidden"
          }  px-2 Account sumary`}
        >
          <div className="w-full p-7 flex flex-col gap-10  min-h-[100vh]">
            <div className="w-full flex flex-col gap-10">
              <div className="w-full text-4xl">
                {" "}
                <h2>Your Accout Summary</h2>
              </div>
            </div>

            <hr />
            <div className="flex justify-center flex-col gap-8 items-start w-full">
              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                }  flex justify-center item-center flex-col w-full gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Account Information</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 "> Contact information</p>
                <p className="w-1/2">
                  {" "}
                  {UserInfo.firstname} {UserInfo.lastname} {UserInfo.email}
                </p>
              </div>

              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                } w-full flex justify-center item-center flex-col gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Your Addresse</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 ">Delivery Address</p>
                <div className="w-full">
                  <p className="w-1/2">
                    {" "}
                    {UserInfo.firstname} {UserInfo.lastname}
                  </p>

                  <p>{UserInfo.address}</p>
                  <p>T:{UserInfo.phone}</p>
                </div>
              </div>

              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                } w-full flex justify-center item-center flex-col gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Your Addresse</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 ">Delivery Address</p>
                <div className="w-full">
                  <p className="w-1/2">
                    {" "}
                    {UserInfo.firstname} {UserInfo.lastname}
                  </p>

                  <p>{UserInfo.address}</p>
                  <p>T:{UserInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className={`w-full  ${Address ? "block" : "hidden"}  `}>
          <div
            className={`w-full  p-7 flex flex-col gap-10 justify-start items-start `}
          >
            <div
              className={`accountInfo  ${
                manageAccount ? "hidden" : "block"
              } w-full flex justify-center item-center flex-col gap-3`}
            >
              <div className=" w-full flex justify-start items-center gap-2">
                <p className="text-2xl ">Your Addresse</p>
                <span className="text-xl cursor-pointer">
                  <CiEdit />
                </span>
              </div>
              <p className="font-semibold  w-1/2 ">Delivery Address</p>
              <div className="w-full">
                <p className="w-1/2">
                  {" "}
                  {UserInfo.firstname} {UserInfo.lastname}
                </p>

                <p>{UserInfo.address}</p>
                <p>T:{UserInfo.phone}</p>
              </div>
            </div>

            <div
              className={`accountInfo  ${
                manageAccount ? "hidden" : "block"
              } w-full flex justify-center item-center flex-col gap-3`}
            >
              <div className=" flex justify-start items-center gap-2">
                <p className="text-2xl ">Your Addresse</p>
                <span className="text-xl cursor-pointer">
                  <CiEdit />
                </span>
              </div>
              <p className="font-semibold  w-1/2 ">Billing Address</p>
              <div className="w-full">
                <p className="w-1/2">
                  {" "}
                  {UserInfo.firstname} {UserInfo.lastname}
                </p>

                <p>{UserInfo.address}</p>
                <p>T:{UserInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full  ${Orders ? "block" : "hidden"}`}>Orders</div>
      </div>

      {/* Big Screen */}
      <div className="w-full hidden md:block">
        <div className=" relative  flex flex-col md:flex-row justify-center gap-5 items-start min-h-[100vh] ">
          {/* //nav */}
          <div className="AccountNav absolute  nav top-0 left-0   bg-AccountNav  min-h-[100vh] w-[30%] flex flex-col gap-5  p-5 ">
            <h2 className="lg:text-4xl md:text-2xl ">
              Hi, {UserInfo.firstname} {UserInfo.lastname},
            </h2>

            <div className="w-full flex flex-col gap-8">
              <p className="font-semibold lg:text-lg md:text-[15px] ">
                Your Account Summary
              </p>
              <p className=" text-lg ">Your Orders</p>
              <p className=" text-lg ">Your Addresses</p>
            </div>

            <div className="w-full relative cursor-pointer bg-red-500 flex justify-start items-center">
              <div
                onClick={HandleLogout}
                className="bg-signout p-2 text-white w-[100%] flex justify-center items-center gap-3"
              >
                <p className="">Sign Out</p>
                <SlLogout />
              </div>
            </div>
          </div>
          {/*  */}

          {/* body */}
          <div className="w-[70%] p-7 absolute top-0 right-0 flex flex-col gap-10  min-h-[100vh]">
            <div className="w-full flex flex-col gap-10">
              <div className="w-full text-4xl">
                {" "}
                <h2>Your Accout Summary</h2>
              </div>
            </div>

            <hr />
            <div className="flex justify-center flex-wrap gap-10 items-start w-full">
              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                } md:w-3/4 lg:w-[30%] flex justify-center item-center flex-col gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Account Information</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 "> Contact information</p>
                <p className="w-1/2">
                  {" "}
                  {UserInfo.firstname} {UserInfo.lastname} {UserInfo.email}
                </p>
              </div>
              {/*  */}
              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                } md:w-3/4 lg:w-[30%] flex justify-center item-center flex-col gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Your Addresse</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 ">Delivery Address</p>
                <div className="w-full">
                  <p className="w-1/2">
                    {" "}
                    {UserInfo.firstname} {UserInfo.lastname}
                  </p>

                  <p>{UserInfo.address}</p>
                  <p>T:{UserInfo.phone}</p>
                </div>
              </div>
              {/*  */}
              <div
                className={`accountInfo  ${
                  manageAccount ? "hidden" : "block"
                } md:w-3/4 lg:w-[30%] flex justify-center item-center flex-col gap-3`}
              >
                <div className=" flex justify-start items-center gap-2">
                  <p className="text-2xl ">Your Addresse</p>
                  <span className="text-xl cursor-pointer">
                    <CiEdit />
                  </span>
                </div>
                <p className="font-semibold  w-1/2 ">Billing Address</p>
                <div className="w-full">
                  <p className="w-1/2">
                    {" "}
                    {UserInfo.firstname} {UserInfo.lastname}
                  </p>

                  <p>{UserInfo.address}</p>
                  <p>T:{UserInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

import React from "react";
import Banner from "../Banner";
import Category from "./ChangeFunction/Categoryy";
import Allslides from "./All/Allslides";
import MoreProducts from "./MoreProducts";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className=" flex w-full  md:flex-row  flex-col-reverse  md:pt-5 xl:px-28 md:gap-14 px-4 relative">
        <Allslides />
        <Category />
      </div>

      <MoreProducts />

      <div className=" mt-16 pt-5 footer w-full h-product2 md:max-h-first  bg-primary">
        <div className="flex my-10 flex-col justify-center items-center w-full  text-center">
          <h2 className="font-semibold">Links</h2>
          <div className="flex w-full md:w-1/2 h-20 md:h-20 text-center justify-center flex-wrap  gap-5 gap-x-7 md:gap-0 md:gap-x-8 px-20">
            {/* <a className="w-4" href="/">Made to order </a>
          <a className="w-20" href="/">Size Guide </a>
          <a className="w-4" href="/">Care Guide</a>
          <a className="w-4" href="/">About Thia</a>
          <a className="w-4" href="/"> Delivery, Terms & Conditions</a> */}
            <a className="anchor" href="/">
              Made to order{" "}
            </a>
            <a className="anchor" href="/">
              Size Guide{" "}
            </a>
            <a className="anchor" href="/">
              Delivery, Terms & Conditions{" "}
            </a>
            <a className="anchor" href="/">
              Care Guide{" "}
            </a>
            <a className="anchor" href="/">
              About Thia{" "}
            </a>
          </div>
        </div>

        <div className="w-full mt-28 md:mt-0  px-5 flex justify-center">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-center md:gap-x-80 md:items-center">

            <div className="  flex flex-col gap-1 w-1/2 justify-center md:items-start items-center">
              <h2 className="font-semibold">Our Adress</h2>
              <p>
                No.42 Ogbaga Road, <br /> Abakaliki, Ebonyi State
              </p>
            </div>
            

            <div className="flex   w-full justify-center items-center">
              <a href="#top" className=" mt-10 footerLogo h-40  flex flex-col items-center w-40"></a>
            </div>

            <div className=" my-9 md:my-auto">
              <div
                className="flex
             justify-center items-center gap-4 "
              >
                <a href="/">
                  {" "}
                  <FaFacebook />
                </a>{" "}
                <a href="/">
                  {" "}
                  <FaInstagram />
                </a>
                <a href="/">
                  {" "}
                  <FaXTwitter />
                </a>
                <a href="https://wa.link/dh7stq">
                  {" "}
                  <FaWhatsapp />
                </a>
              </div>
            </div>{" "}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
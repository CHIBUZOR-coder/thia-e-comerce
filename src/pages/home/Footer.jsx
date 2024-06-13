import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className=" mt-16 md:py-8 pt-5 px-5 flex flex-col gap-32 footer w-full  md:max-h-first  bg-primary">
        <div className="flex  flex-col justify-center items-center w-full  text-center">
          <h2 className="font-semibold">Links</h2>
          <div className="flex w-full md:w-1/2 h-20 md:h-20 text-center justify-center flex-wrap  gap-5 gap-x-7 md:gap-0 md:gap-x-8 px-20">
            {/* <a className="w-4" href="/">Made to order </a>
          <a className="w-20" href="/">Size Guide </a>
          <a className="w-4" href="/">Care Guide</a>
          <a className="w-4" href="/">About Thia</a>
          <a className="w-4" href="/"> Delivery, Terms & Conditions</a> */}
            <a className="anchor" href="/thia-e-comerce/Custom">
              Custom Fit{" "}
            </a>
            <a className="anchor" href="/thia-e-comerce/SizeGuide">
              Size Guide{" "}
            </a>
            <Link className="anchor" to="/thia-e-comerce/Terms">
              Delivery, Terms & Conditions{" "}
            </Link>
            <Link className="anchor" to="/thia-e-comerce/Care">
              Care Guide{" "}
            </Link>
            <a className="anchor" href="/thia-e-comerce/AboutThia">
              About Thia{" "}
            </a>
          </div>
        </div>

        <div className="w-full mt-32 md:-mt-36  flex justify-center">
          <div className="w-full relative flex flex-col md:flex-row items-center  justify-center  lg:gap-x-80 md:items-center">
            <div className="  w-1/2  items-center flex flex-col ">
              <div className=" md:w-1/2 md:absolute buttom-0 left-0">
                <h2 className="font-semibold">Our Adress</h2>
                <p className="flex w-full items-center justify-start">
                  No.42 Ogbaga Road, <br /> Abakaliki, Ebonyi State
                </p>
              </div>
            </div>
            <div className="flex   w-full justify-center items-center">
              <a
                href="/thia-e-comerce/"
                className=" mt-10 footerLogo h-32  flex flex-col items-center w-32"
              ></a>
            </div>
            <div className=" my-9 md:my-auto w-1/2">
              <div
                className="md:absolute buttom-0 right-0  flex
             justify-center items-center gap-8 "
              >
                <a
                  className="meiaContainer"
                  href="https://www.facebook.com/profile.php?id=100008455233553"
                >
                  {" "}
                  <FaFacebook className="media  bg-media text-white" />
                </a>{" "}
                <a className="meiaContainer" href="/">
                  {" "}
                  <FaInstagram className="media" />
                </a>
                <a className="meiaContainer" href="/">
                  {" "}
                  <FaXTwitter className="media   bg-black  text-white" />
                </a>
                <a className="meiaContainer" href="https://wa.link/dh7stq">
                  {" "}
                  <FaWhatsapp className="media  bg-green  text-white" />
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

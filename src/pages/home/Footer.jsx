import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col w-full gap-32 px-5   md:py-8 footer md:max-h-first bg-primary">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <h2 className="font-semibold">Links</h2>
          <div className="flex flex-wrap justify-center w-full h-20 gap-5 px-20 text-center md:w-1/2 md:h-20 gap-x-7 md:gap-0 md:gap-x-8">
            {/* <a className="w-4" href="/">Made to order </a>
          <a className="w-20" href="/">Size Guide </a>
          <a className="w-4" href="/">Care Guide</a>
          <a className="w-4" href="/">About Thia</a>
          <a className="w-4" href="/"> Delivery, Terms & Conditions</a> */}
            <a className="anchor" href="/Custom">
              Custom Fit{" "}
            </a>
            <a className="anchor" href="/SizeGuide">
              Size Guide{" "}
            </a>
            <Link className="anchor" to="/Terms">
              Delivery, Terms & Conditions{" "}
            </Link>
            <Link className="anchor" to="/Care">
              Care Guide{" "}
            </Link>
            <a className="anchor" href="/AboutThia">
              About Thia{" "}
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full mt-32 md:-mt-36">
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row lg:gap-x-80 md:items-center">
            <div className="flex flex-col items-center w-1/2 ">
              <div className="left-0  md:w-1/2 md:absolute buttom-0">
                <h2 className="font-semibold">Our Adress</h2>
                <p className="flex items-center justify-start w-full">
                  No.42 Ogbaga Road, <br /> Abakaliki, Ebonyi State
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <a
                href="/"
                className="flex flex-col items-center w-32 h-32 mt-10  footerLogo"
              ></a>
            </div>
            <div className="w-1/2  my-9 md:my-auto">
              <div
                className="right-0 flex items-center justify-center gap-8 md:absolute buttom-0 "
              >
                <a
                  className="meiaContainer"
                  href="https://www.facebook.com/profile.php?id=100008455233553"
                >
                  {" "}
                  <FaFacebook className="text-white media bg-media" />
                </a>{" "}
                <a className="meiaContainer" href="/">
                  {" "}
                  <FaInstagram className="media" />
                </a>
                <a className="meiaContainer" href="/">
                  {" "}
                  <FaXTwitter className="text-white bg-black media" />
                </a>
                <a className="meiaContainer" href="https://wa.link/dh7stq">
                  {" "}
                  <FaWhatsapp className="text-white media bg-green" />
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

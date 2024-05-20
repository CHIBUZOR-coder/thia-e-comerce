
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className=" mt-16  pt-5 px-5 flex flex-col gap-32 footer w-full h-product2 md:max-h-first  bg-primary">
        <div className="flex  flex-col justify-center items-center w-full  text-center">
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

        <div className="w-full mt-32 md:-mt-10   flex justify-center">
          <div className="w-full flex flex-col md:flex-row items-center  justify-center  lg:gap-x-80 md:items-center">
            <div className="  flex flex-col gap-1  lg:w-our justify-center md:items-start items-center">
              <h2 className="font-semibold">Our Adress</h2>
              <p className="flex items-center justify-center">
                No.42 Ogbaga Road, <br /> Abakaliki, Ebonyi State
              </p>
            </div>
            <div className="flex   w-full justify-center items-center">
              <a
                href="/thia-e-comerce/"
                className=" mt-10 footerLogo h-32  flex flex-col items-center w-32"
              ></a>
            </div>
            <div className=" my-9 md:my-auto">
              <div
                className="flex
             justify-center items-center gap-4 "
              >
                <a href="https://www.facebook.com/profile.php?id=100008455233553">
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
}
 
export default Footer;
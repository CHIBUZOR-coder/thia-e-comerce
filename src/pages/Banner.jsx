import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-primary   pt-20  md:pt-8 md:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row justify-between items-center gap-14 ">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light">Collections</h1>
          <p className="text-xl mt-2 mb-6">
            Explore And Shop Different Collections, You Deserve the best
          </p>
          <Link to={`/thia-e-comerce/ShopAll`} className="btn w-36">
            <FaShoppingBag /> Shop Now
          </Link>
        </div>
        <div className=" w-full md:w-80 h-big2 md:h-big thia "></div>
      </div>
    </div>
  );
};

export default Banner;

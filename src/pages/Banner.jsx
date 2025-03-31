import { FaShoppingBag } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 pt-20 bg-primary md:pt-8 lg:px-28">
      <div className="flex flex-col items-center justify-between py-28 md:flex-row gap-14 ">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light">Collections</h1>
          <p className="mt-2 mb-6 text-xl">
            Explore And Shop Different Collections, You Deserve the best
          </p>
          <Link to={`/ShopAll`} className="btn w-36">
            <FaShoppingBag /> Shop Now
          </Link>
        </div>
        <div className="w-full  md:w-80 h-big2 md:h-big thia"></div>
      </div>
    </div>
  );
};

export default Banner;

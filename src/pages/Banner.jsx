import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primary max-w-screen-2xl   pt-20  md:pt-36 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row justify-between items-center gap-14 ">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light">Collections</h1>
          <p className="text-xl mt-2 mb-6">
            Explore And Shop Different Collections, You Deserve the best
          </p>
          <button className="btn">
            <FaShoppingBag /> Shop Now
          </button>
        </div>
        <div className=" w-full md:w-80 h-big2 md:h-big thia "></div>
      </div>
    </div>
  );
};

export default Banner;

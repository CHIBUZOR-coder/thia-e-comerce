import { GoSearch } from "react-icons/go";
import Footer from "./Footer";

const SearchPage = () => {
  return (
    <div>
      <div className="md:px-8 px-4 ">
        <div className="w-full py-10 flex justify-center items-center text-4xl">
          <GoSearch className="h-5 w-5 text-black" />
          <input
            className="w-3/4 h-20 outline-none"
            type="text"
            placeholder=" What are you looking for"
          />
        </div>
        <hr />
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;

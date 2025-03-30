import { GoSearch } from "react-icons/go";
import Footer from "./Footer";
import { useRef, useEffect, useState } from "react";

const SearchPage = () => {
  const inputRef = useRef(null);
  const [fetchStart, setFetchStart] = useState(false);
  const [result, setResult] = useState(null);
  const [searchTem, setSearchTem] = useState("");
  const [error, setError] = useState(true);
  const [heightTrue, setheightTrue] = useState(false);

  const HandleFetchStart = async (value) => {
    try {
      let data;
      const res = await fetch("https://thia-backend.onrender.com/api/cloths", {
        method: "GET",
        headers: {
          "Content-Type": "Application/Json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch search results");
      }

      data = await res.json();
      setResult(
        data.filter((cloth) => {
          return (
            value &&
            cloth &&
            cloth.style &&
            cloth.style.toLowerCase().includes(value)
          );
        })
      );

      console.log(result);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
      setError("Failed to fetch search results. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    if (value) {
      setheightTrue(true);
    } else {
      setheightTrue(false);
    }
    setSearchTem(value); // Update search term state
    HandleFetchStart(value); // Perform the fetch
    if (value.length <= 0) {
      setheightTrue(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array to run this effect only once after the initial render

  return (
    <div>
      <div className="md:px-8 px-4 ">
        <div className="w-full md:py-10 py-4 flex justify-center items-center md:text-4xl">
          <GoSearch className="h-5 w-5 text-black" />
          <input
            className="w-3/4 h-20 outline-none"
            type="text"
            ref={inputRef}
            onChange={(e) => handleInputChange(e)}
            placeholder=" What are you looking for"
          />
        </div>
        <hr />
      </div>

      <div
        className={` w-full ${
          heightTrue ? " h-[500px] " : ""
        } overflow-y-scroll flex flex-col justify-center items-center  w-full `}
      >
        {result && result.length > 0 ? (
          result.map((product) => (
            <div
              key={product.id}
              className="result-item p-4 border-b w-full    bg-spinbg  flex justify-center items-center gap-4"
            >
              <p className="product-name text-[13px] md:text-[15px] font-semibold">
                {product.style}
              </p>
              <p className="product-name text-[13px] md:text-[15px]  font-semibold">
                {product.brand}
              </p>
              <p
                className="product-description text-gray-600 bg-cover bg-center bg-no-repeat w-[60px] h-[80px] border border-gray-300 rounded-md"
                style={{ backgroundImage: `url(${product.image})` }}
              ></p>

              <p className="product-price text-green-500">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">
            Make your search above
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;

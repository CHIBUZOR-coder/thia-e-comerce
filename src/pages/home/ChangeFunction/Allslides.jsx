import React, { useState, useEffect, useCallback } from "react";

export const Allslides = () => {
  const imageUrl = [
    "../public/images/coperateA.jpg",
    "../public/images/938.jpg",
    "../public/images/17533.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isPaused) {
      setCurrentSlide((prevSlide) =>
        prevSlide === imageUrl.length - 1 ? 0 : prevSlide + 1
      );
    }
  }, [imageUrl.length, isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageUrl.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className="relative w-full md:w-1/2 flex flex-col justify-center trans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="text-3xl py-6 md:mt-24 font-sans flex justify-center font-semibold">
        All
      </h1>

      <div className="carousel relative top-0 w-full overflow-hidden">
        <button
          className="absolute left-2 top-1/2 px-2 py-1 carocel-btn rounded-l"
          onClick={prevSlide}
        >
          Prev
        </button>
        {imageUrl.map((image, index) => (
          <div
            key={index}
            className={`slide h-big3 ${index === currentSlide ? "active" : "hidden"
              }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full" />

            <div className="absolute bottom-0.5 left-0 flex justify-center w-full">
              <a
                href="/"
                className="flex justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}

        <button
          className="absolute right-2 top-1/2 px-2 py-1 carocel-btn rounded-r"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>

      {/* Slide indicators application */}
      <div className="flex justify-center items-center bottom-0 mt-4">
        {imageUrl.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-3 w-3 rounded-full cursor-pointer ${index === currentSlide ? "bg-gray-900" : "bg-gray-400"
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Allslides;

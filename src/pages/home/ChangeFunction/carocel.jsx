import { useState, useEffect } from "react";


export const useFetch = (imageUrl) => {
  const interval = 5000; // Interval in milliseconds (e.g., 5000ms = 5 seconds)
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, images.length, interval]);

  const style = {
    backgroundImage: `url('${images[currentIndex]}')`,
    backgroundPosition: "center center",
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",
  };

  return { style };
}; 

export default useFetch;

import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook

export const Bridals = () => {
  const imageUrl = [
    "./images/thia2.jpg",
    "./images/thia3.jpg",
    "./images/bridal000.jpg",
    "./images/brialppp.jpg",
    "./images/brial666.jpg",
    "./images/brial111.jpg",
    "./images/brialppp.jpg",
    "./images/brialppp.jpg",
    "./images/bridal77.jpg",
    "./images/bridal3.jpg",
    "./images/bridal44.jpg",
    "./images/bridalooo.jpg",
  ];

  PreloadImages(imageUrl);

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object
  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href="/"
        className="flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Bridals
      </a>
    </div>
  );
};

export default Bridals;

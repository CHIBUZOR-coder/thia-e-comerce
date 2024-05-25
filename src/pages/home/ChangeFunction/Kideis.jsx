import { Link } from "react-router-dom";
import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook

const Kiddies = () => {
  const imageUrl = [
    "./images/kidaa.jpg",
    "./images/kid5.jpg",
    "./images/kisa.jpg",
    "./images/kidd.jpg",
    "./images/kidb.jpg",
    "./images/kid7.jpg",
  ];

  PreloadImages(imageUrl);

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Kidis"
        className="italic  flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Kiddies
      </Link>
    </div>
  );
};

export default Kiddies;

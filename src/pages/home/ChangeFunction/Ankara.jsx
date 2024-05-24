import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook

export const Ankara = () => {
  const imageUrl = [
    "./images/2923.jpg",
    "./images/ankara2.jpg",
    "./images/47625.jpg",
    "./images/5052.jpg",
  ];

  PreloadImages(imageUrl);
  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd trans flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href="/thia-e-comerce/Akara"
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Ankara
      </a>
    </div>
  );
};

export default Ankara;

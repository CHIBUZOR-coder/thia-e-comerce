import { PreloadImages } from "../../../Components/PreloadImages";
import useFetch from "./carocel"; // Import the custom hook

export const MatchingSet = () => {
  const imageUrl = [
    "./images/match1.jpg",
    "./images/match9.jpg",
    "./images/match7.jpg",
    "./images/match6.jpg",

    "./images/matchinSet.jpg",

    "./images/match4.jpg",
    "./images/match5.jpg",
    "./images/match.jpg",

    "./images/match8.jpg",
    "./images/match11.jpg",
    "./images/matcha.jpg",
  ];

  PreloadImages(imageUrl);

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href="/thia-e-comerce/Matchng"
        className="italic  flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Matching
      </a>
    </div>
  );
};

export default MatchingSet;

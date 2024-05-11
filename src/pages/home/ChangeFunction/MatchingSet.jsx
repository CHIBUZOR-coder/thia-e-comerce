import useFetch from "./carocel"; // Import the custom hook

export const MatchingSet = () => {
  const imageUrl = [
    "../public/images/match1.jpg",
    "../public/images/match9.jpg",
    "../public/images/match7.jpg",
    "../public/images/match6.jpg",
    "../public/images/match6.jpg",
    "../public/images/matchinSet.jpg",
    "../public/images/matchingset.jpg",
  ];


  //taking my time

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href="/"
        className="flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Matching
      </a>
    </div>
  );
};

export default MatchingSet;

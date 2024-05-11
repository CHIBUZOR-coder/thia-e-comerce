import useFetch from "./carocel"; // Import the custom hook

export const Bridals = () => {
  const imageUrl = [
    "../public/images/thia2.jpg",
    "../public/images/thia3.jpg",
    "../public/images/aabb.jpg",
    "../public/images/bridal.jpg",
  ];

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
        Bridals
      </a>
    </div>
  );
};

export default Bridals;

import useFetch from "./carocel"; // Import the custom hook

export const Ashoebi = () => {
  const imageUrl = [
    "./images/ashoebiii.jpg",
    "./images/style2.jpg",
    "./images/ashoebi2.jpg",
    "./images/style1.jpg",
  ];

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full flex justify-center trans items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href="/"
        className="flex justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Ashoebi
      </a>
    </div>
  );
};

export default Ashoebi;

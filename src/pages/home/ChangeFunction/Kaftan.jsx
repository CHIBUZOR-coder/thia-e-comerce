import useFetch from "./carocel"; // Import the custom hook

export const Kaftan = () => {
  const imageUrl = [
    "./images/kaftan6.jpg",
    "./images/kaftann.jpg",
    "./images/kaf.jpg",
    "./images/woman.jpg",
    "./images/kaf2.jpg",
    "./images/kaf3.jpg",
  ];

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
        Kaftan
      </a>
    </div>
  );
};

export default Kaftan;

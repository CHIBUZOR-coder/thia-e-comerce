import useFetch from "./carocel"; // Import the custom hook

const Kiddies = () => {
  const imageUrl = [


    "./public/images/kidaa.jpg",
    "./public/images/kid5.jpg",
    "./public/images/kisa.jpg",
    "./public/images/kidd.jpg",
    "./public/images/kidb.jpg",
    "./public/images/kid7.jpg",


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
        Kiddies
      </a>
    </div>
  );
};

export default Kiddies;

import useFetch from './ImageStyle'
import { useEffect } from 'react';
import {PreloadImages } from "../../../Components/PreloadImages";
import { Link } from 'react-router-dom';

export const Fourth = () => {
  const imageUrl = "./images/kaf.jpg";

  
    PreloadImages([imageUrl]); // Preload the image after the component mounts
  // Ensure the effect runs when imageUrl changes

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to="/thia-e-comerce/Kaftan/6"
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy
      </Link>
    </div>
  );
}

export default Fourth;

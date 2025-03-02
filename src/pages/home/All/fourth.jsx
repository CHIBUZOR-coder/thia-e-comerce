import useFetch from './ImageStyle'
import { useContext, useEffect } from 'react';
import {PreloadImages } from "../../../Components/PreloadImages";
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Components/DataContext';

export const Fourth = () => {
  

  const { Allproducts } = useContext(DataContext);

  const product = Allproducts.find((item) => item.style === "Simple Matching");
  // console.log(product);


  const imageUrl = product.image;

  
    PreloadImages([imageUrl]); // Preload the image after the component mounts
  // Ensure the effect runs when imageUrl changes

  const { style } = useFetch(imageUrl); // Call the custom hook to get the style object

  return (
    <div
      className="w-full childd  flex justify-center  items-end h-big3 "
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to={`/Kaftan/ ${product.id}`}
        className="flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white"
      >
        Buy
      </Link>
    </div>
  );
}

export default Fourth;

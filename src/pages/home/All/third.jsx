import useFetch from './ImageStyle'
import React, { useContext, useEffect } from 'react'
import { PreloadImages } from '../../../Components/PreloadImages'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../Components/DataContext'
import { useSelector } from 'react-redux'

export const Third = () => {
  // const imageUrl = "./images/bridal77.jpg";

  const { Allproducts } = useContext(DataContext)

  // const product = Allproducts.find(
  //   (item) => item.style === "Lace & Shifoon Mix"
  // );

  const product = useSelector(state =>
    state.cloth.data.filter(item => item.style === 'Lace & Shifoon Mix')
  )

  // console.log(product);
const imageUrl = product && product[0]?.image


  PreloadImages([imageUrl]) // Preload the image after the component mounts // Ensure the effect runs when imageUrl changes

  const { style } = useFetch(imageUrl) // Call the custom hook to get the style object

  return (
    <div
      className='w-full childd  flex justify-center  items-end h-big3 '
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        to={`/Bridals/${product[0]?.id}`}
        className='flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white'
      >
        Buy
      </Link>
    </div>
  )
}

export default Third

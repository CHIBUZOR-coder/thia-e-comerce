import useFetch from './ImageStyle' // Import the custom hook
import React, { useContext, useEffect, useState } from 'react'
import { PreloadImages } from '../../../Components/PreloadImages'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../Components/DataContext'
import { useSelector } from 'react-redux'

export const Fifth = () => {
  // const { Allproducts } = useContext(DataContext)

  // const product = Allproducts.find((item) => item.style === "Lace Special");
  const product = useSelector(state =>
    state.cloth.data.filter(item => item.style === 'Lace Special')
  )

  // console.log(product);

  // const imageUrl = `./images/${endpoint}.jpg`;
const imageUrl = product && product[0]?.image


  PreloadImages([imageUrl]) // Preload the image after the component mounts
  // Ensure the effect runs when imageUrl changes

  const { style } = useFetch(imageUrl) // Call the custom hook to get the style object

  return (
    <div
      className='w-full childd flex justify-center  items-end h-big3 '
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

export default Fifth

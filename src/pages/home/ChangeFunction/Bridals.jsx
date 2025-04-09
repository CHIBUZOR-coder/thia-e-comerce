import { useContext } from 'react'
import { PreloadImages } from '../../../Components/PreloadImages'
import useFetch from './carocel' // Import the custom hook
import { Link, useLocation } from 'react-router-dom'
import { DataContext } from '../../../Components/DataContext'
import { useSelector } from 'react-redux'

export const Bridals = () => {
  const BridalProducts = useSelector(state =>
    state?.cloth?.data.filter(item => item.brand === 'bridals')
  )

  const imageUrl = BridalProducts.map(item => item.image)
  // console.log(imageUrl);

  PreloadImages(imageUrl)

  const { style } = useFetch(imageUrl) // Call the custom hook to get the style object
  return (
    <div
      className='w-full childd flex justify-center trans items-end h-big3  '
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        to='/Bridls'
        className='italic  flex justify-center names  w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white'
      >
        Bridals
      </Link>
    </div>
  )
}

export default Bridals

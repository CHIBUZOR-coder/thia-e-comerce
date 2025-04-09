import { useContext } from 'react'
import { PreloadImages } from '../../../Components/PreloadImages'
import useFetch from './carocel' // Import the custom hook
import { Link, useLocation } from 'react-router-dom'
import { DataContext } from '../../../Components/DataContext'
import { useSelector } from 'react-redux'

export const Ankara = () => {
  const AnkaraProducts = useSelector(state =>
    state?.cloth?.data.filter(item => item.brand === 'Ankara')
  )

  const imageUrl = AnkaraProducts.map(item => item.image)

  PreloadImages(imageUrl)
  const { style } = useFetch(imageUrl) // Call the custom hook to get the style object

  return (
    <div
      className='w-full childd trans flex justify-center  items-end h-big3  '
      style={style} // Use the style object returned by the custom hook
    >
      <Link
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        to='/Akara'
        className='flex italic justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white'
      >
        Ankara
      </Link>
    </div>
  )
}

export default Ankara

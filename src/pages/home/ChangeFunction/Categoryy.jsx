

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Ankara from './Ankara'
import Ashoebi from './Ashoebi'
import Bridals from './Bridals'
import Coperate from './Coperate'
import Kiddies from './Kideis'
import MatchingSet from './MatchingSet'
import Kaftan from './Kaftan'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { useSelector } from 'react-redux'

const Category = () => {
  const cloth = useSelector(state => state?.cloth?.data)
  console.log('clothCat', cloth)

  // Declare the array of JSX elements
  const slides = useMemo(
    () => [
      <Ankara key='Ankara' />,
      <Ashoebi key='Ashoebi' />,
      <Coperate key='Coperate' />,
      <Kaftan key='Kaftan' />,
      <Bridals key='Bridals' />,
      <MatchingSet key='MatchingSet' />,
      <Kiddies key='Kiddies' />
    ],
    []
  )

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    )
  }, [slides])

  // Function to move to the previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    )
  }, [slides])

  // Automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && !isMouseOver) {
        nextSlide()
      }
    }, 30000) // Change slide every 10 seconds
    return () => clearInterval(intervalId) // Cleanup function to clear the interval
  }, [nextSlide, isPaused, isMouseOver]) // Re-run effect when nextSlide, isPaused, or isMouseOver changes

  // Event handlers for pause and continue on mouseover and mouseout
  const handleMouseOver = () => {
    setIsMouseOver(true)
    setIsPaused(true)
  }

  const handleMouseOut = () => {
    setIsMouseOver(false)
    setIsPaused(false)
  }

  return (
    <div className='w-full px-1 md:px-2 md:w-1/2 overflow-hidden md:m-0 mt-10 md:mt-5  md:py-16'>
      <h1 className={`text-3xl  py-2  md:py-7 font-sans flex justify-center font-semibold`}>
        Category
      </h1>

      {cloth.length > 0 ? (
        <>
          <div className='carsel w-full'>
            <div
              className='relative flex w-full   transition ease-in-out duration-1000'
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`w-full carocel transition  ease-in-out duration-1000 bg-slate-400 ${
                    index === currentSlide ? '' : 'hidden'
                  } flex justify-center   `}
                >
                  {React.cloneElement(slide, {
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover' // Ensure the image covers the container
                    }
                  })}
                </div>
              ))}
              {/* Manual navigation buttons */}
              <div
                onClick={prevSlide}
                className='absolute  top-1/2 left-3 transform -translate-y-1/2 px-2 py-1 carocel-btn rounded-full '
              >
                <IoIosArrowDropleft className='w-6 h-6 ' />
              </div>
              <div
                onClick={nextSlide}
                className='absolute top-1/2 right-3 transform -translate-y-1/2 px-2 py-1 carocel-btn rounded-full'
              >
                <IoIosArrowDropright className='w-6 h-6 ' />
              </div>
            </div>
          </div>
          {/* Navigation dots */}
          <div className='flex justify-center mt-4'>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`mx-1 h-3 w-3 rounded-full cursor-pointer ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className=' w-full h-[400px] lg:h-[600px] carsel shimmer'></div>
      )}
    </div>
  )
}

export default Category

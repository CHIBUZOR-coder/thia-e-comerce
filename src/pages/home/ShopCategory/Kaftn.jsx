import React, { useState, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useFetch from '../Usefetch'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import Footer from '../Footer'
import { PreloadImages } from '../../../Components/PreloadImages'
import { FaFilter, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataResolve from '../DataResolve'
import { DataContext } from '../../../Components/DataContext'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCloths } from '../../../features/cloth/clothSlice'
import { fetchCart } from '../../../features/cart/cartSlice'
import { cartActions } from '../../../features/cart/cartSlice'
import { addToCart } from '../../../features/cart/cartSlice'

const Kaftn = () => {
  const {
    error,
    isLoading,
    popStates,
    HandlePopCart,
    AddToCart,
    setCartRender
  } = useContext(DataContext)
  const user = JSON.parse(localStorage.getItem('user'))

  const [selectCategory, setSelectCategory] = useState('All')
  const [sortOptions, setSortOptions] = useState('Default')

  // Function to filter items based on the selected category
  const filterItems = category => {
    setSelectCategory(category)
  }

  const HandleAddToCart = async (prod, num, clothSize) => {
    if (user?.role) {
      console.log('Post fetching...')
      // console.log('Adding to cart:', { prod, num, clothSize })

      try {
        const result = await dispatch(
          addToCart({ prod, num, clothSize })
        ).unwrap()

        console.log('Server Response:', result)
        if (result.success === true) {
          const fetchCartData = await dispatch(fetchCart()).unwrap()
          console.log('fetchCart:', fetchCartData)
        }
      } catch (error) {
        console.error('Unexpected error:', error)
      }
    } else {
      dispatch(cartActions.addToCartLocal({ prod, num, clothSize }))
    }
  }

  const dispatch = useDispatch()
  const cloth = useSelector(state =>
    state?.cloth?.data.filter(item => item.brand === 'kaftan')
  )
  useEffect(() => {
    dispatch(fetchCloths())
  }, [])
  const items = cloth && cloth

  // New useEffect hook to handle filtering and sorting
  const filteredItems = useMemo(() => {
    if (!items) return []

    let sortedItems =
      selectCategory === 'All'
        ? [...items]
        : items.filter(item => item.category === selectCategory)

    switch (sortOptions) {
      case 'Low-High':
        return sortedItems.slice().sort((a, b) => a.price - b.price)
      case 'High-Low':
        return sortedItems.slice().sort((a, b) => b.price - a.price)
      default:
        return sortedItems
    }
  }, [sortOptions, selectCategory, items])

  // Sorting function
  const handleSortChange = option => {
    setSortOptions(option)
  }

  return (
    <div className='relative bg-primary'>
      <div className='px-6 py-10 mb-10'>
        <div className='flex justify-between py-6 items-start md:items-center'>
          <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-6 items-start md:items-center'>
            <span className='cursor-pointer' onClick={() => filterItems('All')}>
              All
            </span>
            <span
              className='cursor-pointer'
              onClick={() => filterItems('Suit')}
            >
              Suit
            </span>
            <span
              className='cursor-pointer'
              onClick={() => filterItems('Gown')}
            >
              Gown
            </span>

            <span
              className='cursor-pointer'
              onClick={() => filterItems('Fitted')}
            >
              Fitted
            </span>

            <span
              className='cursor-pointer'
              onClick={() => filterItems('Pinner Four')}
            >
              Pinner Four
            </span>
          </div>
          <div className='flex justify-center items-center'>
            <div className='bg-black p-2'>
              <FaFilter className='h-3 w-3 text-white' />
            </div>
            <select
              id='sort'
              onChange={e => handleSortChange(e.target.value)}
              value={sortOptions}
              className='cursor-pointer border-2 border-black'
            >
              <option value='Default'>Default</option>
              <option value='Low-High'>Low-High</option>
              <option value='High-Low'>High-Low</option>
            </select>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div>Loading Data...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className='relative bg-white hover:scale-105 transition ease-in-out duration-300 h-[700px] md:h-[550px] rounded-md shadow-md'
                >
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    to={`/Kaftan/${item.id}`}
                    className='h-[600px] md:h-[450px] flex justify-center items-center p-2 rounded-t-md w-full bg-blue-400'
                    style={{
                      background: `url(${item.image}) center center/ cover`
                    }}
                  ></Link>
                  <div className='mt-4 px-3 flex flex-col justify-center items-center gap-2'>
                    <div className='mt-2 w-full font-semibold flex justify-between'>
                      <p> {item.style} </p>
                      <button
                        onClick={e => {
                          HandlePopCart(item.id)
                          setCartRender(prev => !prev)
                          e.preventDefault()
                          HandlePopCart(item.id)
                          console.log('Isize:', item?.size)
                          HandleAddToCart(item, 1, item?.size)
                        }}
                        className={` ${
                          popStates[item.id] ? 'pop' : ''
                        }   cursor-pointer  bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 p-2`}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <div className='flex justify-between w-full items-center'>
                      <p className='italic'>{item.status}</p>
                      <p className='font-semibold'>${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='w-full bg-white py-5 px-3 flex justify-center items-center'>
        <div className='revLogo w-full md:w-1/2 h-64 md:h-56 rounded-sm shadow-lg'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Kaftn

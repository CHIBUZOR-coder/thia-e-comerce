import React, { useState, useEffect, useMemo, useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { FaPlus, FaStar } from 'react-icons/fa6'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import { cartActions } from '../features/cart/cartSlice'

import Footer from './home/Footer'
import { DataContext } from '../Components/DataContext'
import QuantityInput from './home/ShopCategory/Qantity'

const Shopp = ({ dataItems }) => {
  const { id } = useParams()
  useEffect(() => {
    if (dataItems && dataItems.length > 0) {
      localStorage.setItem('dataItems', JSON.stringify(dataItems))
    }
  }, [dataItems])

  console.log('Itemss:', dataItems)

  const [item, setItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedValue, setSelectedValue] = useState(null)
  const [Quantity, setQuantity] = useState(1)
  // const InputRef = useRef();
  const { AddToCart, HandlePop, pop } = useContext(DataContext)
  const dispatch = useDispatch()
  console.log(Quantity)
  const HandleAddCartPop = (prod, num, clothSize) => {
    HandlePop()
    if (user?.role) {
      dispatch(addToCart({ prod, num, clothSize }))
    } else {
      dispatch(cartActions.addToCartLocal({ prod, num, clothSize }))
    }
  }
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    console.log(pop)
  }, [pop])

  const InputCounter = event => {
    setQuantity(Number(event.target.value) || 1)
  }

  const sizeValues = useMemo(
    () => ({
      A: { value: 34 },
      B: { value: 36 },
      C: { value: 38 },
      D: { value: 40 },
      E: { value: 42 }
    }),
    []
  )

  const storedItem = JSON.parse(localStorage.getItem('dataItems'))

  useEffect(() => {
    const foundItem =
      storedItem && storedItem.find(item => item?.id === parseInt(id))
    if (foundItem) {
      setItem(foundItem) // Set the item once it's found
    }
  }, [id, dataItems])

  useEffect(() => {
    if (item) {
      const defaultSizeKey = Object.keys(sizeValues)[0] // Default to first size
      setSelectedSize(defaultSizeKey)
      setSelectedValue(sizeValues[defaultSizeKey].value)
    }
  }, [item, sizeValues])

  // useEffect(() => {
  //   localStorage.setItem("quantity", Quantity);
  // }, [Quantity]);
  const handleSizeSelect = sizeKey => {
    setSelectedSize(sizeKey) // Update the selected size key

    // Log the value associated with the selected key
    const selected = sizeValues[sizeKey]?.value
    setSelectedValue(selected)
    console.log(selectedValue)

    console.log(`Selected size value: ${selectedValue}`)
  }

  const handleIncrease = () => {
    console.log('Increase button clicked')
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  useEffect(() => {
    if (selectedSize) {
      console.log(`Selected size: ${selectedSize}`)
    }
  }, [selectedSize])

  useEffect(() => {
    console.log(`Selected val: ${selectedValue}`)
  }, [])

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  if (!item) {
    return <p>Loading...</p> // Show "item not found" message if the item is not found
  }

  // const itemWithQuantity = { ...item, quantity: Quantity, amount: 0 };
  const itemWithQuantity = {
    ...item,
    quantity: Quantity,
    amount: item.price * Quantity
  }

  return (
    <div>
      <div className='md:px-28 py-10 px-4'>
        <div className='flex flex-col md:flex-row w-full gap-5 md:gap-8'>
          <div
            className='h-[500px] w-3/4 rounded-sm'
            style={{
              background: `url(${item.image}) center center/cover`
            }}
          ></div>
          <div className='pr-0 md:pr-10'>
            <p className='text-3xl font-semibold'>{item.title}</p>

            <p className='my-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
              vel ratione atque eum iure placeat doloremque laborum et, quaerat
              ullam animi rem nam enim architecto quod perferendis numquam sed?
            </p>
            <span className='flex justify-start items-start gap-1 my-4 text-yellow-400'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>

            <p className='text-3xl md:text-xl text-red-500 font-semibold'>
              ${item.price}
            </p>

            <div className='w-1/2 my-4'>
              <div>
                <p className='font-semibold my-2'>Size</p>

                <div className='flex justify-start gap-2 items-center w-full'>
                  {Object.keys(sizeValues).map((sizeKey, index) => (
                    <span
                      key={index}
                      className={`sizeval ${
                        selectedSize === sizeKey ? 'active' : ''
                      }`}
                      onClick={() => handleSizeSelect(sizeKey)}
                      style={{
                        backgroundColor:
                          selectedSize === sizeKey ? '#EF4444' : '',
                        color: selectedSize === sizeKey ? '#ffffff' : '',
                        border: selectedSize === sizeKey ? '1px solid #000' : ''
                      }}
                    >
                      {sizeValues[sizeKey].value}
                    </span>
                  ))}
                </div>
              </div>
              <div className='w-full flex flex-col gap-2 my-6'>
                <label
                  htmlFor='quantity'
                  className='font-semibold flex justify-start items-center gap-2'
                >
                  <p> Quantity</p>
                  {/* <p className="text-red-600">{sizeError ? "Required" : ""}</p> */}
                </label>
                <QuantityInput
                  Quantity={Quantity}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                  InputCounter={InputCounter}
                />
              </div>
              <div>
                <span
                  className={`w-full ${
                    pop ? 'pop' : ''
                  } h-10 flex justify-center my-4 cursor-pointer items-center gap-3 bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-800 hover:bg-red-200 hover:text-red-500 px-4`}
                  onClick={() => {
                    HandleAddCartPop(
                      itemWithQuantity,
                      itemWithQuantity?.quantity,
                      selectedValue || 34
                    )
                    // console.log(itemWithQuantity);
                    // console.log(Quantity);
                  }}
                >
                  Add To Cart <FaPlus />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shopp

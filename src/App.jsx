import React, { useState, useRef, useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbarr'
import { FaDeleteLeft, FaScissors, FaXmark } from 'react-icons/fa6'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
// import { fetchUsers } from "./userSlice";
import { fetchCloths } from './features/cloth/clothSlice'
import { cartActions } from './features/cart/cartSlice'
import { deleteFromCart } from './features/cart/cartSlice'
import { fetchCart } from './features/cart/cartSlice'
import { ImCancelCircle } from 'react-icons/im'

import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser
} from 'react-icons/fa'
import DataProvider, { DataContext } from './Components/DataContext'
import { LuLoaderPinwheel } from 'react-icons/lu'
import Apply from './pages/home/Apply'

function App () {
  const [IsSearchOpen, SetIsSearchOpen] = useState(false)
  const [IsCartOpen, SetIsCarthOpen] = useState(false)
  const inputRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLinkOpen, setIsLinkOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  //Search Featues initialization below
  // const [fetchStart, setFetchStart] = useState(false);
  const [result, setResult] = useState(null)
  const [searchTem, setSearchTem] = useState('')
  const [error, setError] = useState(true)
  const [heightTrue, setheightTrue] = useState(false)
  const [rerender, setRerender] = useState(false)
  const [Total, setTotal] = useState(0)
  const [reload, setReload] = useState(useSelector(state => state.cart.render))
 

  // const []

  ////////End
  const location = useLocation()
  const textRef = useRef(null)
  const [isLoading, setIsloading] = useState(true)
  const {
    pop,

    HandlePop,

    isAdded,
    isUser
  } = useContext(DataContext)

  // useEffect(() => {
  //   console.log("AboutProducts:", CartItems);
  // }, [CartItems]);

  const user = JSON.parse(localStorage.getItem('user'))

  const [Products, setProducts] = useState([])

  // console.log("localTotal", localTotal);

  useEffect(() => {
    console.log('AppN:', reload)
  }, [])

  const [count, setCount] = useState(0)

  const triggerRender = prod => {
    setProducts(prod)
  }

  const HandleCheckout = async () => {
    const email = user && user.userInfo.email
    const bill = Total || 0

    console.log('Initiating payment with:', { email, bill })

    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/initiate_payment',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, bill })
        }
      )

      console.log('Response Status:', res.status)

      const text = await res.text() // Log raw response before JSON parsing
      console.log('Raw Response:', text)

      const data = JSON.parse(text)
      console.log('Parsed Data:', data)

      if (res.ok && data?.success) {
        console.log('Redirecting to payment page:', data.payment_link)
        window.location.href = data.payment_link
      } else {
        console.error('Payment Error:', data?.message || 'Unknown error')
      }
    } catch (error) {
      console.error('Fetch Error:', error.message)
    }
  }

  // useEffect(() => {
  //   console.log('isAdded:', isAdded)
  //   if (isAdded === true) {
  //     fetchCart()
  //   }
  // }, [isAdded])

  // useEffect(() => {
  //   console.log(' Products:', Products)
  // }, [Products])

  useEffect(() => {
    console.log('count has changed', count)
  }, [count])

  const HandleFetchStart = async value => {
    try {
      let data
      const res = await fetch('https://thia-backend.onrender.com/api/cloths', {
        method: 'GET',

        headers: {
          'Content-Type': 'application/Json'
        }
      })

      if (!res.ok) {
        throw new Error('Failed to fetch search results')
      }

      data = await res.json()
      setResult(
        data.filter(cloth => {
          return (
            value &&
            cloth &&
            cloth.style &&
            cloth.style.toLowerCase().includes(value)
          )
        })
      )

      console.log(result)
    } catch (error) {
      console.error('Error fetching search results:', error.message)
      setError('Failed to fetch search results. Please try again.')
    }
  }

  const handleInputChange = e => {
    e.preventDefault()

    const value = e.target.value
    if (value) {
      setheightTrue(true)
    } else {
      setheightTrue(false)
    }
    // setSearchTem(value); // Update search term state
    HandleFetchStart(value) // Perform the fetch
    if (value.length <= 0) {
      setheightTrue(false)
    }
  }

  const NavItems = [
    { tittle: 'Home', path: '/', id: '1' },
    { tittle: 'About', path: '/About', id: '2' },
    { tittle: 'Reviews', path: '/Reviews', id: '4' },
    { tittle: 'Contact', path: '/Contact', id: '5' },
    { tittle: 'Custom Fit', path: '/Custom', id: '6' },
    { tittle: 'Shop All', path: '/', id: '7' }
  ]
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLink = () => {
    setIsLinkOpen(!isLinkOpen)
  }

  const handleClose = () => {
    setIsMenuOpen(!setIsMenuOpen)
  }
  const handleCart = () => {
    console.log('Cart open')
    SetIsCarthOpen(!IsCartOpen)
    stopScreenScroll(!IsCartOpen)
  }

  const handleSearch = () => {
    console.log('open')
    SetIsSearchOpen(!IsSearchOpen)
    stopScreenScroll(!IsSearchOpen)

    if (!IsSearchOpen) {
      setTimeout(() => {
        inputRef.current.focus()
      }, 100) // Delay to ensure the modal is rendered
    }
  }

  // const stopScreenScroll = (isOpen) => {
  //   const body = document.body;
  //   const scrollBarWidth =
  //     window.innerWidth - document.documentElement.clientWidth;
  //   body.style.overflowY = isOpen ? "hidden" : "auto";
  //   body.style.paddingRight = isOpen ? `${scrollBarWidth}px` : "0";
  // };

  const stopScreenScroll = isOpen => {
    const body = document.body
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth

    if (isOpen) {
      // body.style.overflow = "hidden"; // Disable scrolling
      // body.style.overflowX = "hidden"; // Prevent horizontal scrolling
      // body.style.position = "fixed"; // Prevent mobile scrolling
      // body.style.paddingRight = `${scrollBarWidth}px`;
      body.style.overflowY = isOpen ? 'hidden' : 'auto'
      body.style.paddingRight = isOpen ? `${scrollBarWidth}px` : '0'
    } else {
      body.style.overflow = '' // Restore default
      body.style.overflowX = ''
      body.style.position = ''
      body.style.paddingRight = '0'
    }
  }

  const closeSearchModal = e => {
    if (e.target.classList.contains('coverDiv')) {
      SetIsSearchOpen(false)
      stopScreenScroll(false)
    }
  }

  const DoubleToggle = () => {
    handleClose()
    handleCart()
  }

  const closeCartModal = e => {
    if (e.target.classList.contains('coverDiv2')) {
      SetIsCarthOpen(false)
      stopScreenScroll(false)
    }
  }
  const HandleLoading = () => {
    setTimeout(() => {
      setIsloading(false)
    }, 3000)
  }
  useEffect(() => {
    HandleLoading()
  }, [])

  // const dispatch = useDispatch()
  // const CartItems = useSelector(state => state?.cart?.cartItems)
  const CartItems = JSON.parse(localStorage.getItem('cartItems')) || []
  console.log('CartItems', CartItems)

  const dispatch = useDispatch()

  const cloth = useSelector(state => state?.cloth?.data)
  // console.log('user:', user)

  const userAuth = JSON.parse(localStorage.getItem('userDetails'))
  const [DeleteLoading, setDeleteLoading] = useState(false)
  const HandleDeleteCart = async (e, itemId) => {
    e.preventDefault()
    console.log('itemId:', itemId)
    setDeleteLoading(prev => ({ ...prev, [itemId]: true }))

    if (user && user?.role) {
      try {
        const userId = userAuth && userAuth?.id
        console.log(userId)

        const result = await dispatch(
          deleteFromCart({ userId, itemId })
        ).unwrap()

        console.log('Server Response:', result)
        if (result.success === true) {
          const fetchCartData = await dispatch(fetchCart()).unwrap()
          console.log('fetchCart After delete:', fetchCartData)
          if (fetchCartData.success === true) {
            setDeleteLoading(prev => ({ ...prev, [itemId]: false }))
          }
        }
      } catch (error) {
        console.error('error:', error.message)
      }
    } else {
      console.log('deleting cart...')

      dispatch(cartActions.removeFromCartLocal({ itemId }))
    }

    setRerender(prev => !prev)
  }

  useEffect(() => {
    console.log('App has rerendred')

    const newTotal = CartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    )
    setTotal(parseFloat(newTotal.toFixed(2)))
  }, [CartItems])
  useEffect(() => {
    dispatch(fetchCloths())
  }, [])
  // console.log('cloth:', cloth)

  const [spin, setSpin] = useState(false)
  return (
    <div>
      {isLoading ? (
        <div className='flex min-h-[100vh] justify-center items-center'>
          <div className=' animate-spin flex justify-center items-center border-2 border-x-emerald-600 rounded-full h-36 w-36'>
            <div className=' border-2 h-[60%] w-[60%]  border-x-black rounded-full'></div>
          </div>
        </div>
      ) : (
        <div className='overflow-hidden w-full relative'>
          <DataProvider>
            <div className='relative min-h-screen'>
              <div className=' '>
                <Navbar
                  handleSearch={handleSearch}
                  handleCart={handleCart}
                  toggle={toggle}
                  closeCartModal={closeCartModal}
                  close={close}
                  triggerRender={triggerRender}
                />
              </div>
              <Outlet />
            </div>

            {/****************************************Apply Modal********************************** */}
            {/* ************************************************************************************** */}
          

            

            {/* smallscreen Cart header */}

            <div
              onClick={closeCartModal}
              className={`absolute  w-full top-0 left-0 min-h-[200vh] z-10 coverDiv2  ${
                IsCartOpen ? 'open' : ''
              } `}
            >
              {/* Cart section */}
              <div
                className={`search2 absolute w-full lg:w-[45%] h-[100vh] overflow-y-scroll  gap-3  top-0 right-0 flex flex-col justify-center  items-start bg-white  z-50 text-black  ${
                  IsCartOpen ? 'open' : 'closed'
                }  `}
              >
                <header className=' top-32 w-full px-4 bg-white md:px-28 headerrr md:z-40 z-10 '>
                  {/* Cart Navbar */}
                  {/* bg-blue-800 */}

                  <nav className='container mt-32 navcattt  md:mt-52  relative   flex justify-between md:justify-center  p-2 '>
                    <a
                      className=''
                      style={{ display: 'inline-block', width: 'fit-content' }}
                      href='/'
                    >
                      <div className='w-24 h-24 logo bg-slate-500'></div>
                    </a>
                    <div className='block md:hidden'>
                      <button onClick={toggle}>
                        {isMenuOpen ? (
                          <FaTimes className='w-6 h-6 text-black' />
                        ) : (
                          <FaBars className='w-6 h-6 text-black' />
                        )}
                      </button>
                    </div>
                  </nav>
                  <hr />

                  {/* Cart navbar  Menu conten small screen */}
                  <div className='block md:hidden '>
                    <ul
                      className={`bg-black relative flex justify-between text-white px-4 py-4 rounded ${
                        isMenuOpen && screenWidth < 760 ? '' : 'hidden'
                      }`}
                    >
                      <div className='  flex flex-col gap-4 '>
                        {NavItems.map(({ tittle, path }) => (
                          <li
                            key={tittle}
                            className={`decorate  no-underline hover:underline text-white transition ease-in-out duration-700 ${
                              location.pathname === path
                                ? 'active-nav-item'
                                : ''
                            }`}
                          >
                            {tittle === 'Shop All' ? (
                              <span className='relative  flex w-24 gap-1'>
                                {tittle}
                                <span
                                  onClick={toggleLink}
                                  className='text-red-500'
                                >
                                  {isLinkOpen ? (
                                    <FaTimes className='w-6 h-6 text-white' />
                                  ) : (
                                    <IoIosArrowDropright className='w-6 h-6 text-white' />
                                  )}
                                </span>
                                <ul
                                  className={`bg-white text-black absolute subnav -top-[209.5px]  flex flex-col justify-center w-36 gap-2 z-20 px-4 py-3 transition ease-in-out duration-700 ${
                                    isLinkOpen ? 'subopen' : 'hidden hide'
                                  }`}
                                >
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Akara'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Akara'
                                  >
                                    Ankara
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Ashebi'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Ashebi'
                                  >
                                    Ashoebi
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Coprate'
                                  >
                                    Coperate
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Kaftn'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Kaftn'
                                  >
                                    Kaftan
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Bridls'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Bridls'
                                  >
                                    Bridals
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Matchng'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Matchng'
                                  >
                                    Matching Set
                                  </Link>
                                  <Link
                                    className={`decorate2 ${
                                      location.pathname === '/Kidis'
                                        ? 'text-red-500'
                                        : ''
                                    }`}
                                    to='/Kidis'
                                  >
                                    Kiddies
                                  </Link>
                                </ul>
                              </span>
                            ) : (
                              <Link onClick={DoubleToggle} to={path}>
                                {tittle}
                              </Link>
                            )}
                          </li>
                        ))}
                      </div>

                      <div className=' flex flex-col gap-4'>
                        <div className='text-lg flex h-1/2.5 text-white sm:flex gap-4 md:hidden'>
                          <a href='/Login' className='flex items-baseline'>
                            <FaUser />
                            Account
                          </a>

                          {/* <span
                        onClick={DoubleToggle}
                        className="flex items-baseline"
                      >
                        <FaShoppingBag />
                        Shop
                      </span> */}
                        </div>

                        <div className='flex justify-end mt-3'>
                          <FaSearch
                            onClick={handleSearch}
                            className='w-5 h-5 text-white cursor-pointer md:hidden'
                          />
                        </div>
                      </div>
                    </ul>
                  </div>
                  {/* Cart navbar  Menu conten  */}
                </header>
                {/* Checkout */}
                <div className='p-2 w-full'>
                  <div className='w-full flex  justify-center items-center'>
                    {CartItems && CartItems?.length > 0 ? (
                      <div className='w-full flex flex-col gap-3'>
                        <div
                          id='tableContainer'
                          className='w-full flex flex-col overflow-auto max-h-[300px]'
                        >
                          <table className='table-auto text-gray-500 bg-primary   w-full'>
                            <thead className='sticky top-0'>
                              <tr className='bg-btn  top-0 left-0'>
                                <th className='w-[10%]'>S/n</th>
                                <th className=''>Style</th>
                                <th className=''>Size</th>
                                <th className=''>Quantity</th>
                                <th className=''>Amount</th>
                                <th className=''>Image</th>
                                <th className=''>Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              <>
                                {CartItems &&
                                  CartItems?.map((item, index) => (
                                    <tr key={index} className='font-semibold'>
                                      <td>{Number(index + 1)}</td>
                                      <td>{item?.style}</td>
                                      <td>
                                        {user && user.role
                                          ? item?.sizee
                                          : item.size}
                                      </td>
                                      <td>{item?.quantity}</td>
                                      <td>${item?.amount}</td>
                                      <td className='flex justify-center items-center'>
                                        <img
                                          src={item?.image}
                                          alt={item?.image}
                                          className='h-[50px] w-[40px] object-cover'
                                        />
                                      </td>
                                      <td>
                                        <button
                                          onClick={e => {
                                            HandleDeleteCart(
                                              e,
                                              user && user.role
                                                ? item?.id
                                                : item?.id
                                            )
                                          }}
                                          className='bg-subMain text-gray-500 rounded flexCol w-6 h-6 hover:bg-main transi flex justify-center items-center  border border-gray-500 delete   '
                                        >
                                          {DeleteLoading[item?.id] ? (
                                            <LuLoaderPinwheel className='animate-spin' />
                                          ) : (
                                            <MdDelete />
                                          )}
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                              </>
                            </tbody>
                          </table>
                          {CartItems && CartItems?.length > 0 ? (
                            <>
                              <div className='flex flex-col gap-1'>
                                <p className='text-adminTex text-small italic'>
                                  Total: {Total && Total}N
                                </p>
                                <p className='text-adminTex text-small italic'>
                                  Vat: 100N
                                </p>
                                <p className='text-adminTex text-small italic'>
                                  Bill: {Total + 100}N
                                </p>
                              </div>
                              <div className='w-full flex justify-center items-center'>
                                <button
                                  onClick={e => {
                                    e.preventDefault()
                                    HandlePop()
                                    HandleCheckout()
                                  }}
                                  className={`${
                                    pop ? 'pop' : ''
                                  } p-2  bg-red-600 w-1/2  hover:bg-red-700 transition text-center ease-in-out duration-500 text-white rounded-sm`}
                                >
                                  Checkout
                                </button>
                              </div>
                            </>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className='w-full flex justify-center items-center cartSection text-center '>
                        <span className='md:w-[200px] w-full  rounded-sm '>
                          You have no items in your shopping bag
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className='  flex justify-center items-center w-full   md:top-1/2  py-4 '>
                  <a
                    href={`/Allshops`}
                    className='w-1/2   h-[60px] flex justify-center py-5 items-center  hover:bg-red-700 transition text-center ease-in-out duration-500 bg-red-600 rounded-sm text-white '
                  >
                    {(CartItems && CartItems.length >= 0) ||
                    (Products && Products)
                      ? 'Shop More'
                      : 'Shop Our Collections'}
                  </a>
                </div>
              </div>
            </div>

            {/* --- */}

            {/* Cart navbar */}
            <div
              onClick={closeSearchModal}
              className={`absolute w-full top-0 bg-yellow-300 left-0 right-0 h-[100vh] z-50 md:z-10 coverDiv  ${
                IsSearchOpen ? 'open' : ''
              } `}
            >
              <div
                className={`search absolute w-full md:w-1/2 top-0 left-0  min-h-[100vh] overflow-auto z-30 text-black bg-white ${
                  result ? 'overflow-y-scroll' : ''
                } ${IsSearchOpen ? 'open' : 'closed'}  `}
              >
                <div className='absolute z-40 md:px-16 px-4 w-full md:top-[200px] top[50px] '>
                  <div className='flex justify-end w-full p-2 my-2'>
                    <span onClick={handleSearch}>
                      <FaXmark className='h-6 w-6 cursor-pointer' />
                    </span>
                  </div>
                  <p className='text-3xl font-semibold capitalize '>Search</p>

                  <div>
                    <div className='flex w-full justify-center items-center p-2 gap-5'>
                      <input
                        type='text'
                        onChange={e => handleInputChange(e)}
                        ref={inputRef}
                        className='w-full h-10 outline-none'
                        placeholder='What are you looking for?'
                      />

                      <Link onClick={handleSearch} to='/SearchPage'>
                        <IoIosArrowDropright className='rounded-full h-7 w-7' />
                      </Link>
                    </div>
                  </div>

                  <hr className='my-2' />

                  {/************************************* * Search *******************************************/}
                  <div
                    className={` w-full ${
                      heightTrue ? ' h-[200px] ' : ''
                    } overflow-y-scroll `}
                  >
                    {result && result.length > 0 ? (
                      result.map(product => (
                        <Link
                          to={`/${product?.brand}/${product?.id}`}
                          key={product.id}
                          onClick={handleSearch}
                          className='result-item p-4 border-b w-full    bg-spinbg  flex justify-between items-center gap-4'
                        >
                          <p className='product-name  font-semibold'>
                            {product.style}
                          </p>
                          <p className='product-name  font-semibold'>
                            {product.brand}
                          </p>
                          <p
                            className='product-description text-gray-600 bg-cover bg-center bg-no-repeat w-[60px] h-[80px] border border-gray-300 rounded-md'
                            style={{ backgroundImage: `url(${product.image})` }}
                          ></p>

                          <p className='product-price text-green-500'>
                            ${product.price}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <p className='text-center text-gray-500 mt-4'>
                        No results found.
                      </p>
                    )}
                  </div>
                  <div className='my-2'>
                    <p className='font-bold'>Help</p>
                  </div>

                  <div className='flex flex-col gap-2 mt-2'>
                    <span className='help'>Customer Care</span>
                    <Link to='/Terms' className='help'>
                      Delivery Information
                    </Link>
                    <Link to='/Care' className='help'>
                      Care Guide
                    </Link>
                    <a href='/FAQs' className='help'>
                      FAQs
                    </a>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </DataProvider>
        </div>
      )}
    </div>
  )
}

export default App

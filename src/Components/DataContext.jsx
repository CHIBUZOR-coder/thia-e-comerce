import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'

import DataResolve from '../pages/home/DataResolve'
import useLocalStorage from './UseLstorag'
// import { VerifyContext } from "./Verification";
import { useSelector, useDispatch } from 'react-redux'
import { fetchCloths } from '../features/cloth/clothSlice'

export const DataContext = createContext()
const DataProvider = ({ children }) => {
  const [lightMode, setlightMode] = useState(true)
  const [isAdded, setIsAdded] = useState(false)
  const [lightModWeb, setlightModeWeb] = useState(true)
  const [pop, setPop] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const isLogin = localStorage.getItem('isLogin')
  const [erroMess, setErrorMess] = useState(null)
  const { setItem, getItem, deleteItem } = useLocalStorage('userInfo')
  const [forceRender, setForceRender] = useState(false)

  const [appCart, setAppcart] = useState(null)
  const [sizeError, setSizeError] = useState(false)
  const [popStates, setPopStates] = useState({})

  // login
  const [state, setState] = useState({ count: 0 })
  const updateState = newValue => {
    setState(prev => ({ ...prev, ...newValue })) // Ensure a new object is created
  }

  const [isLoadingg, setIsLoadingg] = useState(false)

  const [message, setMessage] = useState('')
  const [errColor, setErrColor] = useState(null)
  const [cartRender, setCartRender] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCloths())
  }, [])
  const Data = useSelector(state => state?.cloth?.data)
  const user = JSON.parse(localStorage.getItem('user'))

  //*********************** */
  //Retrieving all stored data in loca storage for user authentification
  const IsAuthentified = getItem('isAuthentified') || false
  // console.log('Auth', IsAuthentified)
  const localCart = getItem('cartItems') ? getItem('cartItems') : []
  // console.log('localCratT', localCart)

  const [CartItems, SetCartItems] = useState(localCart ? localCart : [])
  useEffect(() => {
    setForceRender(prev => !prev) // Triggers re-render
  }, [CartItems])

  //*************************************** */
  //Removing all data  from local storage if token has expired
  const checkTokenExpiry = async () => {
    console.log('running TokenExpire check')

    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo')) // Get userInfo from localStorage
      if (!userInfo) {
        console.log('userInfo not found')
        return
      } else if (!userInfo.exp) {
        console.log('userInfo not yet expired')
        return
      }

      const expTime = userInfo.exp * 1000 // Convert exp from seconds to milliseconds
      const currentTime = Date.now() // Get current time in milliseconds

      // Check if the token is expired
      if (expTime < currentTime) {
        console.log('Token has expired. Clearing localStorage and cookies...')

        // Clear the localStorage items related to authentication
        // localStorage.removeItem("userInfo");
        // localStorage.removeItem("isAuthentified");
        // localStorage.removeItem("UsercartIems");
        localStorage.clear()
        // Send a request to the backend to clear the HTTP-only cookie
        const res = await fetch('https://thia-backend.onrender.com/clear-cookies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })

        let data

        if (res.ok) {
          data = await res.json() // Make sure to wait for the response
          console.log(data)
        } else {
          console.log('Failed to clear cookies. Server returned an error.')
        }

        // Optionally, perform other actions like redirecting the user to the login page
        // window.location.href = "/login"; // Redirect to login page, or show an alert, etc.
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  // useEffect(() => {
  //   console.log('cartRender:', cartRender)
  // }, [cartRender])

  // *********************************/
  //Authentification Retriver. It gets  all user details for uthentification and stores thwm in local storagre
  const Autentification = async () => {
    try {
      const res = await fetch('https://thia-backend.onrender.com/api/protectedRoute', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json' // Opt
          //
          // ional, depending on your API
        },
        credentials: 'include' // Include cookies in the request
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Authorization failed')
      }

      const data = await res.json()
      if (isLogin) {
        localStorage.setItem('userDetails', JSON.stringify(data.userInfo))
      }

      // Assuming setUserRole is defined
      // Assuming setUserDetails is defined
    } catch (error) {
      console.error('Error in Authentification:', error.message)
    }
  }

  // Optionally call the checkTokenExpiry function when the app starts
  useEffect(() => {
    if (isLogin) {
      checkTokenExpiry()
    }
  }, [])

  // const fetchCart = async () => {
  //   if (user?.isUser === true) {
  //     // Authenticated user
  //     try {
  //       const res = await fetch('https://thia-backend.onrender.com/api/getCart', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         credentials: 'include' // Keep it only here
  //       })
  //       const data = await res.json()

  //       if (res.ok) {
  //         console.log(data)
  //         // Save to local storage and update state

  //         SetCartItems(data.data) // Assuming data is an array of cart items
  //         localStorage.setItem('cartItems', JSON.stringify(data.data))
  //       } else {
  //         console.log('error', 'Could not get cart')
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch cart:', error)
  //     }
  //   } else {
  //     // Unauthenticated user
  //     // const localCart = localStorage.getItem("cartItems");
  //     if (localCart) {
  //       SetCartItems(JSON.parse(localCart))
  //     } else {
  //       SetCartItems([]) // Clear cart items if nothing is in local storage
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (isLogin) {
  //     fetchCart()
  //   }
  // }, [isLogin])

  //****************************************** */
  //Login form. it is called from login component when a user tries to login
  const handleLogin = async (email, password) => {
    setIsLoadingg(true)
    try {
      const response = await fetch('https://thia-backend.onrender.com/api/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      })

      let localCartItems
      const data = await response.json()
      if (response.ok) {
        console.log(data)

        localStorage.removeItem('UsercartIems')
        console.log('Login successful:', data.message)
        // UserLogALert(data.role);
        setMessage(data.message)

        setUser(data.role)
        setIsLogin(true)
        localStorage.setItem('isLogin', true)

        localCartItems = getItem('cartItems')

        if (localCartItems) {
          await Promise.all(
            localCartItems.products.map(async item => {
              const res = await fetch('https://thia-backend.onrender.com/api/addToCart', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  clothId: parseInt(item.product.id),
                  quantity: parseInt(item.quantity)
                }),
                credentials: 'include'
              })

              const cartdata = await res.json()

              if (res.ok) {
                console.log('cartdata', cartdata)
                deleteItem('cartItems')
                SetCartItems(cartdata.data)
                fetchCart()
              }
            })
          )
        }
      } else {
        console.log(data)
        setErrColor('text-red-600')
        setMessage(data.message)
      }
    } catch (error) {
      console.error('You are not a user.', error)
      setMessage(error.message)
      setErrorMess(error.message)
    } finally {
      setIsLoadingg(false)
      setTimeout(() => {
        setErrColor('')
        setMessage('')
      }, 4000) // Clear the message after 4 second
    }
  }

  //If user is logged in, then the infor is being retrived using the Authentification fetch fution. This is because i used http only cookies so the token sent to cookies cannot be acessed by javascript. i have to pass these info to the front end via the Authentification  fetch function
  useEffect(() => {
    if (user && user.role) {
      setTimeout(() => {
        console.log('calling Authentification')
        Autentification()
      }, 200)
    }
  }, [])

  //settting isAuthentified in local storage to confirm user authentification
  useEffect(() => {
    if (isLogin) {
      // setIsAuthenthified(true);
      setItem('isAuthentified', true)
    }
  }, [isLogin])

  // useEffect(() => {
  //   console.log('CartItems:', CartItems)
  // }, [CartItems]) // Dependency is CartItems to ensure this effect runs only when CartItems change

  // Dependencies: Products array should trigger when items are added/removed

  // useEffect(() => {
  //   console.log('cartcount', cartCount)
  // }, [cartCount])

  const HandleModeChangeWeb = () => {
    setlightModeWeb(!lightModWeb)
  }

  const HandlePopCart = id => {
    setPopStates(prev => ({ ...prev, [id]: true })) // Set only the clicked item's pop state
    setTimeout(() => {
      setPopStates(prev => ({ ...prev, [id]: false })) // Reset after 200ms
    }, 200)
  }

  const HandlePop = () => {
    setPop(true)
    setTimeout(() => setPop(false), 200)
  }

  const showHide = (success, trueText, falseText) =>
    success === 'true' ? <h2>{trueText}</h2> : <h2>{falseText}</h2>

  const {
    data: Allproducts,
    isLoading,
    error
  } = DataResolve('https://thia-backend.onrender.com/api/Cloths', 'GET')

  // console.log(Allproducts);

  const filterProductsByBrand = brand =>
    Allproducts?.filter(product => product.brand === brand) || []

  const AnkaraProducts = filterProductsByBrand('Ankara')
  const AhebiProducts = filterProductsByBrand('Ashoebi')
  //THE Inconsitency happend when i had the name Ashebi
  const CoperateProducts = filterProductsByBrand('coperate')
  const KaftanProducts = filterProductsByBrand('kaftan')
  const MatchingProducts = filterProductsByBrand('matching')

  const BridalProducts = filterProductsByBrand('bridals')
  const KidiesProducts = filterProductsByBrand('kidies')
  const Featured = filterProductsByBrand('featured')

  const cartEffect = setter => {
    setter(prev => !prev)
  }

  const AddToCart = async (prod, num, clothSize) => {
    if (!localDelete && !clothSize) {
      setSizeError(true)
      return
    }

    if (isUser) {
      HandlePop()
      try {
        const res = await fetch('https://thia-backend.onrender.com/api/addToCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clothId: prod.id,
            quantity: num,
            sizee: clothSize
          }),
          credentials: 'include'
        })

        const data = await res.json()
        if (res.ok) {
          SetCartItems(data.data) // Set updated cart items
          setIsAdded(true)
          fetchCart() // Fetch updated cart from server
          showHide(true, 'Product was added to cart successfully', 'false')
          console.log('Product was added to cart successfully')
        } else {
          showHide(false, 'Error', 'Product was not added to cart')
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      // Handling localStorage for anonymous users
      let storedCart = JSON.parse(localStorage.getItem('cartItems')) || {
        products: []
      }

      const existingItemIndex = storedCart?.products?.findIndex(
        item => item.product.id === prod.id && item.size === clothSize
      )

      if (existingItemIndex !== -1) {
        // If item exists, update the quantity and amount
        storedCart.products[existingItemIndex].quantity += num
        storedCart.products[existingItemIndex].amount =
          storedCart.products[existingItemIndex].quantity * prod.price
      } else {
        // If item doesn't exist, add new item
        storedCart.products.push({
          product: prod,
          quantity: num,
          size: clothSize,
          amount: prod.price * num
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(storedCart))
      setCartRender(true)

      SetCartItems(storedCart) // Update state
      showHide(true, 'Product was added to cart successfully', 'false')
      updateState(cartCount && cartCount)
      setForceRender(prev => !prev)
    }
  }

  const HandleDeleteCart = async productId => {
    if (isUser) {
      try {
        const res = await fetch('https://thia-backend.onrender.com/api/deleteCart', {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, itemId })
        })
        const data = await res.json()
        if (!res.ok) {
          console.log(data)
        }
        console.log(data)
        localStorage.setItem('cartItems', JSON.stringify(data.data))
        fetchCart()
      } catch (error) {
        console.log(error.message)
      }

      // authenticated done
    } else {
      // unauthenticated
      const storedCart = JSON.parse(localStorage.getItem('cartItems')) || {
        products: []
      }
      const itemIndex = storedCart.products.findIndex(
        item => item.product.id === productId
      )

      if (itemIndex >= 0) {
        storedCart.products.splice(itemIndex, 1)
        localStorage.setItem('cartItems', JSON.stringify(storedCart))
        SetCartItems(storedCart) // Update state
        showHide(true, 'Product was added to cart successfully', 'false')
        updateState(cartCount && cartCount)
        setForceRender(prev => !prev)
        // Update the state to reflect changes in local storage
      } else {
        console.log('error', 'Product not found in cart.')
      }
      // unauthenticated done
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <DataContext.Provider
      value={{
        AnkaraProducts,
        AhebiProducts,
        error,
        isLoading,
        CoperateProducts,
        KaftanProducts,
        MatchingProducts,
        BridalProducts,
        KidiesProducts,
        Allproducts,
        AddToCart,
        cartCount,
        sizeError,
        appCart,
        lightMode,

        IsAuthentified,
        isLogin,
        HandleModeChangeWeb,
        lightModWeb,
        showHide,
        handleLogin,
        pop,
        setErrorMess,
        popStates,
        HandlePopCart,
        HandlePop,
        errColor,
        message,
        user,
        isLoadingg,
        cartRender,
        setCartRender,
   
        CartItems,
        cartEffect,
        isAdded,
        setIsAdded,
        localCart,
        forceRender,
        state,
        Data,
        HandleDeleteCart
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider

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
  const [SingleApprentice, setSingleApprentice] = useState([])

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
        const res = await fetch(
          'https://thia-backend.onrender.com/clear-cookies',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          }
        )

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
    console.log('calling Authentification...')

    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/api/protectedRoute',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json' // Opt
            //
            // ional, depending on your API
          },
          credentials: 'include' // Include cookies in the request
        }
      )

      const data = await res.json()

      if (!res.ok) {
        console.log(data.message)
      } else {
        console.log(data)

        if (isLogin) {
          localStorage.setItem('userDetails', JSON.stringify(data.userInfo))
        }
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

  const [applicants, setApplicants] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('applicants')) || []
    } catch (error) {
      console.error('Error parsing localStorage data:', error)
      return []
    }
  })

  const [apprentice, setApprentice] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('apprentice')) || []
    } catch (error) {
      console.error('Error parsing localStorage data:', error)
      return []
    }
  })

  const [loading, setLoading] = useState(false)
  const HandelGetApplicants = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/getApplicants',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }
      )

      const data = await res.json()
      if (!res.ok) {
        console.log(data)
      } else if (data && data.data) {
        console.log(data)
        setApplicants(data.data)
        localStorage.setItem('applicants', JSON.stringify(data.data)) // Corrected this line
      }
    } catch (error) {
      console.error('Fetch error:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const HandelGetApprentice = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/getApprentice',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        }
      )
      const data = await res.json()
      if (!res.ok) {
        console.log(data)
      } else {
        console.log(data)
        setApprentice(data.data)
        localStorage.setItem('apprentice', JSON.stringify(data.data)) // Corrected this line
      }
    } catch (error) {
      // console.error('Fetch error:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const HandelGetSingleApprentice = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/getSingleApprentice',
        {
          method: 'GET',
          credentials: 'include'
        }
      )

      const data = await res.json()
      if (!res.ok) {
        console.log(data)
      } else {
        console.log(data)
        setSingleApprentice(data.data)
        localStorage.setItem('SingleApprentice', JSON.stringify(data.data)) // Corrected this line
      }
    } catch (error) {
      console.error('Fetch error:', error.message)
    } finally {
      setLoading(false)
    }
  }

  const isApprentice = JSON.parse(localStorage.getItem('userDetails'))
  useEffect(() => {
    if (isApprentice && isApprentice.role === 'Apprentice') {
      HandelGetSingleApprentice()
    }
  }, [])

  useEffect(() => {
    HandelGetApplicants()
    HandelGetApprentice()
  }, [])
  //****************************************** */
  //Login form. it is called from login component when a user tries to login
  const handleLogin = async (email, password) => {
    setIsLoadingg(true)
    try {
      const response = await fetch(
        'https://thia-backend.onrender.com/api/loginUser',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include'
        }
      )

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
              const res = await fetch(
                'https://thia-backend.onrender.com/api/addToCart',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    clothId: parseInt(item.product.id),
                    quantity: parseInt(item.quantity)
                  }),
                  credentials: 'include'
                }
              )

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

  const cartEffect = setter => {
    setter(prev => !prev)
  }

  const [DeleteLoading, setDeleteLoading] = useState(false)

  const HandleDeleteApplicant = async id => {
    setDeleteLoading(prev => ({ ...prev, [id]: true }))

    // e.preventDefault()
    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/deleteApplicants',
        {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        }
      )
      const data = await res.json()
      if (!res.ok) {
        setDeleteLoading(prev => ({ ...prev, [id]: false }))
        console.log('datetedResult:', data)
      } else {
        setDeleteLoading(prev => ({ ...prev, [id]: false }))
        console.log(data)
        HandelGetApplicants()
      }
    } catch (error) {
      setDeleteLoading(prev => ({ ...prev, [id]: false }))
      console.log(error.message)
    }

    // authenticated done
  }

  useEffect(() => {
    const storedMode = localStorage.getItem('lightmode') === "true"
    setlightMode(storedMode) 
  }, [])

  const HandleToggleLightMode = () => {
    if (lightMode && lightMode === true) {
      setlightMode(false)
      localStorage.setItem('lightmode', false)
    } else {
      setlightMode(true)
      localStorage.setItem('lightmode', true)
    }
  }

  return (
    <DataContext.Provider
      value={{
        cartCount,
        sizeError,
        appCart,
        lightMode,
        Autentification,
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
        apprentice,
        CartItems,
        cartEffect,
        isAdded,
        setIsAdded,
        localCart,
        forceRender,
        state,
        Data,
        loading,
        applicants,
        DeleteLoading,
        HandelGetApprentice,
        HandleDeleteApplicant,
        HandleToggleLightMode
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider

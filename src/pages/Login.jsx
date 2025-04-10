import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../Components/DataContext'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../features/user/userSlice'
import { UserAuthentification } from '../features/user/userSlice'
import { use } from 'react'
import Footer from './home/Footer'
import { LuLoaderPinwheel } from 'react-icons/lu'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const [isLoading, setIsloading] = useState(false)

  const { HandlePop, pop, errColor, isLoadingg } = useContext(DataContext)

  const user = useSelector(state => state.user)
  console.log(user)

  const dispatch = useDispatch()
  useEffect(() => {
    if (user?.user?.success === true) {
      // console.log(user);
      const redirectTimeout = setTimeout(() => {
        navigate(user?.user?.role === 'ADMIN' ? '/Admin' : '/')
        // window.location.href = user === "ADMIN" ? "/Admin" : "/";
      }, 2000)
      return () => clearTimeout(redirectTimeout)
    }
  }, [user, navigate])

  const logError = useSelector(state => state.user.error)
  // console.log('error', error)

  const handleLogin = async () => {
    setIsloading(true)
    const result = await dispatch(loginUser({ email, password })).unwrap()
    console.log('logResult', result)

    if (result.success === true) {
      setIsloading(false)
      const authUserData = await dispatch(UserAuthentification()).unwrap()
      console.log('authUserData:', authUserData)
      HandelGetApprentice()

      setMessage(result.message)
    } else {
      setMessage(result.message)
      console.log('error')
    }
  }
  // const message =
  //   user?.user?.success === true ? user?.user?.message : user?.user?.error || ''

  return (
    <div>
      <div
        className="
 flex flex-col min-h-screen
 justify-start gap-5 items-center bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1732998862/admin_h2sd6s.jpg')] bg-center bg-cover"
      >
        <div className='flex flex-col mt-14 justify-center items-center gap-4 w-full'>
          <h2 className='text-2xl font-semibold'>Login User</h2>

          <div className='formLight w-[85%] md:w-[60%] p-5 md:p-10 rounded-sm border-2 border-formBorder'>
            {user && (
              <h2
                className={`${
                  user?.errColor ? 'text-red-700' : ''
                } text-center font-bold mb-4`}
              >
                {message || logError}
              </h2>
            )}

            {isLoading && (
              <div
                className={`${
                  isLoading && !logError ? 'show' : 'hide'
                } p-3  z-20 my-2  animate flex justify-center items-center font-semibold text-gray-500`}
              >
                <p className='text-2xl font-semibold '>Loging in</p>
                <LuLoaderPinwheel className='h-10 w-10 animate-spin' />
              </div>
            )}
            <form className='w-full flex flex-col justify-center items-center gap-5'>
              <div className='w-[100%] md:w-[70%] flex flex-col gap-4'>
                <input
                  className='w-full p-2 rounded-tl-md rounded-br-md bg-input outline-none'
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                    console.log(email)
                  }}
                  required
                />
                <input
                  className='w-full p-2 rounded-tl-md rounded-br-md bg-input outline-none'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className={`addRemovebtnLightMode_AddProduct p-2 rounded-md font-semibold ${
                  pop ? 'pop' : ''
                } hover:bg-trans2 hover:text-white transition ease-in-out duration-500`}
                onClick={e => {
                  e.preventDefault()
                  HandlePop()
                  handleLogin()
                }}
                type='submit'
                disabled={user?.isLoading} // Disable button while loading
              >
                Login
              </button>

              <div className='flex flex-col gap-3 md:gap-0'>
                <div className='w-full flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0'>
                  <p>Dont have an account?</p>
                  <Link className='text-blue-500' to={'/Signup'}>
                    Create Account
                  </Link>
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                  <p> Forgot your</p>
                  <Link className='text-blue-500' to={'/accountrecovery'}>
                    password
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Login

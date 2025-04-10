import { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DataResolve from './home/DataResolve'
import { DataContext } from '../Components/DataContext'
import { LuLoaderPinwheel } from 'react-icons/lu'

const ResetPassword = () => {
  const [newPassword, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const { token } = useParams()

  const { HandlePop, pop, handleLogin, UserInfo, IsAuthentified } =
    useContext(DataContext)
  const navigate = useNavigate()

  const HandleSignup = async () => {
    setIsloading(true)

    if (!password) {
      console.log('Password is required!')
      setFeedback('Password is required!')
      setTimeout(() => {
        setFeedback('')
      }, 2000)
      return
    }

    if (!confirmPassword) {
      console.log('Please confirm your password!')
      setFeedback('Please confirm your password!')
      setTimeout(() => {
        setFeedback('')
      }, 2000)
      return
    }

    if (newPassword !== confirmPassword) {
      console.log('Password does not match')
      setFeedback('Password does not match,,')
      setTimeout(() => {
        setFeedback('')
      }, 2000)
      return
    }

    try {
      const res = await fetch(
        `https://thia-backend.onrender.com/resetPassword/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ newPassword, confirmPassword}) // Do NOT manully set Content-Type
        }
      )

      //Amakababe00$

      if (!res.ok) {
        const errorData = await res.json()
        setIsloading(false)

        console.log('Error:', errorData.message)
        setFeedback(errorData.message)
        setTimeout(() => {
          setFeedback('')
        }, 2000)

        return
      }

      const data = await res.json()
      console.log(data)

      setIsloading(false)
      setFeedback(data.message)

      setTimeout(() => {
        setFeedback('')
      }, 4000)

      navigate('/Login')
    } catch (error) {
      console.error('An error occurred:', error.message)
      setIsloading(false)
    }
  }

  return (
    <div
      className="w-full flex justify-center items-center p-8 min-h-[100vh] bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1732998862/admin_h2sd6s.jpg')] bg-cover bg-center relative
"
    >
      {feedback && (
        <div className='w-full  absolute top-[12%]  flex justify-center items-center'>
          <div
            className={`${
              feedback ? 'show' : 'hide'
            } p-2  z-20 w-1/2  animate font-semibold text-alert bg-gray-500 flex justify-center items-center`}
          >
            <p>{feedback && feedback}</p>
          </div>
        </div>
      )}

      <div className='formLight w-[100%] md:w-[60%] py-4 px-0  md:py-10 md:px-10 rounded-sm border-2 border-formBorder '>
        <form
          onSubmit={e => {
            e.preventDefault()
            HandleSignup()
          }}
          className='w-full  flex flex-col justify-center items-center p-2 gap-4'
        >
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setPassword(e.target.value)
                console.log(password);
              }}
              className='createAcctInput'
              type='password'
              required
              name='password'
              id='password'
              placeholder='password'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setConfirmpassword(e.target.value)
                 console.log(confirmPassword);
              }}
              className='createAcctInput'
              type='password'
              required
              name='confirmPassword'
              id='confirmPassword'
              placeholder='confirmPassword'
            />
          </div>

          {isLoading && (
            <div className='w-full flex justify-center items-center'>
              <div
                className={`${
                  isLoading ? 'show' : 'hide'
                } p-3  z-20  animate flex justify-center items-center gap-2 font-semibold  text-alert bg-gray-500`}
              >
                <p>Loging in</p>
                <LuLoaderPinwheel className='h-6 w-6 animate-spin' />
              </div>
            </div>
          )}

          <div className='w-full flex justify-center items-center mt-4'>
            <button
              className={`addRemovebtnLightMode_AddProduct p-2 w-[80%] rounded-md font-semibold ${
                pop ? 'pop' : ''
              } hover:bg-trans2 hover:text-white transition ease-in-out duration-500`}
              onClick={HandlePop}
              type='submit'
              // disabled={isLoading} // Disable button while loading
            >
              {/* {isLoading ? "Logging in..." : "Login"} */}
              Submit
            </button>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='w-full flex justify-center items-center gap-2'>
              <p>Back to login</p>
              <Link className='text-blue-500' to={'/login'}>
                Login
              </Link>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
              <p> Forgot your</p>
              <Link className='text-blue-500' to={'/accountrecovery'}>
                password
              </Link>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
              <Link className='text-blue-500' to={'/accountrecovery'}>
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword

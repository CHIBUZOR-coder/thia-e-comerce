import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataResolve from './home/DataResolve'
import { DataContext } from '../Components/DataContext'
import { LuLoaderPinwheel } from 'react-icons/lu'

const AccountRecovery = () => {
  const [email, setEmail] = useState('')

  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const { HandlePop, pop, handleLogin, UserInfo, IsAuthentified } =
    useContext(DataContext)
  const navigate = useNavigate()

  const HandleSignup = async () => {
    setIsloading(true)

    if (!email) {
      console.log('Email is required!')
      return
    }

    console.log(email)

    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/accountRecovery',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
          // Do NOT manually set Content-Type
        }
      )

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
      }, 2000)
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

      <div className='formLight w-[70%] md:w-[60%] p-10 rounded-sm border-2 border-formBorder '>
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
                setEmail(e.target.value)
                // console.log(email);
              }}
              type='text'
              className='createAcctInput'
              required
              name='email'
              id='email'
              placeholder='email'
            />
          </div>

          {/* 
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setPassword(e.target.value)
                // console.log(password);
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
                // console.log(confirmPassword);
              }}
              className='createAcctInput'
              type='password'
              required
              name='confirmPassword'
              id='confirmPassword'
              placeholder='confirmPassword'
            />
          </div> */}

          {isLoading && (
            <div className='flex justify-center items-center w-full'>
              <div
                className={`${
                  isLoading ? 'show' : 'hide'
                } p-3  z-20  animate  font-semibold text-alert bg-gray-500`}
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
        </form>
      </div>
    </div>
  )
}

export default AccountRecovery

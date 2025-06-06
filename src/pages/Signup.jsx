import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DataResolve from './home/DataResolve'
import { DataContext } from '../Components/DataContext'
import { LuLoaderPinwheel } from 'react-icons/lu'

const Signup = () => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [postal_code, setPostal_code] = useState('')
  const [country, setCountry] = useState('')
  const [post, setPost] = useState(false)
  const [image, setImage] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const { HandlePop, pop, handleLogin, UserInfo, IsAuthentified } =
    useContext(DataContext)
  const navigate = useNavigate()

  const HandleSignup = async () => {
    setIsloading(true)

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.log('Please fill in all required fields.')
      return
    }

    if (password !== confirmPassword) {
      console.log('Passwords do not match!')
      return
    }

    try {
      const formData = new FormData()
      formData.append('firstName', firstName)
      formData.append('lastName', lastName)
      formData.append('email', email)
      formData.append('phone', phone)
      formData.append('password', password)
      formData.append('confirmPassword', confirmPassword)
      formData.append('address', address)
      formData.append('address2', address2)
      formData.append('city', city)
      formData.append('postal_code', postal_code)
      formData.append('country', country)
      if (image) {
        formData.append('image', image)
      }

      const res = await fetch(
        'https://thia-backend.onrender.com/api/registerUser',
        {
          method: 'POST',
          body: formData // Do NOT manually set Content-Type
        }
      )
      const data = await res.json()

      if (!res.ok) {
        setIsloading(false)

        console.log('Error:', data.message)
        setFeedback(data.message)
        setTimeout(() => {
          setFeedback('')
        }, 4000)
      } else {
        console.log(data)

        localStorage.removeItem('UsercartItems')
        setIsloading(false)
        setFeedback(data.message)

        setTimeout(() => {
          setFeedback('')
        }, 4000)
      }

      // setTimeout(() => {
      //   navigate('/Login')
      // }, 2000)
    } catch (error) {
      console.error('An error occurred:', error.message)
      setIsloading(false)
    }
  }

  return (
    <div
      className="w-full flex justify-center items-center p-2  md:p-8 min-h-[100vh] bg-[url('https://res.cloudinary.com/dtjgj2odu/image/upload/v1732998862/admin_h2sd6s.jpg')] bg-cover bg-center relative
"
    >
      {feedback && (
        <div
          className={`${
            feedback ? 'show' : 'hide'
          } p-2  z-20 fixed top-[5%] w-full  animate flex justify-center items-center font-semibold`}
        >
          <div className=' text-alert bg-gray-500 p-3'>
            <p>{feedback && feedback}</p>
          </div>
        </div>
      )}

      <div className='formLight w-[90%] md:w-[60%] py-4 px-0  md:py-10 md:px-10 rounded-sm border-2 border-formBorder '>
        <form
          onSubmit={e => {
            e.preventDefault()
            HandleSignup()
          }}
          className='w-full b  flex flex-col justify-center items-center p-2 gap-4'
        >
          <div className='createAcctInputDiv '>
            <input
              onChange={e => {
                e.preventDefault()
                setFirstname(e.target.value)
                // console.log(firstname);
              }}
              className='createAcctInput'
              type='text'
              required
              name='firstname'
              id='firstname'
              placeholder='First Name'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setLastname(e.target.value)
                // console.log(lastname);
              }}
              className='createAcctInput'
              type='text'
              required
              name='lastname'
              id='lastname'
              placeholder='Last Name'
            />
          </div>
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
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setPhone(e.target.value)
                // console.log(phone);
              }}
              type='text'
              className='createAcctInput'
              required
              name='phone'
              id='phone'
              placeholder='phone'
            />
          </div>
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
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setAddress(e.target.value)
                // console.log(adress);
              }}
              className='createAcctInput'
              type='text'
              name='adress'
              required
              id='adress'
              placeholder='Billing Adress'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setAddress2(e.target.value)
                // console.log(adress2);
              }}
              className='createAcctInput'
              type='text'
              name='adress2'
              id='adress2'
              placeholder='Delivery Adress'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setCity(e.target.value)
                // console.log(city);
              }}
              className='bg-red-400 w-full createAcctInput'
              type='text'
              name='city'
              id='city'
              placeholder='city'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setPostal_code(e.target.value)
                // console.log(postal_code);
              }}
              className='createAcctInput'
              type='text'
              name='postal_code'
              id='postal_code'
              placeholder='postal code'
            />
          </div>
          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setCountry(e.target.value)
                // console.log(country);
              }}
              className=' createAcctInput'
              type='text'
              name='country'
              id='country'
              placeholder='country (optional if you are not in Nigeria)'
            />
          </div>

          <div className='createAcctInputDiv'>
            <input
              onChange={e => {
                e.preventDefault()
                setImage(e.target.files[0])

                // console.log(country);
              }}
              className=' createAcctInput'
              type='file'
              name='image'
              id='image'
              placeholder='country (optional for non Nigerians)'
            />
          </div>

          {isLoading && (
            <div
              className={`${
                isLoading ? 'show' : 'hide'
              } w-full flex justify-center items-center  `}
            >
              <div className=' flex justify-center items-center p-3 animate font-semibold text-alert bg-gray-500'>
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

          <div className='flex flex-col gap-3 md:gap-0'>
            <div className='w-full flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0'>
              <p>Already have an account?</p>
              <Link className='text-blue-500' to={'/Login'}>
                Login
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
  )
}

export default Signup

import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LuLoaderPinwheel } from 'react-icons/lu'
import { DataContext } from '../../Components/DataContext'

const Apply = () => {
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

  const HandleSignup = async () => {
    setIsloading(true)

    if (!firstName || !lastName || !email || phone ) {
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
      formData.append('address', address)
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

      localStorage.removeItem('UsercartItems')
      setIsloading(false)
      setFeedback(data.message)

      setTimeout(() => {
        setFeedback('')
      }, 2000)
      // setTimeout(() => {
      //   navigate('/Login')
      // }, 2000)
    } catch (error) {
      console.error('An error occurred:', error.message)
      setIsloading(false)
    }
  }

  return (
    <div className='p-5'>
      <div className='formLight2 w-full   rounded-lg border-2 border-formBorder p-2 '>
        <div className='w-full flex justify-center items-center'>
          <p className=' text-xl font-semibold text-gray-500 py-2'>
            Become A Simstress
          </p>
        </div>
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
            <p className='text-gray-500 font-semibold'>Profile picture</p>
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

export default Apply

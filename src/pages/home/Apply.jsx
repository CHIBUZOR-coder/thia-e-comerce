import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LuLoaderPinwheel } from 'react-icons/lu'
import { DataContext } from '../../Components/DataContext'

const Apply = () => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [address, setAddress] = useState('')

  const [image, setImage] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const { HandlePop, pop, handleLogin, UserInfo, IsAuthentified } =
    useContext(DataContext)

  const HandleSignup = async () => {
    setIsloading(true)

    if (
      !(firstName && firstName) ||
      !(lastName && lastName) ||
      !(email && email) ||
      !(phone && phone)
    ) {
      console.log('Please fill in all required fields.')
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
        'https://thia-backend.onrender.com/registerApplicants',
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
    <div className=' p-1 md:p-5 w-full'>
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
                console.log(firstName)
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
                console.log(lastName)
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
                console.log(email)
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
                console.log(phone)
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
                setAddress(e.target.value)
                console.log(address)
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

          {isLoading ? (
            <div className='rounded-full text-gray-500'>
              <LuLoaderPinwheel className='h-12 w-12 animate-spin' />
            </div>
          ) : feedback ? (
            <p className='font-semibold text-gray-500'>{feedback && feedback}</p>
          ) : (
            ''
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

export default Apply

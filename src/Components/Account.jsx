import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Components/DataContext'
import { CiEdit } from 'react-icons/ci'
import { SlLogout } from 'react-icons/sl'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

import { useNavigate } from 'react-router-dom'
import { LuLoaderPinwheel } from 'react-icons/lu'
import Footer from '../pages/home/Footer'
import { ImCancelCircle } from 'react-icons/im'

const Account = () => {
  const [manageAccount, setMange] = useState(false)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [lightModeA, setlightMode] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLink, setIsLink] = useState(false)
  const [AccountSumary, setAccountSumary] = useState(true)
  const [Orders, setOrders] = useState(false)
  const [Address, setAddress] = useState(false)
  const [Billingadres, setBAddres] = useState('')
  const [BillAdressChange, setBillingChange] = useState(false)

  const [address, setAddres] = useState('')
  const [HomeAdressChange, setHomeAdresChange] = useState(false)

  const [show, setShow] = useState('Your Account Summary')
  const [newEmail, setEmail] = useState('')
  const [changeEmail, setChangeEmail] = useState(false)

  const [image, setImage] = useState(null)
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [feedback, setFeedBack] = useState('')
  const [toggleApprentice, setToggleApprentice] = useState(false)

  const { HandlePop, pop, Autentification } = useContext(DataContext)

  // const HandleToggleChange = () => {
  //   setMange(!manageAccount);
  // };

  useEffect(() => {
    console.log('billC:', BillAdressChange)
  }, [BillAdressChange])

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('userDetails'))
  const apprentice = JSON.parse(localStorage.getItem('SingleApprentice'))
  console.log(user)

  const acctLinks = [
    {
      id: 1,
      tittle: 'Your Account Summary'
    },
    {
      id: 2,
      tittle: 'Your Address'
    },
    {
      id: 3,
      tittle: 'Your Orders'
    }
  ]

  const HandleUpdateProfile = async e => {
    setIsloading(true)
    const Firstname = firstname && firstname
    const LastName = lastname && lastname
    const Email = newEmail && newEmail
    const Image = image && image
    const BillingAdress = Billingadres && Billingadres
    const HomeAdress = address && address
    const Password = password && password
    const id = user && user?.id
    const formData = new FormData()

    formData.append('firstname', Firstname)
    formData.append('lastname', LastName)
    formData.append('image', Image)
    formData.append('newEmail', Email)
    formData.append('password', Password)
    formData.append('address', HomeAdress)
    formData.append('address2', BillingAdress)
    formData.append('Id', id)

    // formData.append("email", Email);
    console.log('data:', formData)

    try {
      const res = await fetch(
        'https://thia-backend.onrender.com/updateProfile',
        {
          method: 'PUT',
          body: formData
        }
      )

      const data = await res.json()
      if (!res.ok) {
        console.log(data)
        setFeedBack(data.message)
      } else {
        console.log('Getting updated details')
        Autentification()
        console.log('dataa:', data)
        setFeedBack(data.message)
        setTimeout(() => {
          setFeedBack('')
        }, 4000)
      }
    } catch (error) {
      // setResult(Alert(false, error.message || 'Unexpected error occurred.'))
      console.log('error:', error.message)
    } finally {
      setIsloading(false)
      // setTimeout(() => setResult(null), 2000)
    }
  }

  const HandleLogout = async () => {
    try {
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
        data = await res.json()
        console.log(data)
        localStorage.clear()

        window.location.href = '/'
      }
    } catch (error) {
      console.log('unable to logout', error.message)
    }
  }

  const HandleMenuToggle = item => {
    setIsMenuOpen(!isMenuOpen)
    setIsLink(!isLink)
    console.log(item.tittle)

    if (item.tittle === 'Your Account Summary') {
      setAccountSumary(true)
      setOrders(false)
      setAddress(false)
      setShow(item.tittle)
      console.log('Acct Sum:', AccountSumary)
      console.log('adress:', Address)
      console.log('Orders:', Orders)
    } else if (item.tittle === 'Your Address') {
      setAddress(true)
      setAccountSumary(false)
      setOrders(false)
      setShow(item.tittle)
      console.log('adress:', Address)
      console.log('Acct Sum:', AccountSumary)
      console.log('Orders:', Orders)
    } else if (item.tittle === 'Your Orders') {
      setOrders(true)
      setAddress(false)
      setAccountSumary(false)
      setShow(item.tittle)

      console.log('Orders:', Orders)
      console.log('adress:', Address)
      console.log('Acct Sum:', AccountSumary)
    }
  }

  const HandleLink_MenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsLink(!isLink)
  }

  // just to toggle link div
  const HandleLinkToggle = () => {
    setIsLink(!isLink)
  }
  const { UserInfo } = useContext(DataContext)

  // useEffect(() => {
  //   console.log(userDetails);
  // });

  return (
    <div className='w-full relative py-2 '>
      <div
        className={` ${
          toggleApprentice ? '' : 'hidden'
        } fixed top-32 w-full z-20 flex justify-center items-center `}
      >
        <div className=' bg-primary border relative border-gray-500 min-h-[50vh] w-[70%]'>
          <div className='w-full flex justify-center items-center absolute  md:top-[70%] top-20'>
            <div
            
              onClick={e => {
                e.preventDefault()
                setToggleApprentice(prev => !prev)
              }}
              className='  cursor-pointer md:right-36 right-5 rounded-full  text-gray-500 bg-white flex justify-center items-center'
            >
              <ImCancelCircle className='h-10 w-10 ' />
            </div>
          </div>
          <div
            id='tableContainer'
            className='w-full flex flex-col overflow-auto min-h-[300px] gap-3  px-4 '
          >
            <h2 className='text-2xl font-bold text-gray-500 text-center'>
              Apprentice data
            </h2>

            <table className='table-auto text-gray-500    w-full'>
              <thead className='sticky top-0'>
                <tr className='bg-btn  top-0 left-0'>
                  <th className='w-[10%]'>S/n</th>
                  <th className=''>Name</th>
                  <th className=''>phone</th>
                  <th className=''>Amount</th>
                  <th className=''>Payment</th>
                  <th className=''>Image</th>
                </tr>
              </thead>

              <tbody>
                <tr className='font-semibold'>
                  <td>{apprentice?.id}</td>
                  <td>{apprentice?.firstname}</td>
                  <td>{apprentice?.phone}</td>
                  <td>{apprentice?.bill}</td>
                  <td>{apprentice?.status}</td>
                  <td className='flex justify-center items-center'>
                    <img
                      src={apprentice?.image}
                      alt={apprentice?.image}
                      className='h-[50px] w-[40px] object-cover'
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className={`${
          toggle ? '' : 'hidden'
        } w-full absolute top-0 left-0 bg-trans3 z-30 p-2  md:p-6 flex justify-center items-center`}
      >
        {feedback && (
          <div className='flex justify-center items-center absolute top-[50%] left-0 w-full'>
            <div
              className={`${
                feedback ? 'show' : 'hide'
              } p-2  z-20  animate flex justify-center items-center font-semibold text-alert bg-gray-500`}
            >
              <p className='text-white'>{feedback && feedback}</p>
            </div>
          </div>
        )}

        <div
          onMouseOver={e => {
            e.preventDefault()
            setSpin(true)
          }}
          onClick={() => setToggle(prev => !prev)}
          className=' fixed md:absolute  md:top-12 top-20 cursor-pointer md:right-36 right-5 rounded-full  text-gray-500 bg-white flex justify-center items-center'
        >
          <ImCancelCircle className='h-10 w-10 ' />
        </div>

        <div className='formLight  w-[90%] md:w-[50%] md:p-10 p-0 rounded-sm border-2'>
          <form
            onSubmit={e => {
              e.preventDefault()
              HandleUpdateProfile()
            }}
            className='w-full  flex flex-col justify-center items-center p-2 gap-4'
          >
            <div className='createAcctInputDiv'>
              <input
                onChange={e => {
                  e.preventDefault()
                  setFirstname(e.target.value)
                  console.log(firstname)
                }}
                className='createAcctInput placeholder-gray-500'
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
                  console.log(lastname)
                }}
                className='createAcctInput placeholder-gray-500'
                type='text'
                required
                name='lastname'
                id='lastname'
                placeholder='Last Name'
              />
            </div>

            {/* Email Changge */}
            <div className='createAcctInputDiv'>
              <p className='w-full text-gray-500'>
                Do you want to change your email?
              </p>
              <div className='flex justify-start  gap-7 w-full'>
                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => {
                      setChangeEmail(true)
                    }}
                    type='radio'
                    name='option'
                    value='option1'
                  ></input>
                  <p className='text-gray-500'>Yes</p>
                </label>

                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => setChangeEmail(false)}
                    type='radio'
                    name='option'
                    value='option2'
                  ></input>
                  <p className='text-gray-500'>No</p>
                </label>
              </div>
            </div>
            <div className='createAcctInputDiv'>
              {changeEmail ? (
                <input
                  onChange={e => {
                    e.preventDefault()
                    setEmail(e.target.value)
                    console.log('email:', newEmail)
                  }}
                  className='createAcctInput placeholder-gray-500'
                  type='text'
                  required
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              ) : (
                ''
              )}
            </div>
            {/*Email Change Done */}
            {/* Billing Adress Change */}
            <div className='createAcctInputDiv'>
              <p className='w-full text-gray-500'>
                Do you want to change your Billing address?
              </p>
              <div className='flex justify-start  gap-7 w-full'>
                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => {
                      setBillingChange(true)
                    }}
                    type='radio'
                    name='billing'
                    value='option1'
                  ></input>
                  <p className='text-gray-500'>Yes</p>
                </label>

                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => setBillingChange(false)}
                    type='radio'
                    name='billing'
                    value='option2'
                  ></input>
                  <p className='text-gray-500'>No</p>
                </label>
              </div>
            </div>

            <div className='createAcctInputDiv'>
              {BillAdressChange ? (
                <input
                  onChange={e => {
                    e.preventDefault()
                    setBAddres(e.target.value)
                    console.log('Billadress:', Billingadres)
                  }}
                  className='createAcctInput placeholder-gray-500'
                  type='text'
                  required
                  name='address2'
                  id='address'
                  placeholder='Billing Adress'
                />
              ) : (
                ''
              )}
            </div>
            {/* Billing Adress Change */}

            {/* Home Adress Change */}
            <div className='createAcctInputDiv'>
              <p className='w-full text-gray-500'>
                Do you want to change your Home adress address?
              </p>
              <div className='flex justify-start  gap-7 w-full'>
                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => {
                      setHomeAdresChange(true)
                    }}
                    type='radio'
                    name='home'
                    value='option1'
                  ></input>
                  <p className='text-gray-500'>Yes</p>
                </label>

                <label className='flex justify-center items-center'>
                  <input
                    onClick={() => setHomeAdresChange(false)}
                    type='radio'
                    name='home'
                    value='option2'
                  ></input>
                  <p className='text-gray-500'>No</p>
                </label>
              </div>
            </div>

            <div className='createAcctInputDiv'>
              {HomeAdressChange ? (
                <input
                  onChange={e => {
                    e.preventDefault()
                    setBAddres(e.target.value)
                    console.log('Billadress:', BillingAdres)
                  }}
                  className='createAcctInput placeholder-gray-500'
                  type='text'
                  required
                  name='address'
                  id='address'
                  placeholder='Home Adress'
                />
              ) : (
                ''
              )}
            </div>
            {/* Home Adress Change Done */}
            <div className='createAcctInputDiv'>
              <input
                onChange={e => {
                  e.preventDefault()
                  setImage(e.target.files[0])
                  // console.log(country);
                }}
                className=' createAcctInput placeholder-gray-500'
                type='file'
                name='image'
                id='image'
                placeholder='country (optional for non Nigerians)'
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
            {isLoading && (
              <div className='w-full flex justify-center items-center'>
                <div
                  className={`${
                    isLoading ? 'show' : 'hide'
                  } p-3  z-20  animate flex justify-center items-center font-semibold  text-alert bg-gray-500`}
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
      {/* Small screen */}
      <div className='block md:hidden w-full  '>
        <div className='w-full  bg-AccountNav min-h-32 p-4 flex flex-col gap-12 '>
          <div className='w-full flex flex-col justify-center items-center gap-6'>
            <div className='flex flex-col gap-6'>
              <p className='text-3xl'>
                {' '}
                Hi {user && user?.firstname} {user?.lastname},{' '}
              </p>
            </div>

            <div className='w-full flex justify-between items-center'>
              <div
                onClick={HandleLogout}
                className='flex justify-start items-center gap-2 '
              >
                <p>Signout</p>
                <SlLogout />
              </div>

              <button
                onClick={e => {
                  e.preventDefault()
                  setToggle(prev => !prev)
                }}
                className='p-2 rounded-sm bg-gray-500 text-white'
              >
                Update Profile
              </button>
            </div>
          </div>
          <div className='bg-AdminnavLight p-3 flex justify-between items-center'>
            <p>{show}</p>

            {isMenuOpen ? (
              <GoChevronUp
                className='cursor-pointer'
                onClick={HandleLink_MenuToggle}
              />
            ) : (
              <GoChevronDown
                className='cursor-pointer'
                onClick={HandleLink_MenuToggle}
              />
            )}
          </div>
          {/* Links */}
          <div className={`w-full  ${isLink ? 'expanded' : 'Acct_links'}  `}>
            <div className={`flex flex-col gap-5 w-[60%] `}>
              {acctLinks.map(item => (
                <p
                  key={item.id}
                  onClick={() => HandleMenuToggle(item)}
                  className='cursor-pointer hover:text-gray-500   transition ease-in-out duration-500'
                >
                  {item.tittle}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Account Sumary */}
        <div
          className={`w-full ${
            AccountSumary ? 'block' : 'hidden'
          }  px-2 Account sumary`}
        >
          <div className='w-full p-7 flex flex-col gap-10  min-h-[100vh]'>
            <div className='w-full flex flex-col gap-10'>
              <div className='w-full text-4xl'>
                {' '}
                <h2>Your Accout Summary</h2>
              </div>
            </div>
            <hr />
            <div className='flex justify-center flex-col gap-8 items-start w-full'>
              <div
                className={`accountInfo  ${
                  manageAccount ? 'hidden' : 'block'
                }  flex justify-center item-center flex-col w-full gap-3`}
              >
                <div className=' flex justify-start items-center gap-2'>
                  <p className='text-2xl '>Account Information</p>
                  <span className='text-xl cursor-pointer'>
                    <CiEdit />
                  </span>
                </div>
                <p className='font-semibold  w-1/2 '> Contact information</p>
                <p className='w-1/2'>
                  {' '}
                  {user && user?.firstname} {user && user?.lastname}{' '}
                  {user && user?.email}
                </p>
              </div>

              <div
                className={`accountInfo  ${
                  manageAccount ? 'hidden' : 'block'
                } w-full flex justify-center item-center flex-col gap-3`}
              >
                <div className=' flex justify-start items-center gap-2'>
                  <p className='text-2xl '>Your Addresse</p>
                  <span className='text-xl cursor-pointer'>
                    <CiEdit />
                  </span>
                </div>
                <p className='font-semibold  w-1/2 '>Delivery Address</p>
                <div className='w-full'>
                  <p className='w-1/2'>
                    {' '}
                    {user?.firstname} {user?.lastname}
                  </p>

                  <p>{user && user?.address}</p>
                  <p>T:{user && user?.phone}</p>
                </div>
              </div>

              <div
                className={`accountInfo  ${
                  manageAccount ? 'hidden' : 'block'
                } w-full flex justify-center item-center flex-col gap-3`}
              >
                <div className=' flex justify-start items-center gap-2'>
                  <p className='text-2xl '>Your Addresse</p>
                  <span className='text-xl cursor-pointer'>
                    <CiEdit />
                  </span>
                </div>
                <p className='font-semibold  w-1/2 '>Delivery Address</p>
                <div className='w-full'>
                  <p className='w-1/2'>
                    {' '}
                    {user && user?.firstname} {user && user?.lastname}
                  </p>

                  <p>{user && user?.billAdress}</p>
                  <p>T:{user && user?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className={`w-full  ${Address ? 'block' : 'hidden'}`}>
          <div
            className={`w-full  p-7 flex flex-col gap-10 justify-start items-start `}
          >
            <div
              className={`accountInfo  ${
                manageAccount ? 'hidden' : 'block'
              } w-full flex justify-center item-center flex-col gap-3`}
            >
              <div className=' w-full flex justify-start items-center gap-2'>
                <p className='text-2xl '>Your Addresse</p>
                <span className='text-xl cursor-pointer'>
                  <CiEdit />
                </span>
              </div>
              <p className='font-semibold  w-1/2 '>Delivery Address</p>
              <div className='w-full'>
                <p className='w-1/2'>
                  {' '}
                  {user && user?.firstname} {user && user?.lastname}
                </p>

                <p>{user && user?.address}</p>
                <p>T:{user && user?.phone}</p>
              </div>
            </div>

            <div
              className={`accountInfo  ${
                manageAccount ? 'hidden' : 'block'
              } w-full flex justify-center item-center flex-col gap-3`}
            >
              <div className=' flex justify-start items-center gap-2'>
                <p className='text-2xl '>Your Addresse</p>
                <span className='text-xl cursor-pointer'>
                  <CiEdit />
                </span>
              </div>
              <p className='font-semibold  w-1/2 '>Billing Address</p>
              <div className='w-full'>
                <p className='w-1/2'>
                  {' '}
                  {user && user?.firstname} {user && user?.lastname}
                </p>

                <p>{user && user?.address2}</p>
                <p>T:{user && user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full  ${Orders ? 'block' : 'hidden'}`}>Orders</div>;
      </div>

      {/* Big Screen */}
      <div className='w-full hidden md:block'>
        <div className=' relative  flex flex-col md:flex-row justify-center gap-5 items-start min-h-[100vh] '>
          {/* //nav */}
          <div className='AccountNav absolute  nav top-0 left-0   bg-AccountNav  min-h-[100vh] w-[30%] flex flex-col gap-5  p-5 '>
            <h2 className='lg:text-4xl md:text-2xl '>
              Hi, {user && user?.firstname} {user && user?.lastname},
            </h2>

            <div className='w-full flex flex-col gap-8'>
              <p className='font-semibold lg:text-lg md:text-[15px] '>
                Your Account Summary
              </p>
              <p className=' text-lg '>Your Orders</p>
              <p className=' text-lg '>Your Addresses</p>
            </div>

            <div className='w-full relative cursor-pointer  flex  justify-start items-center'>
              <div
                onClick={HandleLogout}
                className='bg-signout p-2 text-white w-[100%] flex justify-center items-center gap-3'
              >
                <p className=''>Sign Out</p>
                <SlLogout />
              </div>
            </div>
          </div>
          {/*  */}

          {/* body */}
          <div className='w-[70%] p-7 absolute top-0 right-0 flex flex-col gap-10  min-h-[100vh]'>
            <div className='w-full flex flex-col gap-10'>
              <div className='w-full text-4xl'>
                {' '}
                <h2>Your Accout Summary</h2>
              </div>
            </div>
            <hr />
            <div className='flex justify-start flex-wrap gap-10 items-start w-full '>
              <div
                className={`accountInfo  ${
                  manageAccount ? 'hidden' : 'block'
                } md:w-3/4 lg:w-[45%] flex justify-center item-center flex-col gap-3 `}
              >
                <div className=' flex justify-start items-center gap-2'>
                  <p className='text-2xl '>Account Information</p>
                  <span className='text-xl cursor-pointer'>
                    <CiEdit />
                  </span>
                </div>
                <p className='font-semibold  w-1/2 '> Contact information</p>
                <div className='flex flex-col gap-1'>
                  <p className='w-1/2'>
                    <span className='font-semibold'>Name: </span>
                    {user && user?.firstname} {user && user?.lastname}{' '}
                  </p>
                  <p>
                    <span className='font-semibold'>Email: </span>
                    {user && user?.email}
                  </p>
                </div>
              </div>
              {/*  */}
              <div
                className={`accountInfo  ${
                  manageAccount ? 'hidden' : 'block'
                } md:w-3/4 lg:w-[45%] flex justify-center item-center flex-col gap-3 `}
              >
                <div className=' flex justify-start items-center gap-2'>
                  <p className='text-2xl '>Your Addresse</p>
                  <span className='text-xl cursor-pointer'>
                    <CiEdit />
                  </span>
                </div>

                <div className='w-full  flex flex-col justify-start gap-1'>
                  <div className='flex justify-start'>
                    <p className='font-semibold  '>Delivery Address:</p>
                    <p>{user && user?.address}</p>
                  </div>

                  <div className='flex justify-start'>
                    <p className='font-semibold  '>Billing Address:</p>
                    <p>{user && user?.billAdress}</p>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>

            <div className='flex justify-between items-center'>
              <button
                onClick={e => {
                  e.preventDefault()
                  setToggle(prev => !prev)
                }}
                className='p-2 rounded-sm bg-gray-500 text-white'
              >
                Update Profile
              </button>
              {user && user.role == 'Apprentice' ? (
                <button
                  onClick={e => {
                    e.preventDefault()
                    setToggleApprentice(prev => !prev)
                  }}
                  className='p-2 rounded-sm bg-gray-500 text-white'
                >
                  Admission Status
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Account

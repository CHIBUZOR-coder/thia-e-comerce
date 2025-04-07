import { useContext, useEffect, useState } from 'react'
import { FaCartShopping, FaPersonCircleCheck } from 'react-icons/fa6'
import { DataContext } from '../Components/DataContext'
import { LuLoaderPinwheel } from 'react-icons/lu'
import { MdDelete } from 'react-icons/md'

const Admission = () => {
  const { loading, applicants, apprentice, DeleteLoading, setDeleteLoading } =
    useContext(DataContext)

  const { lightMode, HandleDeleteApplicant } = useContext(DataContext)
  const [FirstName, setFirstname] = useState('')
  const [LastName, setLastname] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Address, setAddress] = useState('')
  const [Image, setImage] = useState(null)
  const [Add, setAdd] = useState('')

  useEffect(() => {
    console.log('apprentice:', apprentice)
  }, [apprentice])
  useEffect(() => {
    console.log('applicants:', applicants)
  }, [applicants])

  const [LoadingII, setLoadingII] = useState(false)
  const HandleAppStudent = async (
    firstname,
    lastname,
    email,
    phone,
    address,
    image,
    id
  ) => {
    setLoadingII(prev => ({ ...prev, [id]: true }))

    if (!(firstname && lastname && email && phone && image)) {
      console.log('Please fill in all required fields.')
      setLoadingII(prev => ({ ...prev, [id]: false }))
      return
    }

    try {
      const payload = {
        firstname,
        lastname,
        email,
        phone,
        address,
        image
      }

      console.log('payload:', payload)

      const res = await fetch(
        'https://thia-backend.onrender.com/registerApprentice',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
          credentials: 'include'
        }
      )

      if (!res.ok) {
        const errorData = await res.json()
        console.log('Error:', errorData.message)
        setLoadingII(prev => ({ ...prev, [id]: false }))
        return
      }

      const data = await res.json()
      console.log(data)
      setAdd(data.message)
      setTimeout(() => {
        setAdd('')
      }, 4000)
      setLoadingII(prev => ({ ...prev, [id]: false }))

      // setTimeout(() => {
      //   navigate('/Login')
      // }, 2000)
    } catch (error) {
      console.error('An error occurred:', error.message)
      setLoadingII(prev => ({ ...prev, [id]: false }))
    }
  }

  return (
    <div
      className={`${
        lightMode
          ? "bg-[url('/images/admin.jpg')]"
          : "bg-[url('/images/adark.jpg')]"
      }  overflow-x-auto relative`}
    >
      {Add ? (
        <div
          className={` absolute w-full top-20 flex justify-center items-center `}
        >
          <div className='bg-gray-300 p-6'>
            <p className={`font-semibold text-gray-500`}>{Add}</p>
          </div>
        </div>
      ) : (
        ''
      )}



      
      {loading ? (
        <div
          className={`${
            loading ? 'show2' : 'hide2'
          }   animate flex flex-col justify-center my-3 items-center font-semibold text-gray-500`}
        >
          <LuLoaderPinwheel className='h-20 w-20 animate-spin' />
          <p className='font-semibold'>Getting applicants data...</p>
        </div>
      ) : applicants && applicants ? (
        <div>
          <div
            className={`${
              lightMode
                ? "bg-[url('/images/admin.jpg')]"
                : "bg-[url('/images/adark.jpg')]"
            } w-full min-h-[100vh] flex justify-center overflow-x-auto items-start p-3 bg-center bg-cover`}
          >
            {/* Scrollable container for the table */}
            <div className='w-full overflow-x-auto flex justify-start md:justify-center   '>
              <table
                className={`min-w-[800px]  ${
                  lightMode ? ' bg-pink1' : 'bg-AnavDark2'
                } text-gray-500 mt-2 `}
              >
                <thead>
                  <tr
                    className={`${
                      lightMode ? 'lightModeTh_tr' : 'darkModeTh_tr'
                    } `}
                  >
                    <th>id</th>
                    <th>First Na</th>
                    <th>Last Na</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Image</th>

                    <th>Accept</th>
                    <th>Decline</th>
                  </tr>
                </thead>

                <tbody>
                  {applicants &&
                    applicants.map(person => (
                      <tr
                        key={person.id}
                        className={`${
                          lightMode ? 'lightMode' : 'darkMode'
                        } font-semibold`}
                      >
                        <td>{person?.id}</td>
                        <td>{person?.firstname}</td>
                        <td>{person?.lastname}</td>
                        <td>{person?.email}</td>
                        <td>{person?.phone}</td>

                        <td className='flex justify-center items-center'>
                          <img
                            src={`${person?.image}`}
                            alt={person.image}
                            className='h-[50px] w-[40px] object-cover'
                          />
                        </td>
                        <td>
                          <p
                            onClick={e => {
                              e.preventDefault()
                              HandleAppStudent(
                                person?.firstname,
                                person?.lastname,
                                person?.email,
                                person?.phone,
                                person?.address,
                                person?.image,
                                person?.id
                              )
                            }}
                            className='rounded-lg border-2 p-2 border-gray-500 transi hover:text-white hover:bg-gray-500 hover:border-black cursor-pointer text-gray-500 flex justify-center item-center'
                          >
                            {LoadingII[person?.id] ? (
                              <LuLoaderPinwheel className='animate-spin' />
                            ) : (
                              <FaPersonCircleCheck />
                            )}
                          </p>
                        </td>

                        <td>
                          <p
                            onClick={e => {
                              e.preventDefault()
                              HandleDeleteApplicant(person?.id)
                            }}
                            className='rounded-lg border-2 p-2 border-gray-500 text-gray-500 transi hover:text-white hover:bg-gray-500 hover:border-black cursor-pointer flex justify-center item-center'
                          >
                            {DeleteLoading[person?.id] ? (
                              <LuLoaderPinwheel className='animate-spin' />
                            ) : (
                              <MdDelete />
                            )}
                          </p>
                        </td>
                        {/* <td className='rounded-lg p-2 border-2 border-gray-500 text-gray-500 flex justify-center item-center'>
                   
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-gray-500 font-semibold'>No Applicants </p>
      )}
    </div>
  )
}

export default Admission

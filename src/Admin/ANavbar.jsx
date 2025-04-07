import { MdOutlineLightMode } from 'react-icons/md'
import { CgDarkMode } from 'react-icons/cg'
import { DataContext } from '../Components/DataContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrView } from 'react-icons/gr'
import { IoAddCircle } from 'react-icons/io5'
import { FaCartShopping, FaPersonCircleCheck } from 'react-icons/fa6'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropUpLine } from 'react-icons/ri'

const ANavbar = () => {
  const { lightMode, HandleModeChange } = useContext(DataContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const HandleTogleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  {
    /* nav edit for smallscreen */
  }
  return (
    // bg - Anav

    <div
      className={`${
        lightMode ? 'bg-Anav' : 'bg-AdminnavDark'
      } flex p-3 md:p-7 justify-between items-start  relative`}
    >
      <div className='flex  flex-col justify-start  items-start'>
        <div className='w-full md:hidden  block  '>
          {/* Product  text and its arrow toggler*/}
          <div
            className={`${
              lightMode ? ' text-black' : ' text-adminTex'
            }   font-semibold flex justify-start items-center`}
          >
            <p> Products</p>
            {isMenuOpen ? (
              <RiArrowDropUpLine
                className='text-3xl cursor-pointer'
                onClick={HandleTogleMenu}
              />
            ) : (
              <RiArrowDropDownLine
                className='text-3xl cursor-pointer'
                onClick={HandleTogleMenu}
              />
            )}
          </div>
          {/* the hidden list that can be toggled open */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} `}>
            <div className={`flex flex-col justify-center gap-2 items-start`}>
              <Link
                to={`/`}
                target='_blank'
                className={`font-semibold flex justify-center items-center gap-1 ${
                  lightMode
                    ? ' text-gray-500  hover:text-black'
                    : ' text-adminTex  hover:text-white'
                } transition-all ease-in-out duration-150 cursor-pointer p-2 rounded-md`}
              >
                <FaCartShopping />
                <p>Webstore</p>
              </Link>
              <Link
                to={`/Admin`}
                target='_blank'
                className={`font-semibold flex justify-center items-center gap-1 ${
                  lightMode
                    ? ' text-gray-500  hover:text-black'
                    : ' text-adminTex  hover:text-white'
                } transition-all ease-in-out duration-150 cursor-pointer p-2 rounded-md`}
              >
                <GrView />
                <p> View Products</p>
              </Link>
              <Link
                to={`/Admin/AddProduct`}
                target='_blank'
                className={`font-semibold flex justify-center items-center gap-1 ${
                  lightMode
                    ? ' text-gray-500  hover:text-black'
                    : ' text-adminTex  hover:text-white'
                } transition-all ease-in-out duration-150 cursor-pointer p-2 rounded-md`}
              >
                <IoAddCircle />
                <p> Add Products</p>
              </Link>

              <Link
                to={`/Admin/applicants`}
                target='_blank'
                className={`font-semibold flex justify-center items-center gap-1 ${
                  lightMode
                    ? ' text-gray-500  hover:text-black'
                    : ' text-adminTex  hover:text-white'
                } transition-all ease-in-out duration-150 cursor-pointer p-2 rounded-md`}
              >
                <FaPersonCircleCheck />
                <p> Admission</p>
              </Link>
            </div>
          </div>
        </div>{' '}
        <Link
          to={`/`}
          target='_blank'
          className={`font-semibold   flex justify-start items-center gap-1 ${
            lightMode
              ? ' text-gray-500  hover:text-black'
              : ' text-adminTex  hover:text-white'
          } transition-all ease-in-out duration-500 cursor-pointer md:p-2  rounded-md`}
        >
          <p>Webstore</p>
          <FaCartShopping />
        </Link>
      </div>

      {/* theme toggler and user photo*/}
      <div className='flex  flex-col md:flex-row items-end md:items-center gap-5  justify-end'>
        <div className=' flex justify-center items-center gap-2'>
          <div className="h-[30px] rounded-full w-[30px] bg-[url('/images/thia1.jpg')] bg-cover bg-center"></div>

          <div className='flex flex-col '>
            <p
              className={`${
                lightMode ? 'text-black' : 'text-white'
              } text-lg font-semibold`}
            >
              Nachi Cynthia
            </p>
            <p className={`${lightMode ? 'text-gray-500' : 'text-blue-300'}`}>
              Admin
            </p>
          </div>
        </div>
        <div className='flex justify-end '>
          {lightMode ? (
            <p
              className={`  ${
                lightMode ? ' text-black' : ' text-adminTex'
              }   text-[33px] transition-all ease-in-out duration-150 cursor-pointer hover:scale-110`}
            >
              <CgDarkMode onClick={HandleModeChange} />
            </p>
          ) : (
            <p
              className={`  ${
                lightMode ? ' text-black' : ' text-adminTex'
              }   text-[33px] transition-all ease-in-out duration-150 cursor-pointer hover:scale-110`}
            >
              <MdOutlineLightMode onClick={HandleModeChange} />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ANavbar

import React, { useState } from 'react'
import Banner from '../Banner'
import Category from './ChangeFunction/Categoryy'
import Allslides from './All/Allslides'
import MoreProducts from './MoreProducts'
import Footer from './Footer'
import Apply from './Apply'
import { ImCancelCircle } from 'react-icons/im'
import { LuLoaderPinwheel } from 'react-icons/lu'

const Home = () => {
  const [AppllyModal, setAppllyModal] = useState(false)

  const HandelApply = e => {
    e.preventDefault()
    setAppllyModal(prev => !prev)
  }

  return (
    <div className='relative'>
      <div
        className={`w-full h-[100%] bg-trans p-4 md:py-12 absolute top-0 left-0 flex justify-center  px-10 z-50  ${
          AppllyModal ? 'block' : 'hidden'
        }`}
      >
       

        <div
          onMouseOver={e => {
            e.preventDefault()
            setSpin(true)
          }}
          onClick={() => setAppllyModal(prev => !prev)}
          className='md:fixed absolute  md:top-52 top-20 cursor-pointer md:right-36 right-12 rounded-full  text-gray-500 bg-white flex justify-center items-center'
        >
          <ImCancelCircle className='h-10 w-10 ' />
        </div>

        <div className='w-[100%]  md:w-[60%] mt-28'>
          <Apply />
        </div>
      </div>
      <div>
        <Banner HandelApply={HandelApply} />
      </div>
      <div className='relative flex flex-col-reverse w-full px-4 md:flex-row md:pt-5 md:px-28 md:gap-14'>
        <Allslides />
        <Category />
      </div>
      <MoreProducts />
      <Footer />
    </div>
  )
}

export default Home

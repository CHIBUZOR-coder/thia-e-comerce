import { useContext } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { FaScissors } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const Banner = ({ HandelApply }) => {
  return (
    <div className='px-4 pt-20 bg-primary md:pt-8 lg:px-28'>
      <div className='flex flex-col items-center justify-between py-28 md:flex-row gap-14 '>
        <div className=''>
          <h1 className='text-5xl font-light'>Collections</h1>
          <p className='mt-2 mb-6 text-xl'>
            Explore And Shop Different Collections, You Deserve the best
          </p>
          <div className='flex flex-col-reverse md:flex-row justify-start gap-3 items-start '>
            <button
              onClick={e => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                HandelApply(e)
              }}
              className='btn '
            >
              <FaScissors className=' ' />
              Learn From Thia
            </button>
            <Link
              to={`/ShopAll`}
              className='btn w-36'
            >
              <FaShoppingBag  />
              Shop Now
            </Link>
          </div>
        </div>
        <div className='w-full  md:w-80 h-big2 md:h-big thia'></div>
      </div>
    </div>
  )
}

export default Banner

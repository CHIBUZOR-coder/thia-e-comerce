import { useState } from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  const [active, setActive] = useState(
    JSON.parse(localStorage.getItem('page')) || 1
  )
  const pages = [
    {
      num: 1,
      path: '/Admin'
    },
    {
      num: 2,
      path: '/Admin/AdminHome2'
    },
    {
      num: 3,
      path: '/Admin/AdminHome3'
    },
    {
      num: 4,
      path: '/Admin/AdminHome4'
    }
  ]
  return (
    <div className='flex justify-center gap-4'>
      {pages.map((page, i) => (
        <Link
          to={page.path}
          key={i}
          onClick={e => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            localStorage.setItem('page', page.num)
            setActive(page.num)
          }}
          className={`h-10 w-10 p-3 flex justify-center items-center rounded-full ${
            active === page.num ? 'bg-gray-500' : 'bg-gray-300'
          }`}
        >
          {page.num}
        </Link>
      ))}
    </div>
  )
}

export default Pagination

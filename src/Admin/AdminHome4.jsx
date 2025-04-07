import { useContext } from 'react'
import { DataContext } from '../Components/DataContext'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import { LuLoaderPinwheel } from 'react-icons/lu'

const AdminHome4 = () => {
  const { lightMode } = useContext(DataContext)
  // console.log(Allproducts);
  const loading = useSelector(state => state.cloth.isLoading)

  const Allproducts = useSelector(state => state.cloth.data)

  const selected = Allproducts.filter(prod => prod.id >= 68)

  const links = [
    { id: 1, path: '/Admin' },
    { id: 2, path: '/Admin/AdminHome2' },
    { id: 3, path: '/Admin/AdminHome3' },
    { id: 4, path: '/Admin/AdminHome4' }
  ]
  return (
    <>
      {loading ? (
        <div
          className={`${
            loading ? 'show2' : 'hide2'
          }   animate flex flex-col justify-center my-3 items-center font-semibold text-gray-500`}
        >
          <LuLoaderPinwheel className='h-20 w-20 animate-spin' />
          <p className='font-semibold'>Getting Prroducts...</p>
        </div>
      ) : (
        <>
          <div>
            <div
              className={`${
                lightMode
                  ? "bg-[url('/images/admin.jpg')]"
                  : "bg-[url('/images/adark.jpg')]"
              } w-full min-h-[100vh] flex justify-center items-start p-3 bg-center bg-cover`}
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
                        lightMode ? 'lightModeTh_tr ' : 'darkModeTh_tr'
                      } `}
                    >
                      <th>id</th>
                      <th>Brand</th>
                      <th>Style</th>
                      <th>Price</th>
                      <th>Size</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Image</th>
                    </tr>
                  </thead>

                  <tbody>
                    {selected.map(item => (
                      <tr
                        key={item.id}
                        className={`${
                          lightMode ? 'lightMode' : 'darkMode'
                        } font-semibold`}
                      >
                        <td>{item.id}</td>
                        <td>{item.brand}</td>
                        <td>{item.style}</td>
                        <td>{item.price}</td>
                        <td>{item.size}</td>
                        <td>2</td>
                        <td>{item.status}</td>
                        <td className='flex justify-center items-center'>
                          <img
                            src={`${item.image}`}
                            alt={item.image}
                            className='h-[50px] w-[40px] object-cover'
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='my-3'>
              <Pagination />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AdminHome4

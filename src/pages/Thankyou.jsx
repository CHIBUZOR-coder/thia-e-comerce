import { useSearchParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './home/Footer'

const Thankyou = () => {
  const [searchParams] = useSearchParams()
  const UserInfo = JSON.parse(localStorage.getItem('userInfo')) || false
  const [email, setEmail] = useState(localStorage.getItem('apprenticeEmail'))
  const [ErrorMessage, setErrorMessage] = useState('')
  const [SuccessMessage, setSuccessMessage] = useState('')

  let user
  useEffect(() => {
    console.log('Thankyou:', UserInfo?.email)
    if (UserInfo && UserInfo.email) {
      user = UserInfo?.email
    }
  })

  const linkk =
    email && email
      ? 'https://thia-backend.onrender.com/verifyApprenticePyment'
      : UserInfo
      ? 'https://thia-backend.onrender.com/verify_payment'
      : null

  const [transactionId, setTransaction] = useState(
    searchParams.get('transaction_id')
  )
  const [OrderId, setOrderId] = useState(searchParams.get('orderId'))

  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState('')
  const [Products, setProducts] = useState([])
  const [Bill, setBill] = useState(null)

  const [emojis, setEmojis] = useState([]) // Store emoji objects
  const navigate = useNavigate()

  useEffect(() => {
    console.log('status:', status)
  }, [status])

  const createReciept = async (transaction_id, orderId, email) => {
    try {
      const response = await fetch(linkk, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({ transaction_id, orderId, email })
      })
      const data = await response.json()
      if (response.ok) {
        console.log(data)

        localStorage.setItem('Recipt', data.data)
        setIsLoading(false)
        localStorage.removeItem('orderId')
        setStatus(data?.data?.status)
        setBill(data?.data?.bill)
        setProducts(data?.data?.products)
        Autentification()
        localStorage.removeItem('cartItems')
        setTimeout(() => {
          navigate('/')
        }, 7000)
      } else {
        console.log(data || 'Something went wrong')
        setErrorMessage(data.message || 'Something went wrong')
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('transactionId', transactionId)
    console.log('email', email)
    console.log('orderId', OrderId)

    if (transactionId) {
      createReciept(transactionId, OrderId, user || email)
    }
  }, [transactionId, OrderId, email])

  // Generate animated 🎉 emojis if payment is successful
  useEffect(() => {
    if (status === 'Completed') {
      let count = 0
      const interval = setInterval(() => {
        setEmojis(prev => [
          ...prev,
          {
            id: count++, // Unique ID
            left: Math.random() * 100 + 'vw', // Random horizontal position
            animationDuration: Math.random() * 2 + 3 + 's' // Random duration
          }
        ])
      }, 300)

      setTimeout(() => clearInterval(interval), 4000) // Stop adding after 3s

      return () => clearInterval(interval)
    }
  }, [status])

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-300  px-3 gap-10 overflow-hidden relative'>
        {isLoading ? (
          <div className='bg-white flex justify-center items-center ringg shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative'>
            <div className='text-subMain font-semibold animate-pulse'>
              Verifying Payment...
            </div>
          </div>
        ) : status && status === 'Completed' ? (
          <div>
            <h2 className='text-2xl font-bold text-green text-center'>
              Payment Successful! 🎉 <br />
            </h2>
          </div>
        ) : ErrorMessage ? (
          <h2 className='text-2xl font-bold text-red-500'>
            {ErrorMessage && ErrorMessage}
          </h2>
        ) : (
          <h2 className='text-2xl font-bold text-red-500'>
            Payment Failed! 😔
          </h2>
        )}

        {status && status === 'Completed' ? (
          <div className=' bg-dry rounded p-8  border-2  border-border flexCol gap-5 flex flex-col justify-center items-center bg-primary '>
            {UserInfo ? (
              <>
                <p className='font-semibold text-2xl  text-green'>
                  Thank you for your patronage!
                </p>
                <p className='font-semibold text-4xl text-green animate-bounce'>
                  🤗
                </p>
              </>
            ) : (
              <>
                <p className='font-semibold text-2xl  text-green'>
                  Thank you for Choosing Thia!
                </p>
                <p className='font-semibold text-4xl text-green animate-bounce'>
                  🤗
                </p>

                {/* <p className='font-semibold text-2xl  text-green'>
                Thank you for Choosing Thia!
              </p> */}
              </>
            )}
          </div>
        ) : (
          ''
        )}

        {/* Animated Party Emojis 🎉 */}
        {status &&
          status === 'Completed' &&
          emojis.map(emoji => (
            <span
              key={emoji.id}
              className='absolute text-4xl animate-fall'
              style={{
                left: emoji.left,
                animationDuration: emoji.animationDuration
              }}
            >
              🎉
            </span>
          ))}

        {UserInfo ? (
          <div
            id='tableContainer'
            className='w-full flex flex-col overflow-auto min-h-[300px] gap-3 bg-primary px-4 '
          >
            <h2 className='text-2xl font-bold text-green text-center'>
              Products Purchased
            </h2>

            <table className='table-auto text-gray-500 bg-primary   w-full'>
              <thead className='sticky top-0'>
                <tr className='bg-btn  top-0 left-0'>
                  <th className='w-[10%]'>S/n</th>
                  <th className=''>Style</th>
                  <th className=''>Size</th>
                  <th className=''>Quantity</th>
                  <th className=''>Amount</th>
                  <th className=''>Image</th>
                </tr>
              </thead>

              <tbody>
                {Products &&
                  Products.map((item, index) => (
                    <tr key={index} className='font-semibold'>
                      <td>{Number(index + 1)}</td>
                      <td>{item?.style}</td>
                      <td>{item?.sizee}</td>
                      <td>{item.quantity}</td>
                      <td>${item?.price}</td>
                      <td className='flex justify-center items-center'>
                        <img
                          src={item?.image}
                          alt={item?.image}
                          className='h-[50px] w-[40px] object-cover'
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {Products && Products?.length > 0 ? (
              <>
                <div className='flex flex-col gap-1'>
                  <p className='text-adminTex text-small italic'>
                    Bill: {Bill && Bill}N
                  </p>
                  {/* <p className="text-adminTex text-small italic">Vat: 100N</p> */}
                  {/* <p className="text-adminTex text-small italic">
                Bill: {Total + 100}N
              </p> */}
                </div>
              </>
            ) : null}
          </div>
        ) : (
          ''
        )}

        <style>
          {`
            @keyframes fall {
              0% { transform: translateY(-100vh); opacity: 1; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
            .animate-fall {
              position: absolute;
              top: 0;
              animation: fall linear infinite;
            }
          `}
        </style>
      </div>

      <Footer />
    </div>
  )
}

export default Thankyou

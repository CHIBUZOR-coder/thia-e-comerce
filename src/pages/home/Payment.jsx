import { useSearchParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Payment = () => {
  const [searchParams] = useSearchParams()

  const [email, setemail] = useState(searchParams.get('email'))

  const [isLoading, setIsLoading] = useState(true)
  const [paymentLoading, setPaymentLoading] = useState(false)
  const [paymentError, setPaymentError] = useState('')

  const [emojis, setEmojis] = useState([]) // Store emoji objects
  const navigate = useNavigate()

  useEffect(() => {
    console.log('email:', email)
    if (email) {
      setIsLoading(false)
    }
  }, [email])

  useEffect(() => {
    console.log('isloading:', isLoading)
  }, [isLoading])

  const HandlePayment = async email => {
    console.log('starrting payment')

    try {
      const response = await fetch(
        'https://thia-backend.onrender.com/apprenticePaynent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({ email })
        }
      )
      const data = await response.json()
      if (!response.ok) {
        console.log(data || 'Something went wrong')
        setPaymentError(data.message || 'Something went wrong')
        setPaymentLoading(false)
        setIsLoading(false)
      } else {
        console.log(data)
        setPaymentLoading(false)
        setIsLoading(false)
        localStorage.setItem("apprenticeEmail", data.email)
        console.log('Redirecting to payment page:', data.payment_link)
        window.location.href = data.payment_link
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Generate animated 🎉 emojis if payment is successful

  return (
    <div>
      <div className='flex flex-col items-center justify-center min-h-screen bg-main px-3 gap-10 overflow-hidden relative'>
        {paymentError && (
          <div className='md:w-1/2 w-full rounded bg-gray-300 p-2'>
            <p className='text-gray-500 text-lg font-semibold'>
              {paymentError}
            </p>
          </div>
        )}

        {isLoading && (
          <div className='bg-white flex justify-center items-center ringg shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative'>
            <div className='text-subMain font-semibold animate-pulse'>
              Verifying Apprentice email...
            </div>
          </div>
        )}

        {paymentLoading === true ? (
          <div className='bg-white flex justify-center items-center ringg shadow-lg max-w-md text-center rounded-full p-2 h-48 w-48 relative'>
            <div className='text-subMain font-semibold animate-pulse'>
              Redirecting to payment link...
            </div>
          </div>
        ) : (
          <div>
            <div className=''>
              <button
                onClick={e => {
                  HandlePayment(email)
                  setPaymentLoading(true)
                }}
                className='border-2 p-2 border-black font-semibold bg-gray-500 text-primary rounded-lg transi hover:bg-primary hover:border-gray-500 hover:text-gray-500'
              >
                Proced to payment link
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Payment

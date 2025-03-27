// FormReview.jsx
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddReview, getReview } from '../../features/user/userSlice'

const FormReview = ({ setFeedback, feedback }) => {
  const [Text, setText] = useState('')
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))

  const handleChange = e => {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log('text:', Text)
  }, [Text])

  const handleSubmit = async e => {
    e.preventDefault()
    const text = Text && Text
    // console.log('redux:', text)

    if (!user) {
      setFeedback('Please Login to add a review')
      setTimeout(() => {
        setFeedback('')
      }, [2000])

      console.log('Please Login to add a review')

      return
    }
   const result = await dispatch(AddReview({ text })).unwrap()

    console.log("Form:",result)

    if (result.success === true) {
      const review = await dispatch(getReview()).unwrap()

      setFeedback('Review added successfully')
      console.log('review:', review)
    }
  }

  return (
    <div className='bg-primary my-3 w-full'>
      <div className='xl:px-28 p-4 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold mb-4'>Login to add a review</h2>
        {feedback && (
          <div
            className={`p-2 md:w-1/3 w-[40%] animate flex justify-center items-center font-semibold text-gray-500 bg-alert`}
          >
            <p>{feedback && feedback}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='mb-8 w-1/2'>
          <div className='mb-4'>
            <label className='block text-sm  text-gray-700 font-semibold'>
              Review
            </label>
            <input
              type='text'
              name='name'
              value={Text}
              onChange={e => {
                handleChange(e)
              }}
              required
              className='mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            />
          </div>
          <button
            onClick={e => handleSubmit(e)}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 transi`}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default FormReview

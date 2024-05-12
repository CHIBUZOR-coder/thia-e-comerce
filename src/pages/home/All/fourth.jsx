import useFetch from './ImageStyle'

export const Fourth = () => {
  const imageUrl = './images/kaf.jpg'

  const { style } = useFetch(imageUrl) // Call the custom hook to get the style object

  return (
    <div
      className='w-full childd  flex justify-center  items-end h-big3 '
      style={style} // Use the style object returned by the custom hook
    >
      <a
        href='/'
        className='flex justify-center names w-40 rounded-md h-10 my-6 bg-trans text-3xl text-white'
      >
        Fourth
      </a>
    </div>
  )
}

export default Fourth;

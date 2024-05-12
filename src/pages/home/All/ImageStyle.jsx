import { useState } from 'react'

export const useFetch = imageUrl => {
  const [style, setStyle] = useState({
    backgroundImage: `url('${imageUrl}')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  })

  return { style }
}

export default useFetch

import React from 'react'
import Img from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='w-full mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={Img}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner

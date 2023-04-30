import React from 'react'
import './Loader.css'


function Loader() {
  return (
    <div className='flex justify-center items-center mt-36 flex-col gap-9'>
        <div className='custom-loader'></div>
        <p className='text-white'>Loading.....</p>
    </div>
  )
}

export default Loader
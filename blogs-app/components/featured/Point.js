import React from 'react'

const Point = ({num}) => {
  return (
    <p className='flex justify-center items-center h-10 w-10 m-auto 
   bg-white text-black font-bold border border-gray-200 rounded-[4px] cursor-pointer  shadow-md transition-all duration-300
   hover:bg-[#665ace] hover:text-white hover:shadow-2xl hover:border-[#665ace]'>{num}</p>
  )
}

export default Point
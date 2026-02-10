import React from 'react'
import Logo from './Logo'

const Pics = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center w-[90%] md:w-[80%] m-auto md:ml-[15%] py-10 md:py-20 gap-10 md:gap-0'>
      
      <div className='flex flex-col gap-10 md:gap-[80px] items-center md:items-start'>
        <Logo src="/images/google-pic.png" alt="Google" />
        <div className='md:ml-[80px]'> 
          <Logo src="/images/uber-pic.png" alt="Uber" />
        </div>
      </div>

      <div className='flex flex-col gap-10 md:gap-[150px] items-center'>
        <Logo src="/images/lyft-pic.jpg" alt="Lyft" />
        <Logo src="/images/icecream-pic.jpg" alt="Ice Cream" />
      </div>

      <div className='flex flex-col gap-10 md:gap-[80px] items-center md:items-end'>
        <Logo src="/images/airbnd-pic.png" alt="Airbnb" />
        <div className='md:mr-[80px]'>
          <Logo src="/images/black.avif" alt="Black" />
        </div>
      </div>

    </section>
  )
}

export default Pics
import React from 'react'
import Blogs from './Blogs'

const Hero = () => {
  return (
    <>
    <div className='text-center font-bold text-[33px] py-[40px] text-black'>Popular Blogs</div>
<section className='flex flex-col items-center sm:flex-row sm:justify-around'>
  <Blogs src="/images/image-1.webp" alt="first-image" dur="2 days ago" para="First Blog" />
  <Blogs src="/images/image-2.jpg" alt="second-image" dur="Yesterday" para="Second Blog" />
  <Blogs src="/images/image-3.webp" alt="third-image" dur="1 week ago" para="Third Blog" />
</section>
    
    </>
  )
}

export default Hero
import Image from 'next/image'
import React from 'react'

const Logo = ({src , alt}) => {
  return (
    <Image src={src} alt={alt} width={120} height={80} 
    className='shadow-2xl border rounded-full p-[20px]'/>
  )
}

export default Logo
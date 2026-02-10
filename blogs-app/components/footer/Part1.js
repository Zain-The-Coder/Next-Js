import React from 'react'

const Part1 = () => {
  return (
    <>
      <footer className='flex flex-col md:flex-row text-black w-[90%] md:w-[80%] py-[50px] mt-[30px] m-auto border-black justify-between gap-10 md:gap-0'>
        
        <h2 className='text-[24px] font-bold text-center md:text-left'>BLOGI</h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[40px]'>
          <ul className='text-center md:text-left'>
            <h2 className='font-bold mb-[16px]'>Products</h2>
            <li className='hover:text-orange-600 cursor-pointer'>First Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Second Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Third Link</li>
          </ul>
          <ul className='text-center md:text-left'>
            <h2 className='font-bold mb-[16px]'>Responsive</h2>
            <li className='hover:text-orange-600 cursor-pointer'>First Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Second Link</li>
          </ul>
          <ul className='text-center md:text-left'>
            <h2 className='font-bold mb-[16px]'>About</h2>
            <li className='hover:text-orange-600 cursor-pointer'>First Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Second Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Third Link</li>
          </ul>
          <ul className='text-center md:text-left'>
            <h2 className='font-bold mb-[16px]'>Contacts</h2>
            <li className='hover:text-orange-600 cursor-pointer'>First Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Second Link</li>
            <li className='hover:text-orange-600 cursor-pointer'>Third Link</li>
          </ul>
        </div>

        <div className='flex flex-col gap-[10px] items-center md:items-start text-center md:text-left'>
          <ul>
            <li><h2 className='font-bold mb-[16px]'>My Blogs</h2></li>
            <li className='pb-[10px]'><p className='max-w-[150px] md:max-w-none'>This Is Created By Zain ur Rehman</p></li>
            <li>
              <button className='bg-[#de905e] hover:bg-[#c97d4d] cursor-pointer px-[20px] py-[10px] rounded-lg text-white font-medium transition-all active:scale-95'>
                Download Now</button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Part1
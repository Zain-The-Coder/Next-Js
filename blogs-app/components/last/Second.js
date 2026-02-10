import React from 'react'

const Second = () => {
  return (
    <>
      <section className='flex flex-col bg-gradient-to-b from-[#609af4] to-[#5c71f0] py-[40px] px-4 w-[95%] md:w-[80%] rounded-2xl m-auto mt-10'>
        
        <h2 className='text-center text-[22px] md:text-[30px] text-white font-semibold leading-tight'>
          Get Notified About Our Blog published</h2>

        <div className="w-full max-w-md m-auto mt-8"> 
          <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0">
            
            <input type="email" placeholder="Enter your email"
              className="w-full bg-white text-black p-4 pr-4 md:pr-32 rounded-xl md:rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-orange-300 transition-all" />
            
            <button className="w-full md:w-auto md:absolute md:right-2 bg-[#de905e] hover:bg-[#c97d4d] text-white px-6 py-3 md:py-2.5 rounded-xl font-medium transition-colors">
              Join Us</button>

          </div>
        </div> 
      </section> 
    </>
  )
}

export default Second
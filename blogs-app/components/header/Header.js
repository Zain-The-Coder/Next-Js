import React from 'react'
import NavBar from './NavBar'
import Main from './Main'


const Header = () => {
  return (
    <>
    <header className='bg-gradient-to-b from-[#609af4] to-[#5c71f0] text-white p-[20px] flex flex-col gap-[50px]'>
    <NavBar />
    <Main />
    </header>
    </>
  )
}

export default Header
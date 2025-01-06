import React from 'react'
import { IoGameController } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex p-[1em] bg-[#09152b] justify-between'>
      <div className='flex  text-blue-400 '>
        <IoGameController className='mx-0px my-auto w-6 h-6 md:w-10 h-10' />
        <div className='text-xl font-bold mx-0px my-auto'>LOTGAMES</div>
      </div>
      <div className='md:flex hidden md:block'>
        <div className='mr-[2em]'>Home</div>
        <div className='mr-[2em]'>Stores</div>
        <div className='mr-[2em]'>Creator</div>
        <div className='mr-[3em]'>About Us</div>
      </div>
    </div>
  )
}

export default Header

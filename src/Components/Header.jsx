import React from 'react'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex p-3 bg-slate-700'>
      <div className='flex  text-blue-400 '>
        <IoGameController className='mx-0px my-auto w-6 h-6 md:w-10 h-10' />
        <div className='text-xl font-bold mx-0px my-auto'>LOTGAMES</div>
      </div>
      <div className='flex bg-slate-600 p-2 w-full items-center mx-5 rounded-full'>
        <HiOutlineMagnifyingGlass className='text-white' />
        <input type="text" placeholder='Search Games' className='text-white px-2 bg-transparent outline-none w-full' />
      </div>
    </div>
  )
}

export default Header

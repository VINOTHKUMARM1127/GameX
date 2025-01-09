import React, { useState } from 'react';
import { IoGameController } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex p-[1em] bg-[#09152b] justify-between'>
      <div className='flex text-blue-400'>
        <IoGameController className='mx-0px my-auto w-6 h-6 md:w-10 md:h-10' />
        <div className='text-xl font-bold mx-0px my-auto'>LOTGAMES</div>
      </div>
      <div className='text-[1em] text-blue-400 font-bold md:flex mx-0px my-auto'>
        <div className='hidden md:block mr-[4em]'>HOME</div>
        <div className='hidden md:block mr-[4em]'>STORE</div>
        <div className='hidden md:block mr-[4em]'>CREATOR</div>
        <div className='hidden md:block mr-[4em]'>ABOUT US</div>
        <IoMenu
          className='mr-[1em] block md:hidden mx-0px my-auto w-6 h-6 cursor-pointer'
          onClick={() => {setMenuOpen(!menuOpen)}}
        />
      </div>

      <div
        className={`text-center text-blue-400 font-bold z-40 md:hidden 
        ${menuOpen ? 'block' : 'hidden'} text-[.9em]
        fixed top-0 right-0 w-[60vw] h-screen bg-[#09152b] pt-[4em] p-4 rounded-lg`}>
        <IoMdClose className='w-6 h-6 top-3 absolute' 
        onClick={() => {setMenuOpen(false)}}/>
        <div className='mb-[4em]'>HOME</div>
        <div className='mb-[4em]'>STORE</div>
        <div className='mb-[4em]'>CREATOR</div>
        <div className='mb-[4em]'>ABOUT US</div>
      </div>
    </div>
  );
};

export default Header;
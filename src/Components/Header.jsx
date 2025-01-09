import React, { useState } from 'react';
import { IoGameController } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex p-[1em] bg-[#09152b] justify-between'>
      <div className='flex text-blue-400'>
        <IoGameController className='mx-0px my-auto w-6 h-6 md:w-10 h-10' />
        <div className='text-xl font-bold mx-0px my-auto'>LOTGAMES</div>
      </div>
      <div className='text-[0.9em] text-blue-400 font-bold md:flex'>
        {/* Desktop Menu */}
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
        className={`z-40 md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-[60px] left-0 w-full bg-[#09152b] p-4 rounded-lg`}
      >
        <div className='text-[.9em] mb-[4em] text-center text-blue-400 font-bold'>HOME</div>
        <div className='text-[.9em] mb-[4em] text-center text-blue-400 font-bold'>STORE</div>
        <div className='text-[.9em] mb-[4em] text-center text-blue-400 font-bold'>CREATOR</div>
        <div className='text-[.9em] mb-[4em] text-center text-blue-400 font-bold'>ABOUT US</div>
      </div>
    </div>
  );
};

export default Header;

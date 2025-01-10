import React, { useEffect, useState } from 'react';
import { IoGameController } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <div className={`flex p-[1em] bg-[var(--primary-color)] justify-between sticky h-[60px] top-0 z-40 
    transition-all ${showHeader ? '' : 'top-[-70px]'}`}>
      <div className='flex'>
        <IoGameController className='text-orange-500 mx-0px my-auto w-6 h-6 md:w-10 md:h-10' />
        <div onClick={() => navigate('/')}
          className='text-xl font-bold mx-0px my-auto ml-[6px]'>LOT
          <span className='bg-orange-500 ml-[6px] p-1 rounded-xl'>GAMES</span>
        </div>
      </div>
      <div className='text-[1em] md:flex mx-0px my-auto'>
        <div onClick={() => navigate('/')}
          className='hidden md:block mr-[4em] hover:text-blue-400'>HOME</div>
        <div onClick={() => navigate('/store')}
          className='hidden md:block mr-[4em] hover:text-blue-400'>STORES</div>
        <div onClick={() => navigate('/creator')}
          className='hidden md:block mr-[4em] hover:text-blue-400'>CREATOR</div>
        <div onClick={() => navigate('/aboutus')}
          className='hidden md:block mr-[4em] hover:text-blue-400'>ABOUT US</div>
        <IoMenu
          className='mr-[1em] block md:hidden mx-0px my-auto w-6 h-6 cursor-pointer'
          onClick={() => { setMenuOpen(!menuOpen) }}
        />
      </div>

      <div
        className={`text-center z-40 md:hidden 
        ${menuOpen ? 'block' : 'hidden'} text-[1em]
        fixed top-0 right-0 w-[80vw] h-screen bg-[#09152b] pt-[6em] p-4 rounded-lg`}>
        <IoMdClose className='w-6 h-6 top-3 absolute'
          onClick={() => { setMenuOpen(false) }} />
        <div onClick={() => { navigate('/'); setMenuOpen(false) }}
          className='mb-[4em]'>HOME</div>
        <div onClick={() => { navigate('/store'); setMenuOpen(false) }}
          className='mb-[4em]'>STORES</div>
        <div onClick={() => { navigate('/creator'); setMenuOpen(false) }}
          className='mb-[4em]'>CREATOR</div>
        <div onClick={() => { navigate('/aboutus'); setMenuOpen(false) }}
          className='mb-[4em]'>ABOUT US</div>
      </div>
    </div>
  );
};

export default Header;
import React from 'react'
import { IoGameController } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#09152b] py-[2em] px-[1em] text-center '>
      <div className='my-auto mx-0'>
        <div className='flex justify-center  text-blue-400 mb-[1em]'>
          <IoGameController className='mx-0px my-auto w-8 h-8 md:w-10' />
          <div className='text-[2em] font-bold mx-0px my-auto'>LOTGAMES</div>
        </div>

        <div className='md:w-[80vw] w-[90vw] mx-auto my-0 pb-5 opacity-80'>
        Welcome to LotGames, your ultimate destination for exciting gaming adventures. Explore 
        a vast library of the latest games, get personalized recommendations, and enjoy detailed
         descriptions and reviews. With a sleek, user-friendly interface, LotGames makes 
         discovering your next favorite game easy and fun!
        </div> <hr className='md:hidden opacity-80 my-[1em]' />

      <div className='flex flex-wrap flex-col md:flex-row text-[1.1em] justify-center opacity-80'>
        <div onClick={()=>{navigate('/')}}
        className='ml-[1em] my-2 hover:text-blue-400'>Home</div>
        <div onClick={()=>{navigate('/store')}}
        className='ml-[1em] my-2 hover:text-blue-400'>Stores</div>
        <div onClick={()=>{navigate('/creator')}}
        className='ml-[1em] my-2 hover:text-blue-400'>Creators</div>
        <div onClick={()=>{navigate('/aboutus')}}
        className='ml-[1em] my-2 hover:text-blue-400'>About Us</div>
      </div> <hr className='md:hidden opacity-80 my-[1em]' />

      <div className='mt-4'>
          <SocialIcon style={{ height: 40, width: 40 }} network='twitter'
            className='mx-[0.3em] hover:scale-105 transtion-all duration-300 ease-in-out'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='facebook'
            className='mx-[0.3em] hover:scale-105 transtion-all duration-300 ease-in-out'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='instagram'
            className='mx-[0.3em] hover:scale-105 transtion-all duration-300 ease-in-out'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='github'
            className='mx-[0.3em] hover:scale-105 transtion-all duration-300 ease-in-out'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='linkedin'
            className='mx-[0.3em] hover:scale-105 transtion-all duration-300 ease-in-out'/>
        </div>
      </div>

    </div>
  )
}

export default Footer

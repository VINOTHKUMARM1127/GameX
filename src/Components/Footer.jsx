import React from 'react'
import { IoGameController } from "react-icons/io5";
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className='bg-[#09152b] py-[3em] px-[1em] grid grid-cols-1 md:grid-cols-3 text-center '>
      <div className=''>
        <div className='flex justify-center  text-blue-400 mb-[1em]'>
          <IoGameController className='mx-0px my-auto w-8 h-8 md:w-10 h-10' />
          <div className='text-[2em] font-bold mx-0px my-auto'>LOTGAMES</div>
        </div>
        <div className='mb-2'>
          <SocialIcon style={{ height: 40, width: 40 }} network='twitter' className='mx-[0.3em]'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='facebook' className='mx-[0.3em]'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='instagram' className='mx-[0.3em]'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='github' className='mx-[0.3em]'/>
          <SocialIcon style={{ height: 40, width: 40 }} network='linkedin' className='mx-[0.3em]'/>
        </div> <hr className='md:hidden my-[1em]'/>
      </div>

      <div className='flex flex-wrap flex-col  justify-center '>
        <div className='ml-[1em] my-2 hover:text-blue-400'>Home</div>
        <div className='ml-[1em] my-2 hover:text-blue-400'>Customer Support</div>
        <div className='ml-[1em] my-2 hover:text-blue-400'>About Us</div>
        <div className='ml-[1em] my-2 hover:text-blue-400'>Contact Us</div><hr className='md:hidden my-[1em]'/>
      </div> 

      <div className='mt-[1em]'>
        <div className='pb-[.3em] text-[1.2em]'>Send Mail to Our team</div>
        <input type="text" placeholder='Enter Email...' className=' p-2 rounded-md border-white'/>
        <div className='text-center'><button className='p-3'>Submit</button></div>
      </div>
    </div>
  )
}

export default Footer

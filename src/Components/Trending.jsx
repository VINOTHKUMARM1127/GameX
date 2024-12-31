import React from 'react'

const Trending = ({ datas }) => {

  return (
    <div className='mt-5 hidden md:block'>
      <div className='text-white text-[30px] font-bold'>Trending Games</div>
      <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {datas.map((cur, index) => index < 4 && (
          <div key={index} className=' bg-slate-900  rounded-xl
        group hover:scale-110 transtion-all duration-300 ease-in-out'>
            <img src={cur.background_image} alt={cur.name} className='rounded-tl-xl rounded-tr-xl
            object-cover h-[270px]'/>
            <div className=' text-white text-[1em] text-center pt-1 px-5 pb-3 '>
              {cur.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending

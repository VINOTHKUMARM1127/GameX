import React, { useState } from 'react'
import FetchData from '../FetchData/FetchData'

const Creator = () => {
  const [page, setPage] = useState(1)
  const { data, loading } = FetchData({ url: '/creators', id: `&page=${page}` })
  const dta = data?.results
  console.log(page)

  const sk = () => {
    return (
      <div className='pb-1 text-center'>
        <div className='bg-[#09152b] animate-pulse w-full h-[200px] md:h-[180px] 
            rounded-tl-xl rounded-tr-xl object-cover mb-1'></div>
        <div className='bg-[#09152b] animate-pulse  text-[1em] text-center 
            pt-3 px-5 pb-3 mb-1'></div>
        <div className='bg-[#09152b] animate-pulse  text-[1em] text-center 
            pt-3 px-5 pb-3 rounded-bl-xl rounded-br-xl mb-1'></div>
      </div>
    )
  }
  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className='px-5 my-4'>
      <div className=' text-[30px] font-bold'>Popular Games</div>
      {loading ? (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-3'>
          {sk()}
          {sk()}
          {sk()}
          {sk()}
          {sk()}
          {sk()}
          {sk()}
          {sk()}
        </div>
      ) : (
        <div className='mt-5'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-3'>
            {dta.map((curitem, index) => (
              <div key={index}
                className='bg-[#063977] rounded-xl  pb-1 text-center
                    group hover:scale-105 transtion-all duration-300 ease-in-out'
                onClick={() => navigate(`/games/${curitem.id}`)}>
                <img src={curitem.image} alt={curitem.name}
                  className='w-full h-[200px] md:h-[180px] rounded-tl-xl rounded-tr-xl object-cover ' />
                <div className='font-bold my-[6px]'>{curitem.name}</div>
                <div className='uppercase text-[0.8em] mb-2'>{curitem?.positions.map((it) => (
                  <div>{it.name}</div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='flex justify-center mt-5'>
        <div className='bg-[#063977] rounded-xl px-4 py-2 mr-5' onClick={handlePrev}>Prev</div>
        <div className='text-[1em] my-auto mx-0'>Page:{page}</div>
        <div className='bg-[#063977] rounded-xl px-4 py-2 ml-5' onClick={handleNext}>Next</div>
      </div>
    </div>
  )
}

export default Creator

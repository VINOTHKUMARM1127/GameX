import React from 'react'
import { useNavigate } from 'react-router-dom'
import FetchData from '../FetchData/FetchData';

const Trending = () => {
  const navigate = useNavigate();
  const { data, loading } = FetchData({ url: '/games', id: null });
  const datas = data?.results;

  const skleton = () => {
    return (

      <div className='h-[342px]'>
        <div className='bg-[#09152b] animate-pulse rounded-xl
            object-cover w-[220px] h-[270px] mb-2'></div>
        <div className='bg-[#09152b] animate-pulse  text-[1em] text-center 
          pt-3 px-5 pb-3 rounded-xl'></div>
      </div>

    )
  }

  return (
    <>
      <div className='mt-5 hidden md:block'>
        <div className=' text-[30px] font-bold'>Trending Games</div> </div>
      {loading ? (
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {skleton()}
          {skleton()}
          {skleton()}
          {skleton()}
        </div>
      ) : (
        <div className='mt-5 hidden md:block'>
          <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
            {datas.map((cur, index) => index < 4 && (
              <div onClick={() => navigate(`/games/${cur.id}`)}
                key={index} className=' bg-[#063977]  rounded-xl
        group hover:scale-110 transtion-all duration-300 ease-in-out'>
                <img src={cur.background_image} alt={cur.name} className='rounded-tl-xl rounded-tr-xl
            object-cover h-[270px] w-[220px]'/>
                <div className='  text-[1em] text-center pt-3 px-5 pb-3 '>
                  {cur.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Trending

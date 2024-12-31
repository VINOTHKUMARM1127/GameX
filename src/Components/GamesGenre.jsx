import React from 'react'
import FetchData from '../FetchData/FetchData'

const GamesGenre = ({genreId}) => {
    const { data, loading } = FetchData({ url: '/games', id:genreId })
    const dat = data?.results
    console.log(data?.results)
    if (loading) {
        return (<div>Loading...</div>)
    }
  return (
    <div className='mt-5'>
   <div className='text-white text-[30px] font-bold'>Popular Games</div>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
      {dat.map((curitem,index)=>(
        <div className='bg-slate-800 rounded-xl text-white pb-1 text-center
        group hover:scale-110 transtion-all duration-300 ease-in-out'>
            <img src={curitem.background_image} alt={curitem.name} 
            className='w-full h-[130px] md:h-[180px] rounded-xl object-cover ' />
            <div>{curitem.name}</div>
            <div>⭐{curitem.rating}</div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesGenre

import React from 'react'
import FetchData from '../FetchData/FetchData'
import { useNavigate } from "react-router-dom";

const GamesGenre = ({ genreId }) => {
    const { data, loading } = FetchData({ url: '/games', id: genreId })
    const dat = data?.results
    const navigate = useNavigate();
    console.log('Genre',data?.results)
    if (loading) {
        return (<div>Loading...</div>)
    }
    return (
        <div className='mt-5'>
            <div className=' text-[30px] font-bold'>Popular Games</div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
                {dat.map((curitem, index) => (
                    <div 
                    className='bg-[#09152b] rounded-xl  pb-1 text-center
                    group hover:scale-105 transtion-all duration-300 ease-in-out'
                    onClick={() => navigate(`/games/${curitem.id}`)}>
                        <img src={curitem.background_image} alt={curitem.name}
                            className='w-full h-[200px] md:h-[180px] rounded-tl-xl rounded-tr-xl object-cover ' />
                        <div className='font-bold'>{curitem.name}</div>
                        <div>⭐{curitem.rating * 2}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GamesGenre

import React from 'react'
import FetchData from '../FetchData/FetchData'
import { useNavigate } from "react-router-dom";

const GamesGenre = ({ genreId }) => {
    const { data, loading } = FetchData({ url: '/games', id: `&genres=${genreId}` })
    const dat = data?.results
    const navigate = useNavigate();

    const sk = () => {
        return(
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
    return (
        <><div className=' text-[30px] font-bold'>Popular Games</div>
        {loading ? (
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
                {sk()}
                {sk()}
                {sk()}
                {sk()}
                {sk()}
                {sk()}
                {sk()}
                {sk()}
            </div>
        ) :(
        <div className='mt-5'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
                {dat.map((curitem, index) => (
                    <div key={index}
                    className='bg-[#063977] rounded-xl  pb-1 text-center
                    group hover:scale-105 transtion-all duration-300 ease-in-out'
                    onClick={() => navigate(`/games/${curitem.id}`)}>
                        <img src={curitem.background_image} alt={curitem.name}
                            className='w-full h-[200px] md:h-[180px] rounded-tl-xl rounded-tr-xl object-cover ' />
                        <div className='font-bold my-[6px]'>{curitem.name}</div>
                        <div className='mb-2'>⭐{curitem.rating * 2}</div>
                    </div>
                ))}
            </div>
        </div>
        )}
        </>
    )
}

export default GamesGenre

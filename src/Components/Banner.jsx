import React from 'react'
import FetchData from '../FetchData/FetchData';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    const { data, loading } = FetchData({ url: '/games', id: null });
    const datas = data?.results;

    const final = Math.floor(Math.random() * 20);

    return (
        <>
            { loading ? (
                    <div className="relative">
                    <div className="h-[220px] md:h-[350px] w-full object-cover rounded-2xl bg-[#09152b] animate-pulse"></div>
                </div>
                ) : (
                    <div>
                        {datas.slice(final - 1, final).map((item, index) => (
                            <div key={index} className='relative'
                            onClick={()=>{navigate(`/games/${item.id}`)}} >
                                <div className=' font-bold text-[1.5em] absolute bottom-0 p-5
                        bg-gradient-to-t from-slate-900 to-transparent w-full rounded-2xl'>
                                    {item.name}</div>
                                <img src={item.background_image}
                                    alt={item.name}
                                    className='h-[220px] md:h-[350px] w-full object-cover rounded-2xl' />
                            </div>
                        ))
                        }
                    </div >
                )}
        </>
    )
}

export default Banner

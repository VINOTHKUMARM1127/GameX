import React from 'react'
import FetchData from '../FetchData/FetchData'

const Store = () => {
    const { data, loading } = FetchData({ url: '/stores', id: null })
    const st = data?.results

    const text = () =>{
        return(
            <div className='bg-[#09152b] animate-pulse  text-[1em] text-center 
                pt-3 px-5 pb-3 mb-1 rounded-xl'></div>
        )
    }

    const skitem = () => {
        return (
            <div className='pb-1 text-center'>
                <div className='bg-[#09152b] animate-pulse w-full h-[200px] md:h-[180px] 
                rounded-tl-xl rounded-xl object-cover mb-1'></div>
                {text()}
                {text()}
                {text()}
                {text()}
                <div className='bg-[#09152b] animate-pulse  text-[1em] text-center 
                pt-3 px-5 pb-3 rounded-bl-xl rounded-xl mb-1'></div>
            </div>
        )
    }

    return (
        <div className='px-5 my-4'>
            <div className='mb-5 text-[30px] text-center font-bold'>Stores</div>
            {loading ? (
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 mt-3'>
                    {skitem()}
                    {skitem()}
                    {skitem()}
                    {skitem()}
                    {skitem()}
                    {skitem()}
                    {skitem()}
                    {skitem()}
                </div>
            ) : (
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {st.map((items, key) => (
                        <div key={key}
                            className='bg-[#063977] rounded-xl  pb-1 text-center
                    group hover:scale-105 transtion-all duration-300 ease-in-out'>
                            <img className='w-full h-[200px] md:h-[180px] rounded-tl-xl 
                            rounded-tr-xl object-cover '
                                src={items.image_background} alt={items.name} />
                            <div className='font-bold my-[6px] text-[1.1em]'>{items.name}</div>
                            <div className='font-bold'>Games:</div>
                            <div className='mb-2'>{items.games.map((dat) => (
                                <div>{dat.name}</div>
                            ))}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Store

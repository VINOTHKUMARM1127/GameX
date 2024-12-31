import React, { useEffect } from 'react'
import FetchData from '../FetchData/FetchData'

const GenereList = () => {

    const { data, loading } = FetchData('/genres')
    const genreList = data?.results
    console.log(genreList)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="text-white text-[30px] font-bold">Genre</div>
            {genreList.map((item) => (
                <div className='rounded-lg p-2 text-white flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-400'>
                    <img src={item.image_background}
                        className='w-[40px] h-[40px] object-cover rounded-lg ' alt={item.name} />
                    <div className="text-[1rem]">{item.name}</div>
                </div>
            )
            )}
        </div>
    )
}

export default GenereList

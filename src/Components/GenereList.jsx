import React, { useEffect, useState } from 'react'
import FetchData from '../FetchData/FetchData'

const GenereList = () => {
    const [index, SetIndex] = useState(0)
    const { data, loading } = FetchData('/genres')
    const genreList = data?.results
    // console.log(genreList)
    // console.log(index)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div >
            <div className="text-white text-[30px] font-bold ">Genre</div>
            {genreList.map((item,key) => (
                <div key={key} onClick={()=>{SetIndex(key)}}
                 className={` rounded-lg p-2 text-white flex gap-2 items-center group
                mb-2 cursor-pointer hover:bg-gray-400 ${index==key?'bg-gray-700':null}`}>
                    <img src={item.image_background}
                        className='w-[40px] h-[40px] object-cover rounded-lg 
                        group-hover:scale-105 transtion-all ease-out duration-300'
                        alt={item.name} />
                    <div className="text-[1rem] group-hover:font-bold">{item.name}</div>
                </div>
            )
            )}
        </div>
    )
}

export default GenereList

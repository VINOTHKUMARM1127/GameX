import React, { useState } from 'react';
import FetchData from '../FetchData/FetchData';

const GenereList = ({ SetGenreId }) => {
    const [index, setIndex] = useState(0);
    const { data, loading } = FetchData({ url: '/genres', id: null });
    const genreList = data?.results;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className=" text-[30px] font-bold">Genre</div>
            <div className='w-[100%] flex overflow-x-scroll md:flex-col md:w-[90%]'>
                {genreList.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => {
                            setIndex(key);
                            SetGenreId(item.id);
                        }}
                        className={`rounded-lg p-2 pr-12  flex items-center group md:mb-2 cursor-pointer hover:bg-[#4091c9] ${index === key ? 'bg-[#09152b]' : ''
                            }`}
                    >
                        <img
                            src={item.image_background}
                            className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300'
                            alt={item.name}
                        />
                        <div className="text-[1rem] ml-1 group-hover:font-bold">{item.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GenereList;

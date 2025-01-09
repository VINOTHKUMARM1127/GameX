import React, { useState } from 'react';
import FetchData from '../FetchData/FetchData';

const GenereList = ({ SetGenreId }) => {
    const [index, setIndex] = useState(0);
    const { data, loading } = FetchData({ url: '/genres', id: null });
    const genreList = data?.results;

    const Ske = () => {
        return (
            <div className='rounded-lg p-2 bg-[#09152b] h-[56px] animate-pulse
             flex items-center group md:mb-2 cursor-pointer ml-[1px]'>
                <div className='bg-[#063977] animate-pulse w-[40px] h-[40px] 
                object-cover rounded-lg '></div>
                {/* <div className='bg-[#063977] animate-pulse md:w-[200px] text-center 
            ml-[2px] pt-2 px-8 pb-2 rounded-md'></div> */}
            </div>
        )
    }

    return (
        <>
            <div className=" text-[30px] font-bold">Genre</div>
            {loading ? (
                <div className='w-[100%] flex overflow-x-scroll md:flex-col md:w-[90%]'>
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                    {Ske()}
                </div>
            ) : (
                <div>
                    <div className='w-[100%] flex overflow-x-scroll md:flex-col md:w-[90%]'>
                        {genreList.map((item, key) => (
                            <div
                                key={key}
                                onClick={() => {
                                    setIndex(key);
                                    SetGenreId(item.id);
                                }}
                                className={`rounded-lg p-2 pr-12  flex items-center group md:mb-2 cursor-pointer hover:bg-[#295fa1] ${index === key ? 'bg-[#063977]' : ''
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
                </div>)}
        </>
    );
};

export default GenereList;

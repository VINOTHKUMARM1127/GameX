import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../FetchData/FetchData';
import Creator from './Creator';

const CreatorDetails = () => {
    const { id } = useParams();
    const { data, loading } = FetchData({ url: `/creators/${id}`, id: null })

    const skitem = (it) => {
        return (
            <div className={`bg-[#09152b] animate-pulse py-2
                            w-[90vw] md:w-[50vw] lg:w-[60vw] rounded-xl md:mt-[0.5em] mt-[1em]`}></div>
        )
    }

    return (
        <>
            {loading ? (
                <div className=' md:mt-[4em] w-[90%] mx-[auto] my-[2em]'>
                    <div className=' flex flex-col md:flex-row '>
                        <div className='w-[90%]  md:max-w-[320px] h-[400px] object-cover
                     mx-auto my-0em md:mx-[0em] rounded-xl bg-[#09152b] animate-pulse'></div>
                        <div className='md:ml-[3em]'>
                            <div className='bg-[#09152b] animate-pulse pt-3 px-5 pb-3 
                            w-[200px] rounded-xl md:mt-[0.5em] mt-[1em]'></div>
                            <div className='bg-[#09152b] animate-pulse pt-3 px-5 pb-3 
                            w-[100px] rounded-xl md:mt-[0.5em] mt-[1em]'></div>
                            <div className='bg-[#09152b] animate-pulse pt-3 px-5 pb-3 
                            w-[150px] rounded-xl md:mt-[0.5em] mt-[1em]'></div>

                            {skitem()}
                            {skitem()}
                            {skitem()}
                            {skitem()}
                            {skitem()}
                            {skitem()}

                        </div>
                    </div>
                </div>
            ) : (
                <div className='md:mt-[4em] w-[90%] mx-[auto] my-[2em]'>
                    <div className=' flex flex-col md:flex-row '>
                        <img className='w-[90%]  md:max-w-[320px] h-[400px] object-cover mx-auto my-0em md:mx-[0em] rounded-xl '
                            src={data.image} alt={data.name} />

                        <div className='md:ml-[3em]'>
                            <div className='text-[1.5em] md:text-[2em] mt-[0.5em] md:mt-[0em] font-bold'>{data.name}</div>
                            <div className='text-[1.1em] opacity-90'>{data.positions[0].name}</div>
                            <div>
                                <div className='font-bold text-[1.3em] mb-[0.2em]'>Description</div>
                                <div className=" text-[1em] text-justify">
                                <div className='opacity-80' dangerouslySetInnerHTML={{ __html: data.description }} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>)}
            <Creator />
        </>
    )
}

export default CreatorDetails

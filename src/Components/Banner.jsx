import React from 'react'

const Banner = ({datas}) => {
    
    const final = Math.floor(Math.random() * 20)

    return (
        <div>
            {datas.slice(final - 1, final).map((item,index) => (
                <div key={index} className='relative'>
                    <div className='text-white font-bold text-[1.5em] absolute bottom-0 p-5
                        bg-gradient-to-t from-slate-900 to-transparent w-full rounded-2xl'>
                        {item.name}</div>
                    <img src={item.background_image} alt=""
                        className='md:h-[350px] w-full object-cover rounded-2xl' />
                </div>
            ))}
        </div>
    )
}

export default Banner

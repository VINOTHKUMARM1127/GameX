import React from 'react'
import GenereList from '../Components/GenereList'

const Home = () => {
    return (
        <div className=' w-[95%] grid grid-cols-4 p-2 mx-auto my-0'>
            <div className='hidden md:block'>
                <GenereList />
            </div>
            <div className=' col-span-4 md:col-span-3'>
                Genre
            </div>
        </div>
    )
}

export default Home

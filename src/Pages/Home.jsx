import React from 'react'
import GenereList from '../Components/GenereList'
import Banner from '../Components/Banner'
import FetchData from '../FetchData/FetchData'
import Trending from '../Components/Trending'

const Home = () => {
    const { data, loading } = FetchData('/games')
    const datas = data?.results
    console.log(datas)
    if (loading) {
        return (<div>Loading...</div>)
    }
    
    return (
        <div className=' w-[95%] grid grid-cols-4 p-2 mx-auto my-0'>
            <div className='hidden md:block'>
                <GenereList />
            </div>
            <div className=' col-span-4 md:col-span-3'>
                <Banner datas={data?.results}/>
                <Trending datas={data?.results}/>
            </div>
        </div>
    )
}

export default Home

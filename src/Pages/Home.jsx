import React, { useState, useEffect } from 'react';
import GenereList from '../Components/GenereList';
import Banner from '../Components/Banner';
import FetchData from '../FetchData/FetchData';
import Trending from '../Components/Trending';
import GamesGenre from '../Components/GamesGenre';

const Home = () => {
    const [genreId, setGenreId] = useState(4);

    const { data, loading } = FetchData({ url: '/games', id: null });
    const datas = data?.results;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-[95%] grid grid-cols-4 p-2 mx-auto my-0'>
            <div className='hidden md:block'>
                <GenereList SetGenreId={setGenreId} />
            </div>
            <div className='col-span-4 md:col-span-3'>
                <Banner datas={datas} />
                <Trending datas={datas} />
                <GamesGenre genreId={genreId}/>
            </div>
        </div>
    );
};

export default Home;

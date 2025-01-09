import React, { useState, useEffect } from 'react';
import GenereList from '../Components/GenereList';
import Banner from '../Components/Banner';
import Trending from '../Components/Trending';
import GamesGenre from '../Components/GamesGenre';

const Home = () => {
    const [genreId, setGenreId] = useState(4);


    return (
        <div className='w-[95%] grid grid-cols-4 p-2 mx-auto my-0'>
            <div className='hidden md:block'>
                <GenereList SetGenreId={setGenreId} />
            </div>
            <div className='col-span-4 md:col-span-3'>
                <Banner />
                <div className='block md:hidden'>
                <GenereList SetGenreId={setGenreId} />
            </div>
                <Trending />
                <GamesGenre genreId={genreId}/>
            </div>
        </div>
    );
};

export default Home;

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../FetchData/FetchData';
import GamesGenre from '../Components/GamesGenre';

const DetailsPage = () => {
  const { id } = useParams();
  const [expand, setExpand] = useState(false)
  const { data, loading } = FetchData({ url: `/games/${id}`, id: null })
  console.log('Details', data)
 
  const cutDes = (des) => {
    return des?.split(" ").slice(0, 50).join(" ") + (des?.split(" ").length > 50 ? "..." : "");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const num = [4, 51, 3, 5, 10, 2, 40, 14, 7, 11, 83, 59, 1, 15, 6, 19, 28, 34, 17];
  const ran = Math.floor(Math.random() * 18)

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
            src={data.background_image} alt={data.name} />

          <div className='md:ml-[3em]'>
            <div className='text-[1.5em] md:text-[2em] mt-[0.5em] md:mt-[0em] font-bold'>{data.name}</div>
            <div className='text-[1.1em] opacity-90'>{data.genres[0].name}</div>
            <div>
              <div className='font-bold text-[1.3em] mb-[0.2em]'>Description</div>
              <div className=" text-[1em] text-justify">
                {expand ? data.description_raw.slice(0, data.description_raw.indexOf('Español'))
                  : cutDes(data.description_raw.slice(0, data.description_raw.indexOf('Español')))}
              </div>
              <button className="text-blue-200" onClick={() => setExpand(!expand)}>
                {expand ? "Show less" : "Show more"}
              </button>
            </div>

            <div className='flex my-[0.5em]'>
              <div className='font-bold text-[1.1em]'>Developed By:</div>
              <div className=' text-[1em] ml-[1em] opacity-90'>{data.developers[0].name}</div>
            </div> <hr />

            <div className='flex my-[0.5em]'>
              <div className='font-bold text-[1.1em]'>Platforms:</div>
              <div className='flex flex-wrap text-[1em] ml-[1em] opacity-90'>
                {data.platforms.map((it, index) => (
                  <div className='w-120px'>
                    {data.platforms.length > 1 && index !== data.platforms.length - 1 ?
                      `${it.platform.name} ,` :
                      it.platform.name}</div>
                ))}</div>
            </div> <hr />

            <div className='flex my-[0.5em]'>
              <div className='font-bold text-[1.1em]'>Released On:</div>
              <div className=' text-[1em] ml-[1em] opacity-90'>{formatDate(data.released)}</div>
            </div> <hr />

            <div className='flex my-[0.5em]'>
              <div className='font-bold text-[1.1em]'>Stores:</div>
              <div className='flex flex-wrap text-[1em] ml-[1em] opacity-90'>
                {data.stores.map((it, index) => (
                  <div className='w-120px'>
                    {data.stores.length > 1 && index !== data.stores.length - 1 ?
                      `${it.store.name} ,` :
                      it.store.name}</div>
                ))}</div>
            </div> <hr />

          </div>

        </div>
      </div>
      )}
      <div className='w-[90%] mx-[auto] my-[2em]'><GamesGenre genreId={num[ran]} /></div>
    </>
  )
}

export default DetailsPage

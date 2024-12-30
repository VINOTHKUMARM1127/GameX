import React, { useState } from 'react';
import "./GameList.css";
import FetchData from '../../../FetchData/FetchData';

const GameList = ({dat, title}) => {

  const { data, loading } = FetchData(dat);
  const [more, setMore] = useState(10)
  console.log(title,data)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const LoadMoreItem = () => {
    setMore((prev) => prev + 10)
  }

  return (
    <section>
      <div className="title">{title}</div>
      <div className="card-sec" >
        {data.slice(0, more).map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="poster"><img src={item.thumbnail} alt={item.title} /></div>
              <div className="top">
              <div className="tit">{item.title}</div>
                <div className="gen">{item.platform}</div>
              </div>
              
              <div className="bottom">
                <div className="gen">{item.genre}</div>
                <div className="gen">{item.release_date}</div>
              </div>

            </div>
          );
        })}
        <button onClick={() => { LoadMoreItem() }}>Load More</button>
      </div>
    </section>
  );
};

export default GameList;

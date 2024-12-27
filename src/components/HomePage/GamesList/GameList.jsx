import React, { useEffect, useState } from 'react';
import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);

  const dataLoad = async () => {
    try {
      const res = await fetch('/api/api/games');  // The proxy path is used here
      const data = await res.json();
      setGames(data);  // Store data in state to render later
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    dataLoad();  // Fetch the data when the component mounts
  }, []);  // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="title">Game List</div>
      <div className="games-container">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div key={index} className="game-item">
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
            </div>
          ))
        ) : (
          <p>Loading games...</p>
        )}
      </div>
    </>
  );
};

export default GameList;

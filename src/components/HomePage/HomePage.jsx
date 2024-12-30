import React from 'react'
import GameList from './GamesList/GameList'


const HomePage = () => {

  

  return (
    <>
    <GameList dat={"/games?platform=pc"}  title={"PC Games"} />
    <GameList dat={"/games?platform=browser"}  title={"Browser Games"} />
    <GameList dat={"/games?category=battle-royale"}  title={"Battle Royal Games"} />
    <GameList dat={"/games?category=racing"}  title={"Racing Games"} />
    <GameList dat={"/games?category=shooter"}  title={"Shooting Games"} />
    </>
  )
}

export default HomePage

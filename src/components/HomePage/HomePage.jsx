import React from 'react'
import GameList from './GamesList/GameList'


const HomePage = () => {

  

  return (
    <>
    <GameList dat={"/games?platform=pc"}  title={"PC Games"} />
    
    </>
  )
}

export default HomePage

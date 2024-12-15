import React from 'react'
import GameList from './GamesList/GameList'

const HomePage = () => {
  return (
    <>
    <GameList ur="/games" u="&ordering=released" tit="New Released"/>
    <GameList ur="/games" u="&ordering=rated" tit="Top Rated"/>
    <GameList ur="/games" u="&genres=action" tit="New Released"/>
    <GameList ur="/games" u="&genres=3" tit="New Released"/>
    </>
  )
}

export default HomePage

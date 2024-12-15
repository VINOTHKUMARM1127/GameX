import React from 'react'
import FetchData from '../../../FetchData/FetchData'
import "./GameList.css"

const GameList = ({ ur, u, tit }) => {

    const { data, loading } = FetchData(ur, u)
    console.log(data?.results)

    return (
        <>
        <div className="title">{tit}</div>
        <div className="com">
            {data?.results.map((curVal, key) => {
                return (
                    <div className='card' key={key}>
                        <div className="img-block">
                            <img src={curVal.background_image} alt={curVal.name} />
                        </div>
                        <div className="text-block">
                            <div className="name">{curVal.name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default GameList

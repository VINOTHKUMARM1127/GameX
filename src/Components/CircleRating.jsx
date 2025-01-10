import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ( {rating} ) => {
    return (
        <div className="circleRating relative top-[-25px] md:top-[-30px] w-[40px] md:w-[15%] left-[0px]">
            <CircularProgressbar className='bg-white rounded-[50%] p-[2px]'
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                        textColor: 'black',
                        textSize: '30px',
                        textfontWeight: 'bold',
                })}
            />
        </div>
    );
};

export default CircleRating

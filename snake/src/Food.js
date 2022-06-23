import React from 'react';


const Food = ({ food, picture, imgRandom }) => {

    // const incrementSnake = () => {
    //
    //     setSnakeDots((prev) => ({
    //
    //
    //     }))
    // }

    const style = {
        left: `${food[0]}%`,
        top: `${food[1]}%`
    }

    return (
        <>
            <img className="snake-food" style={style} src={ imgRandom(picture) } alt="Food" />
        </>
    )
}

export default Food;
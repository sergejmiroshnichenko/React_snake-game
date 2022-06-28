import React from 'react';
import PropTypes from "prop-types";


const Food = ({ food, picture, imgRandom }) => {

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

Food.propTypes = {
    imgRandom: PropTypes.func,
    food:PropTypes.array,
}

Food.defaultProps = {
    imgRandom: () => {},
    food: [],
}

export default Food;
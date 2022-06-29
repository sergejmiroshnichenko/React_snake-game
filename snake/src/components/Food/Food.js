import React from 'react';
import PropTypes from "prop-types";
import styles from './Food.module.scss'


const Food = ({ food, picture, imgRandom }) => {

    const style = {
        left: `${food[0]}%`,
        top: `${food[1]}%`
    }

    return (
        <>
            <img className={styles.snakeFood} style={style} src={ imgRandom(picture) } alt="Food" />
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
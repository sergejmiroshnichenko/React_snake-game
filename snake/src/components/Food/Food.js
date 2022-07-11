import React from 'react';
import PropTypes from "prop-types";
import styles from './Food.module.scss'


const Food = ({food}) => {

    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const grape = './image/grape.svg';

    const fruitFood = [apple, cherry, grape];


    const picture = fruitFood.map(img => img);

    const imgRandom = (imgArr) => {
        return imgArr[Math.floor(Math.random() * imgArr.length)];
    }

    const style = {
        left: `${food[0]}%`,
        top: `${food[1]}%`
    }

    return (
        <>
            <img className={styles.snakeFood} style={style} src={imgRandom(picture)} alt="Food"/>
        </>
    )
}

Food.propTypes = {
    food: PropTypes.array,
}

Food.defaultProps = {
    food: [],
}

export default Food;
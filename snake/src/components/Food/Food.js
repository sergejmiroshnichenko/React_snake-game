import React from 'react';
import PropTypes from "prop-types";
import styles from './Food.module.scss'


const Food = ({food}) => {

    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const grape = './image/grape.svg';

    // const fruitFood = [apple, cherry, grape];

    const fruitFood = [
        {
            fruit: apple,
            count: 1
        },
        {
            fruit: cherry,
            count: 5
        },
        {
            fruit: grape,
            count: 10
        }
    ]

    const picture = fruitFood.map(img => img.fruit);
    console.log(picture)

    const imgRandom = (imgArr) => {
        console.log(imgArr)
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
    imgRandom: PropTypes.func,
    food: PropTypes.array,
}

Food.defaultProps = {
    imgRandom: () => {
    },
    food: [],
}

export default Food;
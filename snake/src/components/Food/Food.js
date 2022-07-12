import React, {useEffect, useMemo} from 'react';
import PropTypes from "prop-types";
import styles from './Food.module.scss';


const Food = ({foodCoordinates, snakeDots, setFoodCount}) => {

    const fruitFood = [
        {
            fruitImg : './image/apple.svg',
            count : 5,
        },
        {
            fruitImg : './image/cherry.svg',
            count : 1,
        },
        {
            fruitImg : './image/grape.svg',
            count : 10,
        }
    ]


    const imgRandom = (imgArr) => {
            return imgArr[Math.floor(Math.random() * imgArr.length)];
    };

    const fruit = useMemo(() => imgRandom(fruitFood), [snakeDots.length]);

    useEffect(() => {
        setFoodCount(fruit.count);
    },[fruit]);


    const style = {
        left: `${foodCoordinates[0]}%`,
        top: `${foodCoordinates[1]}%`
    }

    return (
        <>
            <img className={styles.snakeFood} style={style} src={fruit.fruitImg} alt="food"/>
        </>
    )
}

Food.propTypes = {
    food: PropTypes.array,
    snakeDots: PropTypes.array.isRequired,
    setFoodCount: PropTypes.func
}

Food.defaultProps = {
    food: [],
    setFoodCount: () => {}
}

export default Food;
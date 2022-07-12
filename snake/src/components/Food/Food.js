import React, {useEffect, useMemo} from 'react';
import PropTypes from "prop-types";
import styles from './Food.module.scss';


const Food = ({food, snakeDots, setFoodCount}) => {

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
        left: `${food[0]}%`,
        top: `${food[1]}%`
    }

    return (
        <>
            <img className={styles.snakeFood} style={style} src={fruit.fruitImg} alt="Food"/>
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
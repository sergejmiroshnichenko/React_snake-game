import Snake from "../../components/Snake/Snake";
import Food from "../../components/Food/Food";
import React, {useEffect, useState} from "react";
import styles from "./GamePage.module.scss"
import PropTypes from "prop-types";


const GamePage = ({firstName}) => {

    const size = 400;
    const [start, setStart] = useState(false);
    const [score, setScore] = useState(0);
    const [foodCoordinates, setFoodCoordinates] = useState([0, 8]);
    const [foodCount, setFoodCount] = useState(0);
    const [snakeDots, setSnakeDots] = useState([[0, 0], [4, 0], [8, 0]]);


    const toggleStart = () => {
        setStart(!start)
    }

    useEffect(() => {
        setScore(score + foodCount)
    }, [foodCoordinates]);

    const check = start ? 'STOP' : 'START'

    return (
        <section className={styles.section}>
            <div className={styles.page}>
                <div className={styles.condition}>
                    <img src="./image/grape.svg" alt="food"/> - 10
                    <img src="./image/apple.svg" alt="food"/> - 5
                    <img src="./image/cherry.svg" alt="food"/> - 1
                </div>
                <h2>{firstName} : <span>{score}</span></h2>
                <div className='game-area'>
                    <Snake size={size} foodCoordinates={foodCoordinates} setFoodCoordinates={setFoodCoordinates}
                           score={score} setScore={setScore}
                           toggleStart={toggleStart} start={start} snakeDots={snakeDots} setSnakeDots={setSnakeDots}/>
                    <Food foodCoordinates={foodCoordinates} snakeDots={snakeDots} setFoodCount={setFoodCount}/>
                </div>
                <button className={check} onClick={toggleStart}>{check}</button>
            </div>
        </section>
    )
}

GamePage.propTypes = {
    firstName: PropTypes.string.isRequired,
}

export default GamePage;
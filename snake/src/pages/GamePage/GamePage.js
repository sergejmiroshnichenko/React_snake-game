import Snake from "../../components/Snake/Snake";
import Food from "../../components/Food/Food";
import React, {useEffect, useState} from "react";
import styles from "./GamePage.module.scss"
import PropTypes from "prop-types";


const GamePage = ({firstName}) => {

    const size = 400;
    const [start, setStart] = useState(false);
    const [score, setScore] = useState(0);
    const [food, setFood] = useState([0, 8]);
    const [foodCount, setFoodCount] = useState(0);
    const [snakeDots, setSnakeDots] = useState([[0, 0], [4, 0], [8, 0]]);


    const toggleStart = () => {
        setStart(!start)
    }

    useEffect(() => {
        setScore(score + foodCount)
    }, [food]);

    const check = start ? 'STOP' : 'START'

    return (
        <section className={styles.section}>
            <div className={styles.page}>
                <h2>{firstName} : <span>{score}</span></h2>
                <div className='game-area'>
                    <Snake size={size} food={food} setFood={setFood} score={score} setScore={setScore}
                           toggleStart={toggleStart} start={start} snakeDots={snakeDots} setSnakeDots={setSnakeDots}/>
                    <Food food={food} snakeDots={snakeDots} setFoodCount={setFoodCount}/>
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
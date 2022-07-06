import Snake from "../../components/Snake/Snake";
import Food from "../../components/Food/Food";
import React, {useEffect, useState} from "react";
import styles from "./GamePage.module.scss"


const GamePage = ({firstName}) => {

    const size = 400;
    const [start, setStart] = useState(false);
    const [score, setScore] = useState(-1);
    const [food, setFood] = useState([0, 8]);


    const toggleStart = () => {
        setStart(!start)
    }

    useEffect(() => {
        setScore(score + 1)
    }, [food]);

    const check = start ? 'STOP' : 'START'

    return(
        <section className={styles.section}>
            <div className={styles.page}>
                <h2>{firstName} : <span>{score}</span></h2>
                <div className='game-area' style={{width: `${size}px`, height: `${size}px`}}>
                    <Snake size={size} food={food} setFood={setFood} score={score} setScore={setScore} toggleStart={toggleStart} start={start}/>
                    <Food food={food} />
                </div>
                <div className='start'>
                    <button className={check} onClick={toggleStart}>{check}</button>
                </div>
            </div>
        </section>
    )
}

export default GamePage;
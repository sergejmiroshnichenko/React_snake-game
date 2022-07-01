import Snake from "../../components/Snake/Snake";
import Food from "../../components/Food/Food";
import React, {useEffect, useState} from "react";
import styles from "./GamePage.module.scss"
import {useNavigate} from "react-router-dom";
import {ReactComponent as ArrowLeft} from "../../assets/arrow-left.svg";


const GamePage = () => {

    let navigate = useNavigate()

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
            <button onClick={() => {navigate('/')}}> <ArrowLeft/> </button>
            <h2>Score : {score}</h2>
            <div className='game-area' style={{width: `${size}px`, height: `${size}px`}}>
                <Snake size={size} food={food} setFood={setFood} score={score} setScore={setScore} toggleStart={toggleStart} start={start}/>
                <Food food={food} />
            </div>
            <div className='start'>
                <button className={check} onClick={toggleStart}>{check}</button>
            </div>
        </section>
    )
}

export default GamePage;
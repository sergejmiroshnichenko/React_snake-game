import './App.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as GITHUB } from '../src/assets/github.svg'
import Snake from "./components/Snake/Snake";
import Food from './components/Food/Food';



const App = () => {

    const [food, setFood] = useState([0, 8]);
    const [score, setScore] = useState(-1);
    const [modal, setModal] = useState(false);


    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    useEffect(() => {
        setScore(score + 1)
    }, [food]);


    const WIDTH = 400;
    const HEIGHT = 400;
    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const watermelon = './image/watermelon.svg';


    const fruitFood = [apple, cherry, watermelon];
    let picture = fruitFood.map(img => img);

    const imgRandom = (imgArr) => imgArr[Math.floor(Math.random() * imgArr.length)];

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Score : { closeModal ? score : 0 }</h1>
            <div className="game-area" style={{width: `${WIDTH}px`, height: `${HEIGHT}px`}}>
                <Snake width={WIDTH} food={food} setFood={setFood} score={score} setScore={setScore} modal={modal} setModal={setModal} openModal={openModal} closeModal={closeModal} />
                <Food food={food} picture={picture} imgRandom={imgRandom}/>
            </div>

            <footer className='footer'>
                <p>© by Sergej Miroshnichenko</p>
                <div style={{alignItems: 'baseline'}}><a className='footer-github' href="https://github.com/sergejmiroshnichenko?tab=repositories"><GITHUB/> Github </a></div>
                <p>2022</p>
            </footer>
        </>
    );
}

export default App;

import './App.css';
import React, {useState, useEffect} from 'react';
import {ReactComponent as GITHUB} from '../src/assets/github.svg'
import Snake from "./components/Snake/Snake";
import Food from './components/Food/Food';


const App = () => {


    const WIDTH = 400;
    const HEIGHT = 400;



    const [food, setFood] = useState([0, 8]);
    const [score, setScore] = useState(-1);


    useEffect(() => { setScore(score + 1) }, [food]);


    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const watermelon = './image/watermelon.svg';

    const fruitFood = [
        {
            img: apple,
            exp: 1,
        },
        {
            img: cherry,
            exp: 2,
        },
        {
            img: watermelon,
            exp: 5,
        }
    ]


    // const img = [apple, cherry, watermelon];
    let picture = fruitFood.map(({img}) => img);

    const imgRandom = (imgArr) => imgArr[Math.floor(Math.random() * imgArr.length)];
    console.log(imgRandom(picture));

//
//     useEffect(() => {
//         for (let i = fruitFood.length - 1; i > 0; i--) {
//             let tmp = fruitFood[i];
//             let rnd = Math.floor(Math.random() * (i + 1));
//             fruitFood[i] = fruitFood[rnd];
//             fruitFood[rnd] = tmp;
//         }
//         return setTest(fruitFood[0])
// }, [])
//
//
// console.log(test?.img)


// const [isPaused, setIsPaused] = useState(false);


//
// const stopSnake = () => {
//     console.log(!isPaused);
//     if (!isPaused) {
//         clearTimeout(timerId);
//         setIsPaused(!isPaused)
//     } else {
//
//         // setTimeout(() => {
//         //   return movement
//         // }, 500)
//         // setIsPaused(isPaused)
//
//         console.log(3);
//
//         snakeMove();
//     }
// }


return (
    <>
        <h1 style={{textAlign: 'center'}}>Score : {score}</h1>
        <div className="game-area" style={{width: `${WIDTH}px`, height: `${HEIGHT}px`}}>
            <Snake width={WIDTH} food={food} setFood={setFood} score={score}/>
            <Food food={food} picture={picture} imgRandom={imgRandom} />
        </div>
        <footer className='footer'>
            <p>© by Sergej Miroshnichenko</p>
            <div style={{alignItems: 'baseline'}}><a className='footer-github'
                                                     href="https://github.com/sergejmiroshnichenko?tab=repositories">
                <GITHUB/> Github </a></div>
            <p>2022</p>
        </footer>
    </>

);
}

export default App;

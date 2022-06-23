import './App.css';
import React, {useEffect, useState} from 'react';
import {ReactComponent as GITHUB} from '../src/assets/github.svg'
import Snake from "./Snake";
import Food from './Food';


const App = () => {

    const SPEED = 500;
    const WIDTH = 400;
    const HEIGHT = 400;
    const AVAILABLE_MOVES = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Enter'];


    const [snakeDots, setSnakeDots] = useState([[0, 0], [4, 0], [8, 0]]);
    const [movement, setMovement] = useState(AVAILABLE_MOVES[0]);
    const [isPaused, setIsPaused] = useState(false);
    const [food, setFood] = useState([0, 8]);
    const [timerId, setTimerId] = useState(null);


    const apple = './image/apple.svg';
    const cherry = './image/cherry.svg';
    const watermelon = './image/watermelon.svg';

    const img = [apple, cherry, watermelon];
    let picture = img.map(item => item)

    const imgRandom = (imgArr) => imgArr[Math.floor(Math.random() * imgArr.length)];
    // console.log(imgRandom(picture));


    const getRandomCoordinates = () => {

        let x;
        let y;
        do {
            let min = 1;
            let max = 98;
            x = Math.floor((Math.random() * (max - min + 2)+min) / 4) * 4;
            y = Math.floor((Math.random() * (max - min + 2)+min) / 4) * 4;
        } while (snakeDots.some(elem => elem[0] === [x, y] && elem[1] === [x, y]));
        setFood([x, y]);
    }

    useEffect(() => {
        snakeMove();
    }, [snakeDots]);

    const stopSnake = () => {
        console.log(!isPaused);
        if (!isPaused) {
            clearTimeout(timerId);
            setIsPaused(!isPaused)
        } else {

            // setTimeout(() => {
            //   return movement
            // }, 500)
            // setIsPaused(isPaused)

            console.log(3);

            snakeMove();
        }
    }

    const forTimer = () => {
        const newSnake = [...snakeDots];
        let move = [];

        switch (movement) {
            case AVAILABLE_MOVES[0]:
                move = [4, 0];
                break;
            case AVAILABLE_MOVES[1]:
                move = [-4, 0];
                break;
            case AVAILABLE_MOVES[2]:
                move = [0, -4];
                break;
            case AVAILABLE_MOVES[3]:
                move = [0, 4];
                break;
            case AVAILABLE_MOVES[4]:
                return stopSnake()
        }

        const head = [
            checkBorder(newSnake[newSnake.length - 1][0] + move[0]),
            checkBorder(newSnake[newSnake.length - 1][1] + move[1]),
        ];

        newSnake.push(head);
        let connectIndex = 1;
        if (head[0] === food[0] && head[1] === food[1]) {
            connectIndex = 0;
            getRandomCoordinates();
            imgRandom(picture)
        }
        setSnakeDots(newSnake.slice(connectIndex));


        snakeDots.forEach((dot) => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                alert('Game over');
            }
        });
    }


    const snakeMove = () => {

        const timerId = setTimeout(forTimer, SPEED)

        setTimerId(timerId);
    }

    const checkBorder = position => {
        switch (true) {
            case position >= WIDTH/4:
                return 0;
            case position < 0:
                return WIDTH/4 -4;
            default:
                return position;
        }
    }

    const handleKeyDown = (event) => {
        const index = AVAILABLE_MOVES.indexOf(event.key);
        if (index > -1) {
            setMovement(AVAILABLE_MOVES[index]);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    }, []);


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Score : {snakeDots.length}</h1>
            <div className="game-area" style={{ width: `${WIDTH}px`, height: `${HEIGHT}px` }}>
                <Snake snakeDots={snakeDots} />
                <Food food={food}  picture={picture}  imgRandom={imgRandom} />
            </div>
            <footer className='footer'>
                <p>© by Sergej Miroshnichenko</p>
                <div style={{ alignItems: 'baseline' }}><a className='footer-github'
                                                           href="https://github.com/sergejmiroshnichenko?tab=repositories">
                    <GITHUB /> Github </a></div>
                <p>2022</p>
            </footer>
        </>

    );
}

export default App;

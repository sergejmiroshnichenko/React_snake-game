import React, {useEffect, useState} from 'react';
import Modal from '../../components/Modal/Modal'


const Snake = ({width, food, setFood, score}) => {

    let SPEED = 500;
    const AVAILABLE_MOVES = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];


    const [movement, setMovement] = useState(AVAILABLE_MOVES[0]);
    const [timerId, setTimerId] = useState(false);
    const [snakeDots, setSnakeDots] = useState([[0, 0], [4, 0], [8, 0]]);
    const [modal, setModal] = useState(false);
    const [pause, setPause] = useState(false);


    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }


    const getRandomCoordinates = () => {

        let x;
        let y;
        do {
            let min = 1;
            let max = 98;
            x = Math.floor((Math.random() * (max - min + 2) + min) / 4) * 4;
            y = Math.floor((Math.random() * (max - min + 2) + min) / 4) * 4;
        } while (snakeDots.some(elem => elem[0] === [x, y] && elem[1] === [x, y]));
        setFood([x, y]);
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
            default:
                move = [4, 0]
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
        }
        setSnakeDots(newSnake.slice(connectIndex));


        snakeDots.forEach((dot) => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                openModal();
                snakeStop()
                // return () => {window.location.reload()}
            }
        });
    }

    // const snakeMove = () => {
    //     const timerId = setTimeout(forTimer, (score > 4 ? SPEED = 200 : SPEED = 500));
    //     setTimerId(timerId);
    // }


    // useEffect(() => {
    //     !modal && snakeMove();
    // }, [snakeDots]);


    useEffect(() => {
        const timerId = setTimeout(() => {
           pause && forTimer (score > 4 ? SPEED = 200 : SPEED = 500);
            setTimerId(timerId)
        });

        return () => {
            clearTimeout(timerId);
        };
    }, [pause, snakeDots]);


    const snakeStop = () => {
        setPause(false)
    }

    const snakeGame = () => {
        setPause(true)
    }


    const checkBorder = position => {
        switch (true) {
            case position >= width / 4:
                return 0;
            case position < 0:
                return width / 4 - 4;
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
            {modal && <Modal text={'Game over'} score={score} closeModal={closeModal}/>}
            {snakeDots.map((dot, index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                }
                return (

                    <div className='snake-dot' style={style} key={index}></div>
                )
            })}
            <div className='movement'>
                <button className='start' onClick={snakeGame}>START</button>
                <button className='stop' onClick={snakeStop}>STOP</button>
            </div>
        </>
    )
}

export default Snake;
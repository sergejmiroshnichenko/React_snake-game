import React, {useEffect, useState} from 'react';
import Modal from '../../components/Modal/Modal'
import PropTypes from "prop-types";
import styles from './Snake.module.scss';
import {ReactComponent as ArrowRight} from "../../assets/arrow-right.svg";


const Snake = ({size, food, setFood, score, setScore, start, toggleStart}) => {

    const AVAILABLE_MOVES = ['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'];


    const [movement, setMovement] = useState(AVAILABLE_MOVES[0]);
    const [timerId, setTimerId] = useState(false);
    const [snakeDots, setSnakeDots] = useState([[0, 0], [4, 0], [8, 0]]);
    const [modal, setModal] = useState(false);

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


    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        setScore(0)
    }

    const rightMove = () => {
        setMovement(AVAILABLE_MOVES[0])
    }

    const leftMove = () => {
        setMovement(AVAILABLE_MOVES[1])
    }

    const upMove = () => {
        setMovement(AVAILABLE_MOVES[2])
    }

    const downMove = () => {
        setMovement(AVAILABLE_MOVES[3])
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
                toggleStart()
                setSnakeDots([[0, 0], [4, 0], [8, 0]]);
            }
        });
    }

    useEffect(() => {
        let SPEED = score > 4 ? 200 : 500;
        const timer = setTimeout(() => {
            start && forTimer();
            setTimerId(timerId)
        }, SPEED);

        return () => {
            clearTimeout(timer);
        };
    }, [start, snakeDots]);


    const checkBorder = position => {
        switch (true) {
            case position >= size / 4:
                return 0;
            case position < 0:
                return size / 4 - 4;
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
            <button className={styles.right} onClick={rightMove}><ArrowRight/></button>
            <button className={styles.up} onClick={upMove}><ArrowRight/></button>
            <button className={styles.left} onClick={leftMove}><ArrowRight/></button>
            <button className={styles.down} onClick={downMove}><ArrowRight/></button>
            {modal && <Modal text={'Game over'} score={score} closeModal={closeModal}/>}
            {snakeDots.map((dot, index) => {

                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                }
                return (
                    <div className={styles.snakeDot} style={style} key={index}> </div>
                )
            })}
        </>
    )
}


Snake.propTypes = {
    setFood: PropTypes.func,
    setScore: PropTypes.func,
    toggleStart: PropTypes.func,
    size: PropTypes.number,
    food: PropTypes.array,
    score: PropTypes.number,
    start: PropTypes.bool.isRequired
}

Snake.defaultProps = {
    setFood: () => {
    },
    setScore: () => {
    },
    toggleStart: () => {
    },
    size: 400,
    score: 0,
    food: [],
}

export default Snake;
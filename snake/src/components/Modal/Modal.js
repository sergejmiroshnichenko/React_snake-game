
import styles from'./Modal.module.scss';
import {useEffect} from "react";
import PropTypes from 'prop-types';


const Modal = ({ closeModal, text, score }) => {

    useEffect(() => {
        document.body.classList.add('scroll-lock');
        return () => {
            document.body.classList.remove('scroll-lock');
        }
    }, [])

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <p className={styles.question}> {text} </p>
                    <p className={styles.answer}> score : {score} </p>
                    <p className={styles.continue}> Continue ? </p>
                </div>

                <div className={styles.btnBlock}>
                    <button onClick={ closeModal} className={styles.btnSuccess} type='button'> Yes</button>
                    <button className={styles.btnDanger} type='button' onClick={closeModal}> No </button>
                </div>
            </div>
        </div>
    )
};


Modal.propTypes = {
    closeModal: PropTypes.func,
    text:PropTypes.string,
    score:PropTypes.number,
    type: PropTypes.oneOf(['submit', 'button'])
}

Modal.defaultProps = {
    closeModal: () => {},
    text: '',
    score: 0
}


export default Modal;
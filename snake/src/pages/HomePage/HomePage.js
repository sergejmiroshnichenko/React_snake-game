import React from "react";
import {ReactComponent as GITHUB} from "../../assets/github.svg";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";


const HomePage = () => {

    let navigate = useNavigate();

    return (
        <section className='background'>
            <div className={styles.authorisation}>
                <div className={styles.input}>
                    <input className={styles.placeholder} type="text" placeholder='input your name'/>
                </div>
                <div className={styles.btn}>
                     <button className={styles.submit} onClick={() => {
                        navigate('./game')
                    }} type='submit'>Play
                    </button>
                </div>
            </div>

            <footer className='footer'>
                <p>© by Sergej Miroshnichenko</p>
                <div style={{alignItems: 'baseline'}}>
                    <a href="https://github.com/sergejmiroshnichenko?tab=repositories"><GITHUB/> Github </a></div>
                <p>2022</p>
            </footer>
        </section>
    )
}

export default HomePage;
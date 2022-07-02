import React, {useEffect, useState} from "react";
import {ReactComponent as GITHUB} from "../../assets/github.svg";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";


const HomePage = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Login cannot be empty');
    const [loginValid, setLoginValid] = useState(false);

    useEffect(() => {
        if(passwordError){
            setLoginValid(false)
        } else {
            setLoginValid(true)
        }

    },[passwordError])

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 3 ){
            setPasswordError('Login must be at least 3 letters');
            if(!e.target.value){
                setPasswordError('Login cannot be empty');
            }
        } else{
            setPasswordError('')
        }
    }

    const blurHandle = (e) => {
        e.target.name && setPasswordDirty(true);
    }

    return (
        <section className='background'>
            <div className={styles.authorisation}>
                <div className={styles.input}>
                    <input value={password}
                           onChange={e=>passwordHandler(e)}
                           onBlur={e => blurHandle(e)}
                           className={styles.placeholder}
                           name='password'
                           type="text"
                           placeholder='Enter your name...'/>
                    {(passwordDirty && passwordError) && <div className={styles.error} style={{color:'red'}}>{passwordError}</div>}
                </div>
                <div className={styles.btn}>
                    <button disabled={!loginValid}
                            className={styles.submit}
                            onClick={() => {
                        navigate('./game')
                    }} type='submit'> Play </button>
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
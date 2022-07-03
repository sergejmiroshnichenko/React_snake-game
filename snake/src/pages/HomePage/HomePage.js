import React from "react";
import {ReactComponent as GITHUB} from "../../assets/github.svg";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const HomePage = () => {

    const navigate = useNavigate();

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        navigate('./game');
        reset()
        alert(JSON.stringify(data));
    }


    return (
        <section className='background'>
            <div className={styles.authorisation}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.input}>
                        <input
                            {...register('firstName', {
                                required: 'Login cannot be empty',
                                minLength: {
                                    value: 3,
                                    message: 'Login must be at least 3 letters'
                                },
                                pattern: {
                                    value: /^[a-zA-Z]+$/g,
                                    message: 'Login must be only english letters'
                                }
                            })}
                            className={styles.placeholder}
                            type="text"
                            placeholder='Enter your name...'
                        />
                        <div className={styles.field}>{errors?.firstName && <p style={{color: 'red'}}>{errors?.firstName?.message}</p>}</div>
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.submit} type="submit" disabled={!isValid}>Play</button>
                        {/*        onClick={() => {*/}
                        {/*            navigate('./game')*/}
                        {/*        }}*/}
                    </div>
                </form>
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
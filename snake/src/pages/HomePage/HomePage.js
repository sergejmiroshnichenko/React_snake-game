import React from "react";
import {ReactComponent as GITHUB} from "../../assets/github.svg";
import styles from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";


const HomePage = ({setFirstName}) => {

    const navigate = useNavigate();

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        navigate('./game');
        reset();
        setFirstName(data.firstName);
        console.log(data);
    }

    return (
        <section className='background'>
            <form className={styles.authorisation} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <input
                        {...register('firstName', {
                            required: 'please enter your name',
                            minLength: {
                                value: 3,
                                message: 'at least 3 english letters'
                            },
                            pattern: {
                                value: /^[a-zA-Z]+$/g,
                                message: 'only english letters'
                            }
                        })}
                        className={styles.placeholder}
                        type="text"
                        placeholder='Enter your name...'
                    />
                    <p className={styles.error}>{errors?.firstName && errors?.firstName?.message}</p>
                </div>
                <div style={{margin: '0 auto'}}>
                    <button className={styles.submit}
                            type="submit"
                            disabled={!isValid}>Play</button>
                </div>

            </form>

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
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"


const Header = () => {

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/game">Game</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Header

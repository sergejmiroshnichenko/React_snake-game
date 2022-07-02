import './App.css';
import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../../Routes/Routes";
import Header from "../Header/Header";


const App = () => {
    return (
        <Router>
            <Header/>
            <AppRoutes/>
        </Router>
    );
}

export default App;
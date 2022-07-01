import React from 'react';
import {Routes, Route} from 'react-router-dom';
import GamePage from "../pages/GamePage/GamePage";
import HomePage from "../pages/HomePage/HomePage";


const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/"
                   element={<HomePage />}
            />
            <Route path="/game"
                   element={<GamePage/>}
            />
        </Routes>
    )
}

export default AppRoutes;
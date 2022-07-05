import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import GamePage from "../pages/GamePage/GamePage";
import HomePage from "../pages/HomePage/HomePage";



const AppRoutes = () => {

const [firstName, setFirstName] = useState( '');

    return(
        <Routes>
            <Route path="/"
                   element={<HomePage setFirstName={setFirstName} />}
            />
            <Route path="/game"
                   element={<GamePage firstName={firstName}/>}
            />
        </Routes>
    )
}

export default AppRoutes;
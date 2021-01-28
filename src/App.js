import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import './App.css';
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

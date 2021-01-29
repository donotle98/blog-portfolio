import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import Blog from './Blog/Blog';
import './App.css';
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
                <Route exact path='/blogs'>
                    <Blog />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

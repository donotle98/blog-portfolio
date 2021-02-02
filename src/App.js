import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
                <Redirect path='*' to='/'></Redirect>
            </Switch>
        </BrowserRouter>
    );
};

export default App;

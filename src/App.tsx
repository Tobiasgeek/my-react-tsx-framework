import React from 'react';
import { Container } from '@material-ui/core'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.scss';
import Header from './layout/header';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import Verify from './views/Verify';


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Container maxWidth="xl">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/forgot">
                            <ForgotPassword />
                        </Route>
                        <Route path="/verify/:code">
                            <Verify />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
};

export default App;

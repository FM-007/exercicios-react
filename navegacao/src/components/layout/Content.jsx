import React from 'react';
import './Content.css';
import { Switch, Route } from "react-router-dom";
import About from '../../views/exemples/About';
import Home from '../../views/exemples/Home';
import Param from '../../views/exemples/Param';
import NotFound from '../../views/exemples/NotFound';

const Content = props => (

    <main className='content'>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
);

export default Content;
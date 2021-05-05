import React from 'react';
import './App.css';
import Menu from './main/Menu';
import Content from './main/Content';
import { BrowserRouter as Router } from 'react-router-dom';


export default function App(props) {

    return (

        <div className="app">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>

    )
}
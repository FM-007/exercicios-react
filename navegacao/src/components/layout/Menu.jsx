import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = props => (

    <aside className='menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/param/1">Parametro #01</Link>
                </li>
                <li>
                    <Link to="/param/2">Parametro #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/nao-existe">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Menu;
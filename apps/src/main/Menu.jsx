import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = props => {

    return(
        <aside className='menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/01">#01 - Primeiro componente</Link>                    
                    </li>
                    <li>
                        <Link to="/02">#02 - Componentes com Parametros</Link>                    
                    </li>
                    <li>
                        <Link to="/03">#03 - Fragmentos</Link>                    
                    </li>
                    <li>
                        <Link to="/04">#04 - Dessafio Aleatorio</Link>                    
                    </li>
                    <li>
                        <Link to="/05">#05 - Componente com Filho</Link>                    
                    </li>
                    <li>
                        <Link to="/06">#06 - Repetição</Link>                    
                    </li>
                    <li>
                        <Link to="/07">#07 - Desafio Repetição</Link>                    
                    </li>
                    <li>
                        <Link to="/08">#08 - Condicionais com operador ternario</Link>                    
                    </li>
                    <li>
                        <Link to="/09">#09 - Condicionais com IF e ELSE</Link>                    
                    </li>
                    <li>
                        <Link to="/10">#10 - Comunicação Direta</Link>                    
                    </li>
                    <li>
                        <Link to="/11">#11 - Comunicação Indireta</Link>                    
                    </li>
                    <li>
                        <Link to="/12">#12 - Componente Controlado</Link>                    
                    </li>
                    <li>
                        <Link to="/13">#13 - Contador</Link>                    
                    </li>
                    <li>
                        <Link to="/14">#14 - Desafio Mega-Sena</Link>                    
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;
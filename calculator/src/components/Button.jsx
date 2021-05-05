import React from 'react';
import './Button.css';

export default props => {

    // Se as propiedades em azul forem passadas, suas respectivas className serão usadas
    let classes = 'button ';
    classes += props.operation ? 'operation' : '';
    classes += props.double ? 'double' : '';
    classes += props.triple ? 'triple' : '';

    return (

        <button className={classes} onClick={e => props.click && props.click(props.label)} >
            {props.label}
        </button>
    )
}

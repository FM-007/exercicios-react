import React from 'react';
import './Card.css';

export default props => {

    const style = {
        backgroundColor: props.color || '#f00',
    }

    return (

        <div className="card" style={style}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}{/* Passando elementos filhos como props */}
            </div>
        </div>

    )

}


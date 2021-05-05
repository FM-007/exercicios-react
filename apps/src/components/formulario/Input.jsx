import React, { useState } from  'react';
import "./Input.css";

export default props => {

    const [valor, setValor] = useState('Inicial');

    function quandoMudar (e){
        setValor(e.target.value);
    }

    return (

        <div className="input">
            <h2>{valor}</h2>
            <div style={{margin: '10px'}}>
                <input value={valor} onChange={quandoMudar} style={{margin: '5px 0'}} />
                <input value={valor} readOnly />
                <input value={undefined} style={{margin: '5px 0'}} />
            </div>
        </div>
    )
}
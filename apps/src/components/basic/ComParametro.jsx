import React from 'react'


export default function ComParametro(props) {

    return (

        <div>

            <h2>Nome: { props.nome }</h2>
            <p>
                { props.situacao } com 
                nota { props.nota }, esta foi a nota máxima.
            </p><br/>
            
        </div>

    )
}
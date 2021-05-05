import React from 'react';

export default (props) => {

    const isPar = props.numero % 2 === 0;

    return (

        <div>
            <h2>Imprime Par ou Impar de acordo com o parametro:</h2><br/>
            <span>Esse numero é </span>
            {isPar ?                 
                <span>Par </span> :
                <span>Impar</span>
            }
            
        </div>
    )
}
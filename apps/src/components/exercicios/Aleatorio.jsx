import React from 'react';


export default (props) => {

    const { min, max } = props;

    const num = Math.floor((Math.random() * 10) + 1);
    

    return (

        <div className="box-entrada">
            <h2>Numeros Aleatório</h2>
            <p>
                <strong>Valor Min: </strong> { min }
            </p>
            <p>
                <strong>Valor Max: </strong> { max }
            </p>
            <p>
                <strong>Valor Sorteado: </strong> { num }
            </p>
        </div>

    )


}


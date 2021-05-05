import React from 'react';

export default props => {

    const min = 30;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const geraNerd = () => Math.random() > 0.5;

    return (

        <div>
            <div>Filho</div>
            <button onClick={function (e){props.quandoClicar('Felipe', gerarIdade(), geraNerd())}} >Enviar Informações</button>
        </div>
    )
}
import React, { useState } from 'react';
import './Mega.css';

export default props => {

    function gerarNumeroNaoContidos(min, max, array){

        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContidos(min, max, array) : aleatorio;
    }

    function gerarNumero(qtde) {

        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContidos(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros;
    }

    const numerosIniciais = Array(props.qtde || 6).fill(0);
    const [numeros, setNumeros] = useState(numerosIniciais);
    const [qtde, setQtde] = useState(props.qtde || 6);

    return (

        <div className="mega">
            <h2>Mega-Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números: </label>
                <input type="number" value={qtde} min="6" max="17" onChange={(e) => {setQtde(+e.target.value) 
                    setNumeros(gerarNumero(+e.target.value))}} />
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Numeros</button>
        </div>
    )
}
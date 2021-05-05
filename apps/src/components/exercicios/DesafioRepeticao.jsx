import React from 'react';
import produtos from'../../data/produtos.js';
import './DesafioRepeticao.css';

export default (props) => {

    function getLinhas (){

        return produtos.map((produto, i) => {

            return (

                <tr key={produto.id} className={i % 2 == 0 ? 'par' : ''}>{/* Classe condicional, cria linhas zebradas*/}
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>{produto.valor}</td>
                </tr>
            )
        })
    }

    return (

        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produtos</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}{/* Função para criar as linhas da tabela */}
                </tbody>
            </table>
        </div>

    )
    
}
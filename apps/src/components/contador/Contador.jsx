import React from 'react';
import Botoes from './Botoes';
import './Contador.css';
import Display from './Display';
import Passo from './Passo';

class Contador extends React.Component {

    state = {
        numero: this.props.numero || 0,
        passo: this.props.passo || 5,
    };

    // Construtor do objeto inc()...
    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }

    render (){

        return (

            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Passo passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes incrementar={this.inc} decrementar={this.dec} />
            </div>
        )
    }
}

export default Contador;
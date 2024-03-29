import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import {initialState, reducer} from '../../store/config'


const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                {state.user ? (
                        <span className="text">{state.user.name}</span>
                    ) 
                    : (
                        <span className="text">Sem Usuario logado</span>
                    )
                }
                
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Felipe'})} >Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'sub2'})} >-2</button>
                    <button className="btn" onClick={() => dispatch({type: 'add2'})} >+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'mult7'})} >*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDiv25'})} >/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberInt'})} >Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: -9})} >-9</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAddN', payload: +11})} >+11</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer

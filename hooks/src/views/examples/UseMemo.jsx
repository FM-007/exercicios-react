import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(a, b){
    const future = Date.now() + 2000;
    while (Date.now() < future) {} // Espera... 2s
    return a + b
}

const UseMemo = (props) => {
    
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [n3, setN3] = useState();

    const result = useMemo(() => sum(n1, n2), [n1, n2]);

    // useEffect(function(){
    //     setResult(sum(n1, n2))
    // }, [result])

    return (

        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))} placeholder="0" />
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))} placeholder="0" />
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))} placeholder="0" />
                <span className="text">{result}</span>
            </div>

        </div>
    )
}

export default UseMemo

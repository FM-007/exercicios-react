import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SelectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = props => {
    const [count, setCount] = useState(0);

    const inc = useCallback(function(delta){
        setCount(curr => curr + delta)
    }, [setCount]);

    // function inc(delta){
    //     setCount(count + delta)
    // }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <SelectionTitle title="Exercicip #01" />
            <div className="center">
                <span className="text">{count}</span><br/>
                <UseCallbackButtons inc={inc} />
            </div>
            
        </div>
    )
}

export default UseCallback

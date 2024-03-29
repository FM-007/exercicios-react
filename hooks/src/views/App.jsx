import './App.css'
import React, { useState } from 'react'
import DataContext, {data} from '../data/DataContext'
import { BrowserRouter as Router } from  'react-router-dom'
import Store from '../data/Store'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {

    const [state, setState] = useState(data);



    return (
        <Store>
            <DataContext.Provider value={{state, setState}} >
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider> 
        </Store>
               
    )
}

export default App
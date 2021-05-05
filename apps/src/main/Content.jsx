import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Content.css';
import Family from '../components/basic/Family';
import FamilyMember from '../components/basic/FamilyMember';
import ListaAlunos from '../components/repeticao/ListaAlunos';
import DesafioRepeticao from '../components/exercicios/DesafioRepeticao';
import ParOuImpar from '../components/condicional/ParOuImpar';
import UsuarioInfo from '../components/condicional/UsuarioInfo';
import DiretaPai from '../components/comunicacao/DiretaPai';
import IndiretaPai from '../components/comunicacao/IndiretaPai';
import Input from '../components/formulario/Input';
import Contador from '../components/contador/Contador';
import Mega from '../components/mega/Mega';
import Primeiro from '../components/basic/First';
import ComParametro from '../components/basic/ComParametro';
import Fragmento from '../components/basic/Fragment';
import Aleatorio from '../components/exercicios/Aleatorio';
import Card from '../components/layout/Card';
import '../components/layout/Card.css';

const Content = props => {

return(
    <div style={{display: 'flex', flexBasis: '75%', flexWrap: 'wrap', flexDirection: 'column'}}>
        <h1>Fundamentos React...</h1>
        <main className='content1'>
            <Switch>
                <Route path="/01">
                    <Card titulo="#01 - Primeiro componente" color="#EEEE00">
                        <Primeiro></Primeiro>
                    </Card>
                </Route>
                <Route path='/02'>
                    <Card titulo="#02 - Componentes com Parametros" color="#BF3EFF">
                        <ComParametro
                            nome="Felipe Moreira"
                            situacao='Aprovado'
                            nota={10} />
                    </Card>
                </Route>
                <Route path='/03'>
                    <Card titulo="#03 - Fragmentos" color="#00CED1">
                        <Fragmento />
                    </Card>
                </Route>
                <Route path='/04'>
                    <Card titulo="#04 - Dessafio Aleatorio" color="#FA6900">
                        <Aleatorio min={1} max={60} />
                    </Card>
                </Route>
                <Route path='/05'>
                    <Card titulo="#05 - Componente com Filho" color="#0f0">
                        <Family sobrenome="Silva">
                            <FamilyMember nome="Felipe" />
                            <FamilyMember nome="Gabriel" />
                            <FamilyMember nome="Lívia" />
                        </Family>
                    </Card>
                </Route>
                <Route path='/06'>
                    <Card titulo="#06 - Repetição" color="#FA8072">
                        <ListaAlunos></ListaAlunos>
                    </Card>
                </Route>
                <Route path='/07'>
                    <Card titulo="#07 - Desafio Repetição" color="#8DB6CD">
                        <DesafioRepeticao></DesafioRepeticao>
                    </Card>
                </Route>
                <Route path='/08'>
                    <Card titulo="#08 - Condicionais com operador ternario" color="#008B8B">
                        <ParOuImpar numero= {55}></ParOuImpar>
                    </Card>
                </Route>
                <Route path='/09'>
                    <Card titulo="#09 - Condicionais com IF e ELSE">
                        <UsuarioInfo usuario={{nome: 'Felipe'}} />
                        {/* <UsuarioInfo usuario={{}} />
                        <UsuarioInfo /> */}
                    </Card>
                </Route>
                <Route path='/10'>
                    <Card titulo="#10 - Comunicação Direta" color="#D15FEE">
                        <DiretaPai></DiretaPai>
                    </Card>
                </Route>
                <Route path='/11'>
                    <Card titulo="#11 - Comunicação Indireta" color="#54FF9F">
                        <IndiretaPai></IndiretaPai>
                    </Card>
                </Route>
                <Route path='/12'>
                    <Card titulo="#12 - Componente Controlado" color="#FFC1C1">
                        <Input />
                    </Card>
                </Route>
                <Route path='/13'>
                    <Card titulo="#13 - Contador" color="#76EEC6">
                        <Contador numero={0} ></Contador>
                    </Card>
                </Route>
                <Route path='/14'>
                    <Card titulo="#14 - Desafio Mega-Sena" color="#00FF00">
                        <Mega />
                    </Card>
                </Route>
            </Switch>
        </main>
    </div>
)
}

export default Content;
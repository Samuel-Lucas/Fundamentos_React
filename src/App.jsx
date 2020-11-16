import React from 'react'
import './App.css'

import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from './components/basicos/aleatorio'
import Card from './components/layout/card'
import Familia from './components/basicos/familia'
import Membro from './components/basicos/membro'
import ListaAlunos from './components/repeticao/listaAlunos'
import TabelaProdutos from './components/repeticao/tabelaProdutos'
import ParOuImpar from './components/condicional/parOuImpar'
import UsuarioInfo from './components/condicional/usuarioInfo'
import DiretaPai from './components/comunicacao/diretaPai'
import IndiretaPai from './components/comunicacao/indiretaPai'
import Input from './components/formulario/input'
import Contador from './components/contador/contador'

export default _ =>    
    <div className="app">
        <h1>Fundamentos React </h1>

        <div className="cards">

            <Card titulo="#12 - Contador" cor="#090">
                <Contador numeroInicial={10} />   
            </Card>

            <Card titulo="#11 - Componente Controlado">
                <Input />    
            </Card>

            <Card titulo="#10 - Comunicação Indireta">
                <IndiretaPai />    
            </Card>

            <Card titulo="#09 - Comunicação Direta">
                <DiretaPai />    
            </Card>

            <Card titulo="#08 - Renderização Condicional">
                <ParOuImpar numero={21} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
                <UsuarioInfo usuario={{ email: 'Fer@nando.com' }}/>      
            </Card>

            <Card titulo="#07 - Desafio Repetição" cor="#090">
                <TabelaProdutos />   
            </Card>

            <Card titulo="#06 - Repetição">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos">
                <Familia sobrenome="Ferreira">
                    <Membro nome="Pedro" /> 
                    <Membro nome="Paulo" />
                    <Membro nome="Plínio" /> 
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" cor="#090">
                <Aleatorio min = {1} max = {60}/>   
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />     
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                titulo="Situação do Aluno"
                aluno="Lucas"
                nota={8.8}/>   
            </Card>

            <Card titulo="#01 - Primeiro">
                <Primeiro />    
            </Card>
        </div>
    </div>

import React, { useState } from 'react'
import IndiretaFilho from './indiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(true)

    // nome idade nerd
    function fornecerInfos(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
           
            <div>Nome do meu pai é {nome}, tem {idade} anos e nerd = {nerd ? 'Verdadeiro' : 'Falso'}</div>

            <IndiretaFilho quandoClicar={fornecerInfos} />
        </div>
    )
}
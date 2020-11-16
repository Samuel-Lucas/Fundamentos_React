import React from 'react'

export default props => {

    const min = 50
    const max = 100

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarBoolean = () => Math.random() > 0.5  // se for maior que 0.5 retorna true

    return (
        <div>
            <div>Filho</div>

            <button onClick={e => props.quandoClicar('Emanuel', gerarIdade(), gerarBoolean())}>
                Fornecer Informações
            </button>
        </div>
    )
}
import React from 'react'

export default function Aleatorio(props) {

    const { min, max } = props
    const num = Math.floor(Math.random()  * (max - min) + min)

    return (
        <div>
            <h2>Número Aleatório</h2>
            <p>Número aleatório entre {min} e {max} sorteado é <strong>{ num }</strong></p>
        </div>
    )
}
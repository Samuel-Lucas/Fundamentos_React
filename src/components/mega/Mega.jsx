import React from 'react'
import { gerarMega } from './megaScript.js'

export default function Mega() {

    return (
        <div>
            <input type="number" id="quantidade" />
            <button onClick={() => gerarMega()}>Gerar Número</button>

            <h3 id="show" style={{fontWeight: 'bold'}}></h3>
        </div>
    )
}
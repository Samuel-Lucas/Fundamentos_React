import React from 'react'

// Não necessita encapsular com <div>
export default function Fragmento() {
    return (
        <React.Fragment> 
            <h2>Fragmento</h2>
            <p>Cuidado com o erro do ecapsulamento</p>
        </React.Fragment>
    );
}
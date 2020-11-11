import React from 'react'

export default function ComParametro(props) {

    const aluno = props.aluno
    const status = props.nota >= 7 ? 'Aprovado' : 'Em Recuperação'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ aluno } </strong> 
                tem nota
                <strong> { props.nota }</strong>, 
                Logo está 
                <strong> { status }</strong></p>
        </div>
    );
}
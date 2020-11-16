import React from 'react'

export default (props) => {

    return (
        <div>
            <label>Passo: </label>
            <input id="passoInput"
            type="number"
            value={props.passo == 0 ? '' : props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    )
}
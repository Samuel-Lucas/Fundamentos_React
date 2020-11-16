import React from 'react'
import DiretaFilho from './diretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Emanuel" idade={24} nerd={true}/>
            <DiretaFilho nome="Samuel" idade={24} nerd={true}/>
            <DiretaFilho nome="Duda" idade={17} nerd={false}/>
        </div>
    )
}
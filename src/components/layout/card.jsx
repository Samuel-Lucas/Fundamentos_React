import React from 'react'
import './card.css'

export default (props) => {

    const cardEstilo = {
        backgroundColor: props.cor || '#F00',
        borderColor: props.cor || '#F00'
    }

    return  <div className="card" style={cardEstilo}>
                <div className="title">{ props.titulo }</div>

                <div className="content">
                    { props.children }
                </div>
            </div>
}
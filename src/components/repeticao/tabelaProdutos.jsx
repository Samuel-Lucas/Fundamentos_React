import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const tableStyle = {
        border: '1px solid black',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
   
    const conteudo = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    }) 
   
    return (
        <table border="1" style={tableStyle}>
            <thead>
                <th>Id</th>
                <th>Nome do Produto</th>
                <th>Preço</th>
            </thead>

            <tbody>

                { conteudo }

            </tbody>
        </table>

    )
}
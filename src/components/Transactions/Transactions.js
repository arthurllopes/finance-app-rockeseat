import React from 'react'
import { api } from '../dataService/api'
import { Container } from './style'

const Transactions = () => {
    React.useEffect (() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td>12.000</td>
                        <td>devops</td>
                        <td>20/20/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}

export default Transactions

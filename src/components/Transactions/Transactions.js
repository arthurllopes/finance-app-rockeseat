import React from 'react'
import { useTransactions } from '../../hooks/useTransactionsContext'
import { Container } from './style'

const Transactions = () => {
    const { transactions } = useTransactions()
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
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.price)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.date))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Transactions

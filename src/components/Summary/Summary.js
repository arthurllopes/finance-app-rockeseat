import React from 'react'
import { Container } from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import Card from '../Cards/Cards'
import { useTransactions } from '../../hooks/useTransactionsContext'

const Summary = () => {
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'income'){
            acc.income += Number(transaction.price)
            acc.total += Number(transaction.price)
        } else {
            acc.outcome += Number(transaction.price)
            acc.total -= transaction.price
        }
        return acc
    }, {
        income: 0,
        outcome: 0,
        total: 0
    })
    return (
        <Container>
            <Card type="Entrada" value={summary.income} src={incomeImg} alt="income"/>
            <Card type="Saida" value={summary.outcome} src={outcomeImg} alt="outcome"/>
            <Card type="Total" total={summary.total} value={summary.total} src={totalImg} alt="total" className="diffBackground"/>
        </Container>
    )
}

export default Summary

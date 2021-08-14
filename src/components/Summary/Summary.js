import React from 'react'
import { Container } from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import Card from '../Cards/Cards'

const Summary = () => {
    return (
        <Container>
            <Card type="Entrada" value="8.000,00" src={incomeImg} alt="income"/>
            <Card type="Saida" value="2.000,00" src={outcomeImg} alt="outcome"/>
            <Card type="Total" value="6.000,00" src={totalImg} alt="total" className="diffBackground"/>
        </Container>
    )
}

export default Summary

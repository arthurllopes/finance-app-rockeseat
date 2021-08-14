import React from 'react'
import { Container } from './style'
import Summary from '../Summary/Summary'
import Transactions from '../Transactions/Transactions'

const Dashboard = () => {
    return (
        <>
        <Container>
            <Summary />
        </Container>
        <Transactions />
        </>
    )
}

export default Dashboard

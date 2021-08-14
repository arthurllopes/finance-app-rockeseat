import React from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './style'

const Header = ({ setModal }) => {
    return (
        <Container>
            <Content>
            <img src={logo} alt="Logo" />
            <button onClick={() => setModal(prevState => !prevState)} type="button">Nova transação</button>
            </Content>
        </Container>
    )
}

export default Header

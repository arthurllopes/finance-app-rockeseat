import React from 'react'
import { Card } from './style'

const Cards = ({type, value, src, alt, className}) => {
    return (
        <Card className={className}>
            <header>
                <p>{type}</p>
                <img src={src} alt={alt} />
            </header>
            <div>
                <strong>R$: {value}</strong>
            </div>
        </Card>
    )
}

export default Cards

import React from 'react'
import { Card } from './style'

const Cards = ({type, value, src, alt, className, total}) => {
    return (
        <Card className={className} total={total}>
            <header>
                <p>{type}</p>
                <img src={src} alt={alt} />
            </header>
            <div>
                <strong>
                    {type === 'Saida' && '- '}
                    {new Intl.NumberFormat('pt-br',
                    {style: 'currency',
                    currency: 'BRL'})
                    .format(value)}
                </strong>
            </div>
        </Card>
    )
}

export default Cards

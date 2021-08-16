import React from 'react'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import incomeWhite from '../../assets/income.white.svg'
import outcome from '../../assets/outcome.svg'
import outcomeWhite from '../../assets/outcome.white.svg'
import { ModalForm, TransactionTypeContainer, Button } from './style'
import { useTransactions } from '../../hooks/useTransactionsContext'
import ReactModal from 'react-modal'


ReactModal.setAppElement('#root')

const ModalTransaction = ({ modal, setModal }) => {

    const { createTransaction } = useTransactions()

    const [title, setTitle] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [type, setType] = React.useState('income')
    const [category, setCategory] = React.useState('')
    
    function handleClick(event, value){
        event.preventDefault()
        setType(value)
    }
    
    async function handleSubmit(event){
        event.preventDefault()

        createTransaction({
            title,
            price,
            type,
            category
        })
        setModal(prevState => !prevState)
        setTitle('')
        setPrice('')
        setType('income')
        setCategory('')
    }

    return (
            <ReactModal onRequestClose={() => setModal(prevState => !prevState)}
            isOpen={modal} className="reactModal" overlayClassName="reactOverlayModal" >
                <button className="closeReactModal" onClick={() => setModal(prevState => !prevState)}>
                    <img src={close} alt="Close" />
                </button>
                <ModalForm onSubmit={handleSubmit}>
                    <h2>Cadastrar informacão</h2>
                    <input type="text" name="title" placeholder='Título' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <input type="number" name="price" placeholder='Preço' value={price} onChange={(event) => setPrice(event.target.value)} />
                    <TransactionTypeContainer >
                        <Button onClick={(event) => handleClick(event, 'income')}
                        className={type === 'income' && "income"}>
                            <p>Entrada</p>
                            <img src={type === 'income' ? incomeWhite : income} alt="" />
                        </Button>
                        <Button onClick={(event) => handleClick(event, 'outcome')}
                        className={type === 'outcome' && "outcome"}>
                            <p>Saida</p>
                            <img src={type === 'outcome' ? outcomeWhite : outcome} alt="" /> 
                        </Button>
                    </TransactionTypeContainer>
                    <input type="text" name="category" placeholder='Categoria' value={category} onChange={(event) => setCategory(event.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </ModalForm>
            </ReactModal>
        )
}

export default ModalTransaction

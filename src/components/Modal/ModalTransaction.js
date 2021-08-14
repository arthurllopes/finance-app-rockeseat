import React from 'react'
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import incomeWhite from '../../assets/income.white.svg'
import outcome from '../../assets/outcome.svg'
import outcomeWhite from '../../assets/outcome.white.svg'
import { ModalForm, TransactionTypeContainer, Button } from './style'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const ModalTransaction = ({ modal, setModal }) => {

    const [type, setType] = React.useState('')

    function handleClick(event, value){
        event.preventDefault()
        setType(value)
    }
    return (
            <ReactModal onRequestClose={() => setModal(prevState => !prevState)}
            isOpen={modal} className="reactModal" overlayClassName="reactOverlayModal" >
                <button className="closeReactModal" onClick={() => setModal(prevState => !prevState)}>
                    <img src={close} alt="Close" />
                </button>
                <ModalForm>
                <h2>Cadastrar informacão</h2>
                <input type="text" name="title" placeholder='Título' />
                <input type="number" name="value" placeholder='Preço'/>
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
                <input type="text" name="category" placeholder='Categoria' />
                <button type="submit">Cadastrar</button>
                </ModalForm>
            </ReactModal>
        )
}

export default ModalTransaction

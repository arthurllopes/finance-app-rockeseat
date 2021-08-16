import React from "react";
import { createContext } from "react";
import { api } from "../components/dataService/api";

const TransactionsContext = createContext([])

export const TransactionsProvider = ({children}) => {
    const [transactions, setTransaction] = React.useState([])

    React.useEffect (() => {
        api.get('/transactions')
        .then(response => setTransaction(response.data.transactions))
    }, [])

    async function createTransaction (transactionInput){
       const response = await api.post('transactions', {...transactionInput, date: new Date()})
       const { transaction } = response.data

       setTransaction([transaction, ...transactions])
    }


    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => {
    const context = React.useContext(TransactionsContext)

    return context
}
import styled from 'styled-components'
import OverviewComponent from './OverviewComponent';
import { useEffect } from 'react';
import TransactionComponent from './TransactionComponent';
import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
width: 360px;
`;

const HomeComponent = (props) => {
const [transactions, updateTransaction] = useLocalStorage('transactions', []);
const [expense, updateExpense] = useLocalStorage('expenses', 0);
const [income, updateIncome] = useLocalStorage('income', 0);

const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
    console.log(payload.id);
}



const deleteTransaction = (id) => {
    console.log(id)
    const setNewTransactions =
   transactions.filter((transactions) => transactions.id !== id)
   updateTransaction(setNewTransactions)
    
}




const calBalance = () => {
    let exp = 0;
    let inc = 0;
    // eslint-disable-next-line array-callback-return
    transactions.map((payload) => {
        payload.type === "EXPENSE"
         ? (exp = exp + payload.amount) 
         : (inc = inc + payload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
};

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => calBalance(), [transactions]);


    return(
        <Container>
            <OverviewComponent addTransaction={addTransaction} 
            expense={expense} income={income}/>
            <TransactionComponent transactions={transactions}
            onDelete={deleteTransaction}
            />
        </Container>
    )
}

export default HomeComponent
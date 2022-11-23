import styled from 'styled-components'
import OverviewComponent from './OverviewComponent';
import { useEffect, useState } from 'react';
import TransactionComponent from './TransactionComponent';
import React from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
width: 360px;
`;

const HomeComponent = (props) => {
const [transactions, updateTransaction] = useState([]);
const [expense, updateExpense] = useState(0);
const [income, updateIncome] = useState(0);

const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
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
            <OverviewComponent addTransaction={addTransaction} expense={expense} income={income}/>
            <TransactionComponent transactions={transactions}/>
        </Container>
    )
}

export default HomeComponent
import styled from 'styled-components'
import { useEffect, useState } from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 22px;
font-size: 18px;
width: 100%;
gap: 10px;
font-weight: bold;
align-items: flex-start;
& input {
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid black;
    outline: none;
    width: 100%;
}

`;

const Cell = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px 15px;
width: 100%;
align-items: center;
border: 1px solid black;
border-right: 4px solid ${(props) => (props.isExpense ? 'red' : 'green')};
border-radius: 3px;

`

const TransactionCell = (props) => {
    return(<Cell isExpense={props.payload?.type === "EXPENSE"}>
       
            <span>{props.payload.desc}</span>
            <span>${props.payload.amount}</span>
        

    </Cell>)
};

const TransactionComponent = (props) => {
    const [filteredTransaction, updateTxn] = useState(props.transactions);
    const [searchText, updateSearchText] = useState('');
    const filterData = () => {
        if (!searchText || !searchText.trim().length) {
            updateTxn(props.transactions);
            return;
        }
        let txn = [...props.transactions];
        txn = txn.filter((payload) => payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())); 
        updateTxn(txn)
    };

    useEffect(() => filterData(searchText), [props.transactions]);

    return(
        <Container>
            Transactions
            <input placeholder='Search' value={searchText} 
            onChange= {(e) => {updateSearchText(e.target.value); filterData(e.target.value)}} />
            {filteredTransaction?.length?filteredTransaction.map((payload) => <TransactionCell payload={payload} />) : ""}
            </Container>
    )
}

export default TransactionComponent
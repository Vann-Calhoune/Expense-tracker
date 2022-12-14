import styled from 'styled-components'

import { FaTimes } from 'react-icons/fa'

 

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
            <span>${props.payload.amount}</span><FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onDelete(props.payload.id)} />
    </Cell>)
};

const TransactionComponent = (props) => {


    

    return(
        <Container>
            Transactions
            {props.transactions?.length ? props.transactions.map((payload) => <TransactionCell payload={payload} key={payload.id} onDelete={props.onDelete} />) : ""} 
        </Container>
    )
}

export default TransactionComponent
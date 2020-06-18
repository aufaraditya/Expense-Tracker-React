import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction=>transaction.amount); //Get The Value of 'transactions' object, specifically 'transaction.amount' and assign it to an array of 'Amounts'
    const total = amounts.reduce((acc,item) => (acc + item), 0 ).toFixed(2); // Adding all elements of array 'amounts' and convert it to 2 decimal places


    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${total}</h1>
        </>
    )
}

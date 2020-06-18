import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction=>transaction.amount); //Get The Value of 'transactions' object, specifically 'transaction.amount' and assign it to an array of 'Amounts'
    const income = amounts.filter(item=> item > 0)
    .reduce((acc,item) => (acc + item), 0 )
    .toFixed(2); // Adding all elements of array 'amounts' where > 0 and convert it to 2 decimal places

    const expense = ( amounts.filter(item=> item < 0)
    .reduce((acc,item) => (acc + item), 0 ) * -1 )
    .toFixed(2); // Adding all elements of array 'amounts' where > 0 and convert it to 2 decimal places


    return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    )
}

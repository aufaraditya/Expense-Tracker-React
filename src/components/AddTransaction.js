import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);

    const[text, setText] = useState('');
    const[amount,setAmount] = useState(0);
    
    function HandleText(e){
        setText(e.target.value);
    }


    function HandleAmount(e){
        setAmount(e.target.value);
    }

    function HandleAddition(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add Transaction</h3>
            <form  onSubmit={HandleAddition}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={HandleText} placeholder="Enter Text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br/>
                (negative - expense, positive - income) </label>
                <input type="number" value={amount} onChange={HandleAmount} placeholder="Enter Amount..."/>
            </div>
            <button className="btn">Add transaction</button>

            </form>
        </>
    )
}

import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalStateContext';


export const AddTransaction = () => {

  const {transactions,addTransaction} = useContext(GlobalContext);
  console.log(transactions);


  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleSubmit(e){

    e.preventDefault();
    let newTransaction = {id:Math.floor(Math.random()*1000),
      text,
      amount : +amount
    }
    console.log(newTransaction);
    addTransaction(newTransaction);
  }

  return (
    
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlfor="text">Text</label>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlfor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
            </div>
            <button className="btn" >Add transaction</button>
        </form>
    </>
  );
}

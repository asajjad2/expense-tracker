import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalStateContext';


export const Transaction = ({t}) => {

    const {transactions,removeTransaction} = useContext(GlobalContext);
    // console.log(removeTransaction); 
    console.log(transactions);
  
    let sign = t.amount < 0 ? '-$': '+$';

    return (

    <li className={t.amount<0?"minus":"plus"}>
        {t.text} <span>{sign}{Math.abs(t.amount)}</span><button className="delete-btn" onClick={()=>removeTransaction(t.id)}>x</button>
    </li> 
    
  )
}

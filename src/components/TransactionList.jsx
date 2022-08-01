import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalStateContext'
import { Transaction } from './Transaction';

export const TransactionList = () => {

  const {transactions} = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(t=>{
                return (
                    <Transaction key = {t.id} t = {t}/>
                )
            })}
            
        </ul>
    
    </>
  )
}

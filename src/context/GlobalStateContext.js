import React, {createContext,useReducer} from "react";

const initialState = {
    transactions : []
}




function reducer(state,action){
 
    switch(action.type){
        case 'DELETE': 
        return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
        case 'ADD':
            return {
            ...state,
            transactions: [action.payload, ...state.transactions]
            }
        default: 
           return state;   
    }
}


export const GlobalContext = createContext(initialState);




export const GlobalProvider = ({children}) => {

const [state,dispatch] = useReducer(reducer,initialState);

 function removeTransaction(id){
    dispatch({type:'DELETE',payload : id});
 }

 function addTransaction(transaction){
    
    dispatch({
        type:'ADD',
        payload : transaction
    });
 }

 
 return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    removeTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}
import React, {useReducer} from 'react';
import './App.css';
import { storeReducer, initialState } from './reducers/store';
import CartContext from './context/CartContext';
import Router from "./components/Router";



function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
      <CartContext.Provider value={{ carrinho: state.carrinho, dispatch: dispatch }}>
        <Router />
      </CartContext.Provider>
  );
}
export default App;
    

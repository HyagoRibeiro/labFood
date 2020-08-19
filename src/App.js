import React, {useReducer} from 'react';
import './App.css';
import CarPage from './components/CarPage';
import { storeReducer, initialState } from './reducers/store';
import CartContext from './context/CartContext';
import Router from "./components/Router";
import GlobalStyle from './components/CarPage/styles';



function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
    <div className="App">
      <CartContext.Provider value={{ carrinho: state.carrinho, dispatch: dispatch }}>
        <Router />
        <GlobalStyle />
      </CartContext.Provider>
    </div>
  );
}
export default App;
    

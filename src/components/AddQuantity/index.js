import React, {useState, useContext} from 'react';
import {MainContainer, CardContainer, Select, ButtonAddToCart} from './Style';
import CartContext from '../../context/CartContext'

function AddQuantity(props) {
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0)

  const selectedProduct = props.selectedProduct
  const restaurant = props.restaurant
  const cartContext = useContext(CartContext);

  const addToCart = () => {
    if(quantidadeSelecionada > 0) {
      cartContext.dispatch({ type: "ADICIONA_NO_CARRINHO", produto: selectedProduct, quantidadeSelecionada: quantidadeSelecionada, restauranteId: restaurant.id })
      console.log(cartContext)
  }
    props.setShowQuantity(!props.showQuantity);
    setQuantidadeSelecionada(0)

  }

  const handleSelectChange = (e) => {
    setQuantidadeSelecionada(e.target.value)
  }

  console.log(cartContext.carrinho)

    return (
      <MainContainer>
          <CardContainer>
              <p>Selecione a quatidade desejada</p>
              <Select value={quantidadeSelecionada} onChange={handleSelectChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </Select>
              <ButtonAddToCart onClick={addToCart}><p>ADICIONAR NO CARRINHO</p></ButtonAddToCart>
          </CardContainer>
      </MainContainer>
    );
  }
  
  export default AddQuantity;
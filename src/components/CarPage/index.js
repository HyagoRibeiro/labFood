import React, {useState, useContext, useEffect} from 'react'
import Radio from '@material-ui/core/Radio';
import { useHistory } from "react-router-dom";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CartContext from '../../context/CartContext'
import axios from 'axios';

import { ProductContainer, ImageProduct, DescriptionContainer, ProductTitle, Ingredients, 
  Bottom, Price, Top, ContainerContador, Contador, ContainerCart, ButtonRemove, Header,
HeaderTitle, AddressContainer, AddressTitle, AddressText, RestaurantTitle, RestaurantAddress,
RestaurantTimeDelivery, ContainerRestaurant, ContainerValues, DeliveryValue,
TitleTotal, TextTotal, PriceTotal, TitleForm, SendRequestForm, ButtonSend, TextEmpty, ContainerFooter, FakeContainer } from './style';
import Footer from './../Footer';


const CarPage = () => {

  const cartContext = useContext(CartContext);
  const history = useHistory();
  console.log(cartContext)

  const [ endereco, setEndereco ] = useState('Rua retiro dos artistas')
  const [ paymentMethod, setPaymentMethod ] = useState('')
  const [value, setValue] = useState('');
  const [restaurant, setRestaurant] = useState({})

  
  let totalValue = 0;
  let arrayPlaceOrder = [];
  cartContext.carrinho.forEach(product => {
    totalValue = totalValue + product.price * product.quantity;
    arrayPlaceOrder.push({quantity: Number(product.quantity), id: product.id})
  });


  const removeProduct = (productId) => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId: productId });
    console.log(productId)
  }
  
  console.log(arrayPlaceOrder)

  const token = window.localStorage.getItem('token');

  const getRestaurantDetail = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${cartContext.carrinho[0].restauranteId}`, {
        headers: {
          auth: token
        }
      })
      setRestaurant(response.data.restaurant)
    } catch(error) {
      console.log(error.response)
    }
}; 

    useEffect(() => {
      getRestaurantDetail()
    }, [])

  const handleChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault()
    if(cartContext.carrinho.length === 0 || paymentMethod === '') {
      alert("Adicione itens ao carrinho ou selecione um método de pagamento")
    } else {
      try {
        const body = {
          products: arrayPlaceOrder,
          paymentMethod: paymentMethod
        }
        const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${cartContext.carrinho[0].restauranteId}/order`, body, {
          headers: {
            auth: token
          }
        })
        alert("Pedido realizado com sucesso")
      } catch(error) {
        console.log(error.response)
      }
    }
  }


  return (
        <>
            <Header>
              <HeaderTitle>Meu carrinho</HeaderTitle>
            </Header>
              <AddressContainer>
                <AddressTitle>Endereço de entrega</AddressTitle>
                <AddressText>{endereco}</AddressText>
              </AddressContainer>
          <ContainerCart>
              {cartContext.carrinho.length === 0 ? <TextEmpty>Carrinho vazio</TextEmpty> : 
              <>
                <ContainerRestaurant>
                  <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                  <RestaurantAddress>{restaurant.address}</RestaurantAddress>
                  <RestaurantTimeDelivery>{restaurant.deliveryTime} min</RestaurantTimeDelivery>
                </ContainerRestaurant>
                <div>
                  {cartContext.carrinho && cartContext.carrinho.map(product => {
                    return (
                        <ProductContainer key={product.id}>
                          <div>
                            {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                          </div>
                          <DescriptionContainer>
                              <Top>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ContainerContador><Contador>{product.quantity}</Contador></ContainerContador>
                              </Top>
                              <Ingredients>{product.description}</Ingredients>
                                  <Bottom>
                                    <Price>R${product.price.toFixed(2)}</Price>
                                    <ButtonRemove onClick={() => removeProduct(product.id)}>Remover</ButtonRemove>
                                  </Bottom>
                          </DescriptionContainer>
                        </ProductContainer>
                    );
                  })
                  }
                </div>
              </>}
                <ContainerValues>
                  <DeliveryValue>Frete R${restaurant.shipping && cartContext.carrinho.length !== 0 ? restaurant.shipping.toFixed(2) : `0,00`}</DeliveryValue>
                    <PriceTotal>
                      <TitleTotal>SUBTOTAL</TitleTotal>
                      <TextTotal>R${totalValue.toFixed(2)}</TextTotal>
                    </PriceTotal>
                </ContainerValues>
          <SendRequestForm onSubmit={handlePlaceOrder}>
              <TitleForm>Forma de pagamento</TitleForm>
              <FormControl component="fieldset">
                <RadioGroup value={paymentMethod} onChange={handleChangePaymentMethod}>
                  <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                  <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                 </RadioGroup>
              </FormControl>
            <ButtonSend>Confirmar</ButtonSend>
          </SendRequestForm>
          </ContainerCart>
          <ContainerFooter>
            <Footer/>
          </ContainerFooter>
          <FakeContainer />
        </>       
  );
  
}

export default CarPage

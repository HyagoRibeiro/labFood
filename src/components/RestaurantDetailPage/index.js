import React, {useState, useEffect, useContext} from 'react';
import { useHistory, useParams  } from "react-router-dom";
import {Image, RestContainer, Header, HeaderTitle, RestaurantTitle, RestaurantDescription, SectionContainer, 
ProductContainer, ImageProduct, DescriptionContainer, Ingredients, Description, SectionTitle, Bottom,
Price, ButtonAdd, ProductTitle, Container, Top, ContainerContador, Contador} from './Style';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddQuantity from '../AddQuantity/index';
import axios from 'axios';
import CartContext from '../../context/CartContext';

function RestaurantDetailPage() {
  const history = useHistory();
  const [restaurant, setRestaurant] = useState({})
  const [showQuantity, setShowQuantity] = useState(false)
  const [product, setProduct] = useState({})

  const cartContext = useContext(CartContext);

  if(cartContext.carrinho.length >0){
    console.log(cartContext.carrinho[0].quantity)
  }
  
  const pathParams = useParams();

  const token = window.localStorage.getItem('token');

  const getRestaurantDetail = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${pathParams.restaurantId}`, {
        headers: {
          auth: token
        }
      })
      setRestaurant(response.data.restaurant)
    } catch(error) {
      history.push("/address")
      console.log(error.response)
    }
}; 

    useEffect(() => {
      getRestaurantDetail()
    }, [])

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

  const goToAddQuantity = (allProduct) => {
    // history.push("/restaurant/details/quantity")
    setShowQuantity(!showQuantity)
    setProduct(allProduct)
  }

  const salgadoCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Salgado") {
      return true
    };
})

  const pastelCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Pastel") {
      return true
    }
})
  const lancheCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Lanche") {
      return true
    }
})

  const acompanhamentoCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Acompanhamento") {
      return true
    }
})

  const pizzaCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Pizza") {
      return true
    }
})

  const bebidaCategory = restaurant.products && restaurant.products.filter( product => {
    if(product.category === "Bebida") {
      return true
    }
})

const sorveteCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Sorvete") {
    return true
  }
})

const refeicaoCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Refeição") {
    return true
  }
})

const outrosCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Outros") {
    return true
  }
})

const doceCategory = restaurant.products && restaurant.products.filter( product => {
  if(product.category === "Doce") {
    return true
  }
})

const goToCartPage = () => {
  history.push("/car")
}

  return (
    <Container>
      {showQuantity && <AddQuantity showQuantity={showQuantity} setShowQuantity={setShowQuantity} selectedProduct={product} restaurant={restaurant}/>}
      
      <Header>
      <button onClick={goToCartPage}>carrinho</button>
        <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
        <HeaderTitle>Restaurante</HeaderTitle> 
      </Header>
      <RestContainer>
        <div>
          <Image BackgroundImage={restaurant.logoUrl} />
          <RestaurantTitle>{restaurant.name}</RestaurantTitle>
          <Description>Burguer</Description>
          <RestaurantDescription>
              <Description>{restaurant.deliveryTime}min</Description>
              <Description>Frete R${restaurant.shipping && restaurant.shipping.toFixed(2)}</Description>
          </RestaurantDescription>
          <Description>{restaurant.address}</Description>    
        </div>
        <SectionContainer>
        {refeicaoCategory && refeicaoCategory.length !== 0 ? <SectionTitle>Refeição</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Refeição") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}
          {salgadoCategory && salgadoCategory.length !== 0 ? <SectionTitle>Salgado</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Salgado") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                          <Top>
                            <ProductTitle>{product.name}</ProductTitle>
                          <ContainerContador><Contador>0</Contador></ContainerContador>
                          </Top>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {pastelCategory && pastelCategory.length !== 0 ? <SectionTitle>Pastel</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pastel") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {lancheCategory && lancheCategory.length !== 0 ? <SectionTitle>Lanche</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Lanche") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {acompanhamentoCategory && acompanhamentoCategory.length !== 0 ? <SectionTitle>Acompanhamento</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Acompanhamento") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {pizzaCategory && pizzaCategory.length !== 0 ? <SectionTitle>Pizza</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pizza") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {bebidaCategory && bebidaCategory.length !== 0 ? <SectionTitle>Bebida</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Bebida") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {sorveteCategory && sorveteCategory.length !== 0 ? <SectionTitle>Sorvete</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Sorvete") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {doceCategory && doceCategory.length !== 0 ? <SectionTitle>Doce</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Doce") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            {outrosCategory && outrosCategory.length !== 0 ? <SectionTitle>Outros</SectionTitle> : <></>}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Outros") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={() => goToAddQuantity(product)}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}
        </SectionContainer>
      </RestContainer>
    </Container>
  );
}

export default RestaurantDetailPage;
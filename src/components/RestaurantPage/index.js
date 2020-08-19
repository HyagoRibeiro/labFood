import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

import {RestContainer, Header, Form, Button, Image, Input, ScrollBar, ItemScrollBar, ProductContainer, ProductTitle, 
ProductDescription, MainContainer, ContainerFooter } from './Style';
import SearchIcon from '@material-ui/icons/Search';
import Footer from './../Footer';


function RestaurantPage() {
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([])
  const [filters, setFilters] = useState("")

  const token = window.localStorage.getItem('token');

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
      try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants", {
          headers: {
            auth: token
          }
        })
        setRestaurants(response.data.restaurants)
      } catch(error) {
        history.push("/address")
        console.log(error.response)
      }
  };

  const goToSearchPage = () => {
    history.push("/search-restaurant")
  }

  const sendDetailPage = (restaurantId) => {
    history.push(`/restaurant/details/${restaurantId}`)
  }

  const filteredRestaurant = (id) => {
      if(id === "Árabe") {
        if(filters !== "Árabe") {
          setFilters(id)
        } else {
          setFilters("")
        }
      } if(id === "Asiática") {
          if(filters !== "Asiática") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Hamburguer") {
          if(filters !== "Hamburguer") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Italiana") {
          if(filters !== "Italiana") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Sorvetes") {
          if(filters !== "Sorvetes") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Baiana") {
          if(filters !== "Baiana") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Carnes") {
          if(filters !== "Carnes") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Petiscos") {
          if(filters !== "Petiscos") {
            setFilters(id)
          } else {
            setFilters("")
          }
      } if(id === "Mexicana") {
          if(filters !== "Mexicana") {
            setFilters(id)
          } else {
            setFilters("")
          }
      }

  }

  return (
    <>
    <RestContainer>
      <Header>
      <p>Ifuture</p> 
      </Header>
      <MainContainer>
        <Form onClick={goToSearchPage}>
        <Button><SearchIcon /></Button>
        <Input type="search" placeholder="Restaurante" />
        </Form>
        <ScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Árabe")}>Árabe</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Asiática")}>Asiática</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Hamburguer")}>Hamburguer</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Italiana")}>Italiana</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Sorvetes")}>Sorvetes</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Baiana")}>Baiana</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Carnes")}>Carnes</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Petiscos")}>Petiscos</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Mexicana")}>Mexicana</ItemScrollBar>
        </ScrollBar>
        {restaurants !== 0 && restaurants.map((restaurant) => {
          if (filters !== "" && restaurant.category === filters) {
            return (
                  <ProductContainer onClick={() => sendDetailPage(restaurant.id)} key={restaurant.id}>
                    <Image BackgroundImage={restaurant.logoUrl} />
                    <ProductTitle>{restaurant.name}</ProductTitle>
                    <ProductDescription>
                      <p>{restaurant.deliveryTime} min</p>
                      <p>R${restaurant.shipping.toFixed(2)}</p>
                    </ProductDescription>
                  </ProductContainer>
            );
          } if (filters === "") {
            return (
                  <ProductContainer onClick={() => sendDetailPage(restaurant.id)} key={restaurant.id}>
                    <Image BackgroundImage={restaurant.logoUrl} />
                    <ProductTitle>{restaurant.name}</ProductTitle>
                    <ProductDescription>
                      <p>{restaurant.deliveryTime} min</p>
                      <p>R${restaurant.shipping.toFixed(2)}</p>
                    </ProductDescription>
                  </ProductContainer>
            );
          } 
        })}
      </MainContainer>
    </RestContainer>
    <ContainerFooter>
      <Footer/>
    </ContainerFooter>
    </>
  );
}

export default RestaurantPage;

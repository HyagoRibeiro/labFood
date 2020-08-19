import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {HomeContainer, Header, Form, Input, RestContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from "axios";
import {Image, ProductContainer, ProductTitle, ProductDescription} from './../RestaurantPage/Style';


function SearchPage() {
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([])
  const [busca, setBusca] = useState("")

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

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

  const sendDetailPage = (restaurantId) => {
    history.push(`/restaurant/details/${restaurantId}`)
  }

  let newRestaurants = restaurants

  const handleBusca = (event) => {
    setBusca(event.target.value)
    qualquerCoisa()
  }
  
  const qualquerCoisa = () => {
    if (busca !== "") {
      newRestaurants = newRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(busca.toLowerCase()) ? true : false
      })
        setRestaurants(newRestaurants)
    }
    
  }

      // if(busca) {
      //   if(filtroBusca.length < 2) {
      //     listaRestaurantesFiltrada = [];
      //   } else {
      //     listaRestaurantesFiltrada = listaRestaurantesFiltrada.filter( restaurante => {
      //       return restaurante.name.toLowerCase().includes(filtroBusca.toLowerCase());
      //     })
      //   }
      // }


  return (
    <HomeContainer>
      <Header>
      <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
      </Header>
      <RestContainer>
        <Form>
        <SearchIcon />
        <Input value={busca} onChange={handleBusca} type="search" placeholder="Restaurante" />
        </Form>
        <p>Busque por nome de restaurante</p>
      {restaurants !== 0 && restaurants.map((restaurant) => {
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
        })}
      </RestContainer>
    </HomeContainer>
  );
}

export default SearchPage;
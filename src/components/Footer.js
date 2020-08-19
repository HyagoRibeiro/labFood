import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const urlAtual = window.location.href;

const FooterContainer = styled.div`
    height: 3.062rem;
    border-top: 1px solid #BDBDBD;
    border-bottom: 1px solid #BDBDBD;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

const HomeIconFooter = styled(HomeIcon)`
   color: ${urlAtual === 'http://localhost:3000/restaurant' ? 'red' : '#BDBDBD'};
`

const ShoppingCartIconFooter = styled(ShoppingCartIcon)`
    color: ${urlAtual === 'http://localhost:3000/car' ? 'red' : '#BDBDBD'};
`

const PersonIconFooter = styled(PersonIcon)`
    color: ${urlAtual === 'http://localhost:3000/profile-page' ? 'red' : '#BDBDBD'};
`

function Footer(props){
    
    const history = useHistory();

    const goToRestaurantPage = () => {
        history.push("/restaurant")
    }

    const goToCarPage = () => {
        history.push("/car")
    }

    const goToProfilePage = () => {
        history.push("/profile-page")
    }

    return(
        <FooterContainer>
            <HomeIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={goToRestaurantPage}/>
            <ShoppingCartIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={goToCarPage}/>
            <PersonIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={goToProfilePage}/>
        </FooterContainer>
    )
}

export default Footer
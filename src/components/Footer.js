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
   color: #E8222E;
`

const ShoppingCartIconFooter = styled(ShoppingCartIcon)`
    color: #E8222E;
`

const PersonIconFooter = styled(PersonIcon)`
    color: #E8222E;
`

function Footer(props){
    
    const history = useHistory();

    const goToRestaurantPage = () => {
        history.push("/restaurant")
    }

    const goToCartPage = () => {
        history.push("/cart")
    }

    const goToProfilePage = () => {
        history.push("/profile-page")
    }


    return(
        <FooterContainer>
            {
                history.location.pathname === "/restaurant" ?
                <HomeIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={() => goToRestaurantPage()}/> :
                <HomeIconFooter fontSize="large" cursor="pointer" color={'disabled'} onClick={() => goToRestaurantPage()}/>
            }
            {
                history.location.pathname === "/cart" ? 
                <ShoppingCartIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={() => goToCartPage()}/> :
                <ShoppingCartIconFooter fontSize="large" cursor="pointer" color={'disabled'} onClick={() => goToCartPage()}/>
            }
            {
                history.location.pathname === "/profile-page" ?
                <PersonIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={goToProfilePage}/> :
                <PersonIconFooter fontSize="large" cursor="pointer" color={'disabled'} onClick={goToProfilePage}/>
            }
        </FooterContainer>
    )
}

export default Footer
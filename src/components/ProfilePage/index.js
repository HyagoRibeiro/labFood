import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import edit from './../../Images/edit.svg';
import Footer from './../Footer';
import axios from 'axios';

const ContainerProfile = styled.div `
    background-color: #fff;
    font-family: 'Roboto';
    font-size: 1rem;
    text-align: left;
`;

const ContainerUser = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 1rem;
`;

const UserData = styled.div `
`;

const UserInfo = styled.p `
    margin: 0.5rem 0;
`;

const ContainerAddress = styled.div `
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

const IconEdit = styled.div `
    align-self: flex-start;
`;

const IconEditAddress = styled.div `
    align-self: center;
`;

const AddressData = styled.div `

`;

const AddressTitle = styled.p `
    margin-bottom: 0;
    color: #b8b8b8;
`;

const Address = styled.p `
    width: 90%;
`;

const DateOrder = styled.div `
    padding: 0 1rem;
`;

const OrderInfo = styled.div `
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    padding: 1rem;
`;

const TitleOrder = styled.p `
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.29px;
    margin-bottom: 10px;
    color: #e8222e;
`;

const DateBuy = styled.p `
    margin: 0;
    font-size: 0.75rem;
    letter-spacing: -0.39px;
    margin-bottom: 10px;
`;

const PriceOrder = styled.p `
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.29px;
`;

const TitleHistoryOrder = styled.p `
    margin: 1rem 0.5rem 0;
`;

const Line = styled.hr `
`;

const ContainerFooter = styled.div `
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const HeaderContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1rem;
    height: 4rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.25);
`;

function ProfilePage() {
    const [profile, setProfile] = useState({})

    const [historyOrder, setHistoryOrder] = useState([])

    const history = useHistory();

    const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA"

    const goToEditProfile = () => {
        history.push("/profile-page/edit/user")
    }

    const goToEditAddress = () => {
        history.push("/profile-page/edit/address")
    }
 
    const date = new Date(historyOrder.createdAt);
    const [weekDay, month, day, year] = date.toString().split(" ");

    const monthTranslate = () => {
        switch(month) {
            case 'Jan':
                return 'Janeiro';
            case 'Feb':
                return 'Fevereiro';
            case 'Mar':
                return 'Março';
            case 'Apr':
                return 'Abril';
            case 'May':
                return 'Maio';
            case 'Jun':
                return 'Junho';
            case 'Jul':
                return 'Julho';
            case 'Aug':
                return 'Agosto';
            case 'Sep':
                return 'Setembro';
            case 'Oct':
                return 'Outubro';
            case 'Nov':
                return 'Novembro';
            case 'Dec':
                return 'Dezembro';
            default:
                return month;
        }
    }

    useEffect(() => {
        const token = window.localStorage.getItem("token")
  
        if(token === null){
            history.push("/login")
        }else{
            getProfile()
            getHistory()
        }
    },[history])

    const getProfile = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`${baseURL}/profile`,{headers: {
            auth: token
        }}).then((response)=>{
            setProfile(response.data.user)
        }).catch((error) => {
            alert("Erro ao mostrar usuário")
        })
    }

    const getHistory = () => {
        const token = window.localStorage.getItem("token")
        axios.get(`${baseURL}/orders/history`,{headers: {
            auth: token
        }}).then((response)=>{
            setHistoryOrder(response.data.orders)
        }).catch((error) => {
            alert("Erro ao mostrar histórico")
        })
    }

  return (
    <>
        <HeaderContainer>
            <p>Meu perfil</p>
        </HeaderContainer>
        <ContainerProfile>
            <ContainerUser>
                <UserData>
                    <UserInfo data-testid="user-name">{profile.name}</UserInfo>
                    <UserInfo data-testid="user-email">{profile.email}</UserInfo>
                    <UserInfo data-testid="user-cpf">{profile.cpf}</UserInfo>
                </UserData>
                <IconEdit onClick={goToEditProfile} data-testid="edit-user">
                    <p><img src={edit} /></p>
                </IconEdit>
            </ContainerUser>
            <ContainerAddress>
                <AddressData>
                    <AddressTitle>Endereço cadastrado</AddressTitle>
                    <Address data-testid="user-address">{profile.address}</Address>
                </AddressData>
                <IconEditAddress onClick={goToEditAddress} data-testid="edit-address">
                    <p><img src={edit} /></p>
                </IconEditAddress>
            </ContainerAddress>
            <DateOrder>
                <TitleHistoryOrder>Histórico de pedidos</TitleHistoryOrder>
                <Line/>
                {historyOrder === ([])? historyOrder.map((history) => {
                    return(
                        <OrderInfo key = {history.createdAt}>
                            <TitleOrder>{history.restaurantName}</TitleOrder>
                            <DateBuy>{`${day} ${monthTranslate()} ${year}`}</DateBuy>
                            <PriceOrder>SUBTOTAL R${history.totalPrice.toFixed(2)}</PriceOrder>
                        </OrderInfo>
                    )
                }):<p>Você não realizou nenhum pedido</p>}
            </DateOrder>
        </ContainerProfile>
        <ContainerFooter>
         <Footer />
        </ContainerFooter>
    </>
  );
}

export default ProfilePage;

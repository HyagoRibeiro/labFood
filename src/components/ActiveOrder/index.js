import React from 'react';
import styled from 'styled-components';
import clock from './../../Images/clock.svg';

const ContainerActive = styled.div `
    background-color: #e8222e;
    width: 100%;
    height: 7.375rem;
    position: fixed;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ActiveDatas = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ActiveIcon = styled.img `
    width: 2rem;
    height: 2rem;
`;

const ActiveTexts = styled.div `
    margin: 0;
    margin-left: 20px;
`;

const Title = styled.p `
    margin: 0;
    font-size: 1rem;
    color: #fff;
`;

const NameRestaurant = styled.p `
    margin: 0;
    font-size: 1rem;
    color: #000;
`;

const TotalPrice = styled.p `
    margin: 0;
    font-size: 1rem;
    color: #000;
    font-weight: bold;
`;

function ActiveOrder(props) {
    return (
        <ContainerActive>
            <ActiveDatas>
                <ActiveIcon src={clock} />
                <ActiveTexts>
                    <Title>Pedido em andamento</Title>
                    <NameRestaurant>{props.activeOrder.restaurantName && props.activeOrder.restaurantName}</NameRestaurant>
                    <TotalPrice>SUBTOTAL R${props.activeOrder.totalPrice && props.activeOrder.totalPrice.toFixed(2)}</TotalPrice>
                </ActiveTexts>
            </ActiveDatas>
        </ContainerActive>
    );
}

export default ActiveOrder;
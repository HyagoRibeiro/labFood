import styled from 'styled-components';

export const ProductContainer = styled.div `
    display: flex;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-top: 0.5rem;
`
export const Header = styled.div `
    display: flex;
    border-bottom: 1px solid lightgrey;
    justify-content: center;
    align-items: center;
    height: 3rem;
    margin: 0;
`
export const HeaderTitle = styled.p `
    margin: 0;
`

export const AddressContainer = styled.div `
    width: 100%;
    background-color: #eeeeee;
    margin: 0;
    padding: 1rem 0;
`;

export const AddressTitle = styled.p `
    margin: 0 1rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`;

export const AddressText = styled.p`
    margin: 0.5rem 1rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 600;
`;

export const ContainerRestaurant = styled.div `
    margin: 0;
    width: 100%;
`;

export const RestaurantTitle = styled.p`
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #e8222e;
    font-weight: 600;

`;

export const RestaurantAddress = styled.p `
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-bottom: 0.2rem;
`;

export const RestaurantTimeDelivery = styled.p `
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-bottom: 0.2rem;
`;

export const ImageProduct = styled.img `
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 6rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: 1rem;
    flex-shrink: 0;
`

export const DescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 1rem 0 1rem 1rem;
`

export const ProductTitle = styled.p `
    color: #e8222e;
    margin: 0.75rem 0 0 0;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const Ingredients = styled.p `
    font-size: 0.75rem;
    color: #b8b8b8;
    margin-top: 5px;
`

export const Bottom = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Price = styled.p `
    margin-top: 5px;
    width: 7.375rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const ButtonAdd = styled.button `
    margin-top: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    border: solid 1px black;
`

export const ButtonRemove = styled.button `
    margin-top: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    border: solid 1px #e8222e;
    color: #e8222e;
    flex-shrink: 0;
    position: absolute;
    bottom: -1px;
    right: -1px;
`
export const ContainerFooter = styled.div `
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 2;
`;

export const FakeContainer = styled.div `
    width: 100vw;
    height: 50px;
    position: relative;
    z-index: 1;
`;

export const ContainerCart = styled.div`
    margin: 1rem;
    text-align: left;
`;

export const Top = styled.div `
    display: flex;
    justify-content: space-between;
    width: 14.3rem;
`

export const ContainerContador = styled.div `
    height: 2.063rem;
    border-radius: 0 8px 0 8px;
    background-color: white;
    border: solid 1px #e8222e;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e8222e;
    flex-shrink: 0;
    width: 2.063rem;
    position: absolute;
    top: -1px;
    right: -1px;
`

export const Contador = styled.p `
    margin: 0;
    padding: 0;
`

export const ContainerValues = styled.div `
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
`;

export const DeliveryValue = styled.p `
    margin: 0;
    align-self: flex-end;
    font-size: 1rem;
    letter-spacing: -0.39;
    font-weight: 600;
`;

export const PriceTotal = styled.div `
    margin: 0;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    letter-spacing: -0.39;
    font-weight: 600;

`;

export const TextEmpty = styled.div `
    text-align: center;
    padding: 2rem 0;
`;

export const TitleTotal = styled.p `
    margin: 0;
`;

export const TextTotal = styled.p `
    margin: 0;
    color: #e8222e;
`;

export const TitleForm = styled.p `
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 600;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
`;

export const SendRequestForm = styled.form `
    margin: 0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

export const ButtonSend = styled.button `
    margin: 0;
    height: 2.625rem;
    border-radius: 2px;
    background-color: #e8222e;
    border: none;
    font-size: 1rem;
    margin-top: 1rem;
`;

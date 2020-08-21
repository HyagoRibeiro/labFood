import styled from 'styled-components'

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid grey;
    height: 2,75rem;
    text-align: center;
    padding: 0 1rem;
`
export const HeaderTitle = styled.p `
    margin-left: 110px;
`

export const RestContainer = styled.div `
    margin: 0 1rem;
`

export const Image = styled.img `
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 7.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const RestaurantTitle = styled.p `
    color: #e8222e;
    margin: 0.75rem 0 0 0;
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const Description = styled.p `
    margin: 0.62rem 0rem 0rem 0rem;
    color: #b8b8b8;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const RestaurantDescription = styled.div `
    display: flex;
    flex-direction: row;
    color: #b8b8b8;
    justify-content: space-between;
    width: 60%;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: -0.39px;
    margin: 0;
`

export const SectionTitle = styled.p `
    margin: 1rem 0 0.5rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid black;
`

export const SectionContainer = styled.div `
`

export const ProductContainer = styled.div `
    display: flex;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-top: 0.5rem;
`

export const Top = styled.div `
    display: flex;
    justify-content: space-between;
`

export const ImageProduct = styled.img `
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 6rem;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
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
    margin: 0;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const Ingredients = styled.p `
    font-size: 0.75rem;
    color: #b8b8b8;
`

export const Bottom = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Price = styled.p `
    margin: 0;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const ButtonAdd = styled.button `
    margin-top: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    background-color: white;
    border: solid 1px black;
    flex-shrink: 0;
    position: absolute;
    bottom: -1px;
    right: -1px;
`

export const Container = styled.div `
    z-index: 1;
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
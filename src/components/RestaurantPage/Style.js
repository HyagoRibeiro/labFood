import styled from 'styled-components';

export const RestContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.div `
    border-bottom: 1px solid grey;
    height: 2,75rem;
    text-align: center;
`

export const MainContainer = styled.div `
    margin: 1rem;
`

export const Form = styled.form `
    display: flex;
    flex-direction: row;
    border: 1px solid grey;
`

export const Button = styled.button `
    margin: 1rem;
    border: none;
    background-color:#FFF;
    cursor: pointer;
    outline: none;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
`

export const ScrollBar = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
`

export const ItemScrollBar = styled.div`
    padding: 1.125rem;
    margin: 0.55rem 1rem;
    :hover {
        color:#e8222e;
    }
`

export const ProductContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 11.75rem;
    border: 1px solid grey;
    border-radius: 8px;
    margin-top: 0.5rem;
`

export const Image = styled.div `
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 7.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const ProductTitle = styled.p `
    color: #e8222e;
    margin: 0;
    margin-top: 0.75rem;
    margin-left: 1rem;
    width: 18.5rem;
    height: 1.125rem;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: -0.39px;
`

export const ProductDescription = styled.div `
    display: flex;
    flex-direction: row;
    color: #b8b8b8;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: 'Roboto';
    font-size: 1rem;
    letter-spacing: -0.39px;
`
export const ContainerFooter = styled.div `
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
`;


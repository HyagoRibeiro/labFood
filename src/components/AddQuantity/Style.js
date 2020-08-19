import styled from 'styled-components'

export const MainContainer = styled.div `
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: white;
    width: 20.5rem;
    height: 13.5rem;
    padding-top: 1.5rem;
`

export const Select = styled.select `
    width: 18.5rem;
    height: 3.5rem;   
    padding: 1rem;
    font-size: 1rem;
`

export const ButtonAddToCart = styled.div `
    color: #4f81a8;
    align-self: flex-end;
    padding-right: 1rem;
`;
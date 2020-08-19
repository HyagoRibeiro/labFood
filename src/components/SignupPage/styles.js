import styled from 'styled-components'
import {TextField} from '@material-ui/core'

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
`

export const LogoImg = styled.img`
    width: 6.5rem;
    height: 3.625rem;
    object-fit: contain;
    align-self: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`

export const ContainerTitulo = styled.div`
    width: 100%;
    height: 2.625rem;
`

export const TituloLogin = styled.p`
    width: 18.5rem;
    height: 1.125rem;
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    margin: 0.75rem auto;
`

export const ContainerInputs = styled.div`
    width: 22.5rem;
    height: 4.5rem;
    text-align: center;
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledTextField = styled(TextField)`
    width: 20.5rem;
`

export const StyledButton = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: #e8222e;
    border: none;
    margin: 0.5rem auto;
`

export const ReturnButton = styled.button`
    background-color: #FFF;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    margin: 0.625rem 1rem;
    outline: none;
`

export const ButtonContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: flex-start;
`

export const Message = styled.div`
    display: flex;
    justify-content: flex-start;
    color: #e8222e;
    font-family: Roboto;
    font-size: 0.75rem;
    margin: 0 auto;
    width: 20.5rem;
    height: 1.125rem;
`
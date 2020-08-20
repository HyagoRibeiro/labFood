import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

export const DivSignup = styled.div`
    width: 100%;
    height: 40rem;
    margin: 0 auto;
`

export const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 32rem;
`

export const ButtonCreate = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: red;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`

export const TextFieldSignup = styled(TextField)`
    width: 20.5rem;
    height: 3.5rem;
`

export const TitleSignup = styled.p`
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 1.75rem;
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

export const DivTitle = styled.div`
    height: 2.625rem;
`
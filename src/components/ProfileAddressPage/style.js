import styled from 'styled-components';

import TextField from '@material-ui/core/TextField'


export const DivSignup = styled.div`
    width: 22.5rem;
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
`

export const DivArrowBack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    height: 3rem;
`

export const DivTitle = styled.div`
    height: 2.625rem;
`
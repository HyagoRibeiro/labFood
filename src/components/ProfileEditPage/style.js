import styled from 'styled-components';
import {TextField} from '@material-ui/core';

export const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    font-size: 1rem;
    height: 4rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.5rem;
`;

export const TextEditTitle = styled.p `
`;

export const InfoHeaders = styled.div `
    width: 52%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerProfile = styled.form `
    background-color: #fff;
    font-family: 'Roboto';
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerInput = styled.div `
    height: 4.5rem;
`;

export const StyledTextField = styled(TextField)`
    width: 20.5rem;
`;

export const SendNewDatas = styled.button `
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: #e8222e;
    color: #000;
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
`;
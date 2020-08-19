import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import axios from 'axios'

import {TextField} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    font-size: 1rem;
    height: 4rem;
    border-bottom: solid 1px rgba(0, 0, 0, 0.25);
    margin-bottom: 1.5rem;
`;

const TextEditTitle = styled.p `
`;

const InfoHeaders = styled.div `
    width: 52%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContainerProfile = styled.form `
    background-color: #fff;
    font-family: 'Roboto';
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContainerInput = styled.div `
    height: 4.5rem;
`;

const StyledTextField = styled(TextField)`
    width: 20.5rem;
`;

const SendNewDatas = styled.button `
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: #e8222e;
    color: #000;
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
`;

function ProfileEditPage() {
  const [profile, setProfile] = useState({})

    const history = useHistory();

    const baseURL ="https://us-central1-missao-newton.cloudfunctions.net/fourFoodA"

    const goToEditProfilePage = () => {
      history.push("/profile-page")
  }

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if(token === null){
        history.push("/login")
    }else{
      getProfile()
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

const onChange = (event) => {
  setProfile({...profile, [event.target.name]:event.target.value})
}

const updateProfile = (event) => {
  event.preventDefault();
  const token = window.localStorage.getItem("token")
  const body = {
    "name": profile.name,
    "email": profile.email,
    "cpf": profile.cpf
  }
  axios.put(`${baseURL}/profile`,body,{headers: {
      auth: token
  }}).then((response)=>{
    alert("Perfil atualizado com sucesso!")
    history.push(`/profile-page`);
  }).catch((error) => {
      alert("Erro ao atualizar perfil")
  })
}

  return (
    <>
      <HeaderContainer>
          <InfoHeaders>
            <ArrowBackIosIcon onClick={goToEditProfilePage} cursor="pointer"/>
            <TextEditTitle>Editar</TextEditTitle>
          </InfoHeaders>
      </HeaderContainer>
      <ContainerProfile onSubmit={updateProfile}>
        <ContainerInput>
          <StyledTextField 
            label="Nome"
            data-testid="username-input"
            placeholder="Nome"
            margin="normal"
            name="name"
            value={profile.name}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{pattern: "^.{3,}", title:"Seu nome precisa ter no mínimo 3 caracteres"}}
            variant="outlined"
            required
            onChange={onChange}
          />
        </ContainerInput>
        <ContainerInput>
          <StyledTextField 
            label="E-mail"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            value={profile.email}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
            onChange={onChange}
          />
        </ContainerInput>
        <ContainerInput>
          <StyledTextField 
              label="CPF"
              placeholder="cpf"
              data-testid="cpf-input"
              margin="normal"
              name="cpf"
              value={profile.cpf}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{pattern:"\\d{3}\\.\\d{3}\\.\\d{3}[-]\\d{2}", title:"Digite um CPF no formato: XXX.XXX.XXX-XX"}}
              variant="outlined"
              required
              onChange={onChange}
            />
        </ContainerInput>
        <SendNewDatas type="submit">Enviar</SendNewDatas>
      </ContainerProfile>
    </>
  );
}

export default ProfileEditPage;
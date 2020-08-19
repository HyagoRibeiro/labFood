import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import useForm from '../useForm'

const DivSignup = styled.div`
    width: 22.5rem;
    height: 40rem;
    margin: 0 auto;
`

const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 32rem;
`

const ButtonCreate = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: red;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`

const TextFieldSignup = styled(TextField)`
    width: 20.5rem;
    height: 3.5rem;
`

const TitleSignup = styled.p`
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
`

const DivArrowBack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    height: 3rem;
`

const DivTitle = styled.div`
    height: 2.625rem;
`

function ProfileAddressPage() {
    const history = useHistory();
    const baseURL ="https://us-central1-missao-newton.cloudfunctions.net/fourFoodA"

    const [address, setAddress] = useState({})

    useEffect(() => {
      const token = window.localStorage.getItem("token")

      if(token === null){
          history.push("/login")
      }else{
        getFullAddress()
      }
  },[history])

  const { form, onChange, setForm } = useForm({
    street: address.street,
    number: address.number,
    neighbourhood: address.neighbourhood,
    city: address.city,
    state: address.state,
    complement: address.complement
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

    const getFullAddress = () => {
      const token = window.localStorage.getItem('token');

      axios.get(`${baseURL}/profile/address`, {headers: {auth:token}}).then((response) => {
        onChange("street", response.data.address.street)
        onChange("number", response.data.address.number)
        onChange("neighbourhood", response.data.address.neighbourhood)
        onChange("city", response.data.address.city)
        onChange("state", response.data.address.state)
        onChange("complement", response.data.address.complement)
        setForm(response.data.address)
    }).catch(()=> {
        alert("Erro ao mostrar endereço!")
    })
  }

      const putAddress = (event) => {
        event.preventDefault();
        const token = window.localStorage.getItem('token');
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement
        }
    
        axios.put(`${baseURL}/address`,body,{headers: {auth:token}}).then((response) => {
            window.localStorage.setItem('token', response.data.token)
            alert("Endereço criado com sucesso!")
            history.push(`/profile-page`);
        }).catch(()=> {
            alert("Erro ao cadastrar endereço!")
        })
      }

      const Back =() => {
          history.push('/profile-page')
      }

    return(
        <DivSignup>
            <DivArrowBack>
                <ArrowBackIosIcon cursor="pointer" onClick={Back}/>
            </DivArrowBack>
            <hr/>
            <DivTitle>
                <TitleSignup>Endereço</TitleSignup>
            </DivTitle>
            {address &&
                <FormSignup  noValidate autoComplete="off" onSubmit={putAddress}>
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="street"
                        data-testid="user-street"
                        value={form.street}
                        label="Logradouro"
                        placeholder="Rua / Av."
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern: "^.{5,}", title:"Rua precisa ter no mínimo 5 caracteres"}}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        type="number"
                        name="number"
                        data-testid="user-number"
                        value={form.number}
                        label="Número"
                        placeholder="Número"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        id="outlined-required"
                        name="complement"
                        data-testid="user-complement"
                        value={form.complement}
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern: "^.{3,}", title:"Complemento precisa ter no mínimo 3 caracteres"}}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="neighbourhood"
                        data-testid="user-neighbourhood"
                        value={form.neighbourhood}
                        label="Bairro"
                        placeholder="Bairro"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern: "^.{3,}", title:"Bairro precisa ter no mínimo 3 caracteres"}}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="city"
                        data-testid="user-city"
                        value={form.city}
                        label="Cidade"
                        placeholder="Cidade"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern: "^.{3,}", title:"Cidade precisa ter no mínimo 3 caracteres"}}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="state"
                        data-testid="user-state"
                        value={form.state}
                        label="Estado"
                        placeholder="Estado"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern: "[A-Z]{2,2}", title:"Insira o estado no formato SP, PR, SC, etc."}}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <ButtonCreate>Salvar</ButtonCreate>
                </FormSignup>
                }
        </DivSignup>
    )
}

export default ProfileAddressPage;
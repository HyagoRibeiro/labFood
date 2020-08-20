import React, {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useForm from '../useForm';

import { 
    DivSignup,
    FormSignup,
    ButtonContainer,
    ButtonCreate,
    TextFieldSignup,
    TitleSignup,
    ReturnButton,
    DivTitle
} from './style';

function AddressPage (){
    const history = useHistory();
    const baseURL ="https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/address"

    const { form, onChange } = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
      });

      useEffect(() => {
        const token = window.localStorage.getItem("token")
        if(token === null){
        history.push("/sign-up")
    }
      }, [history])

      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const putAddress = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem('token');
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement
        }
        axios.put(`${baseURL}`,body,{headers: {auth:token}}).then((response) => {
            window.localStorage.setItem('token', response.data.token)
            alert("Endereço criado com sucesso!")
            history.push(`/restaurant`);
        }).catch(()=> {
            alert("Erro ao cadastrar endereço!")
        })
      }

      const goToLoginPage =() => {
          history.push('/login')
      }

    return(
        <DivSignup>
            <ButtonContainer>
                <ReturnButton onClick={goToLoginPage}> <ArrowBackIosIcon/> </ReturnButton>
            </ButtonContainer>  
            
            <DivTitle>
                <TitleSignup>Meu endereço</TitleSignup>
            </DivTitle>
                <FormSignup onSubmit={putAddress}>
                    <TextFieldSignup
                        name="street"
                        value={form.street}
                        label="Logradouro"
                        placeholder="Rua / Av."
                        inputProps={{pattern: "^.{5,}", title:"Rua precisa ter no mínimo 5 caracteres"}}
                        InputLabelProps={{
                            shrink: true    
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                        required
                    />
                    <TextFieldSignup
                        type="number"
                        name="number"
                        value={form.number}
                        label="Número"
                        placeholder="Número"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                        required
                    />
                    <TextFieldSignup
                        name="complement"
                        value={form.complement}
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        inputProps={{pattern: "^.{3,}", title:"Complemento precisa ter no mínimo 3 caracteres"}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        name="neighbourhood"
                        value={form.neighbourhood}
                        label="Bairro"
                        placeholder="Bairro"
                        inputProps={{pattern: "^.{3,}", title:"Bairro precisa ter no mínimo 3 caracteres"}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                        required
                    />
                    <TextFieldSignup
                        name="city"
                        value={form.city}
                        label="Cidade"
                        placeholder="Cidade"
                        inputProps={{pattern: "^.{3,}", title:"Cidade precisa ter no mínimo 3 caracteres"}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                        required
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="state"
                        value={form.state}
                        label="Estado"
                        placeholder="Estado"
                        inputProps={{pattern: "^.{2,2}", title:"Insira o estado no formato SP, PR, SC, etc."}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <ButtonCreate>Salvar</ButtonCreate>
                </FormSignup>
        </DivSignup>
    )
}

export default AddressPage
import React from 'react';
import { render, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import axios from 'axios'
import ProfileEditPage from './components/ProfileEditPage';
import ProfilePage from './components/ProfilePage';
import ProfileAddressPage from './components/ProfileAddressPage';
import { useHistory } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { ExpansionPanelActions } from '@material-ui/core';

describe("Renderização inicial", () => {
    test("Renderiza os dados na tela de perfil de usuário", async () => {
        const history = createMemoryHistory()
        const {getByText, getByPlaceholderText,getByTestId} = render (
        <Router history={history}>
            <ProfilePage/>
        </Router>
        )
        
      const NomeUsuario = getByTestId(/user-name/)
      expect(NomeUsuario).toBeInTheDocument()
      const EmailUsuario = getByTestId(/user-email/)
      expect(EmailUsuario).toBeInTheDocument()
      const CPFUsuario = getByTestId(/user-cpf/)
      expect(CPFUsuario).toBeInTheDocument()
      const EnderecoUsuario = getByTestId(/user-address/)
      expect(EnderecoUsuario).toBeInTheDocument()

      const IconeEditaUsuario = getByTestId(/edit-user/);
      expect(IconeEditaUsuario).toBeInTheDocument()
      const IconeEditaEndereco = getByTestId(/edit-address/);
      expect(IconeEditaEndereco).toBeInTheDocument()
    })

    test("Renderiza os inputs e o button na tela de edição de usuário", async () => {
        const history = createMemoryHistory()
        const {getByText, getByPlaceholderText,getByTestId} = render (
        <Router history={history}>
            <ProfileEditPage/>
        </Router>
        )
        
      const TextoEditar = getByText(/Editar/)
      expect(TextoEditar).toBeInTheDocument()

      const InputName = getByTestId(/username-input/);
      expect(InputName).toBeInTheDocument()
      const InputEmail = getByTestId("email-input")
      expect(InputEmail).toBeInTheDocument()
      const InputCPF = getByTestId("cpf-input")
      expect(InputCPF).toBeInTheDocument()
      const ButtonSave = getByText(/Enviar/i)
      expect(ButtonSave).toBeInTheDocument()
    })

    test("Renderiza os inputs e o button na tela de edição de endereço de usuário", async () => {
        const history = createMemoryHistory()
        const {getByText, getByPlaceholderText,getByTestId} = render (
        <Router history={history}>
            <ProfileAddressPage/>
        </Router>
        )
        
      const TextoEndereco = getByText(/Endereço/)
      expect(TextoEndereco).toBeInTheDocument()

      const InputRua = getByTestId(/user-street/);
      expect(InputRua).toBeInTheDocument()
      const InputNumero = getByTestId("user-number")
      expect(InputNumero).toBeInTheDocument()
      const InputComplemento = getByTestId("user-complement")
      expect(InputComplemento).toBeInTheDocument()
      const InputBairro = getByTestId("user-neighbourhood")
      expect(InputBairro).toBeInTheDocument()
      const InputCidade = getByTestId("user-city")
      expect(InputCidade).toBeInTheDocument()
      const InputEstado = getByTestId("user-state")
      expect(InputEstado).toBeInTheDocument()
      const ButtonSave = getByText(/Salvar/i)
      expect(ButtonSave).toBeInTheDocument()
    })
  })


//   axios.get = jest.fn().mockResolvedValue({
//     data: []
//   })
//   axios.post = jest.fn().mockResolvedValue()
//   axios.put = jest.fn().mockResolvedValue()
  
//   describe("usuário logado", () => {
    // test('Testa a renderização inicial dos dados do usuário logado', async () => {
    //   axios.get = jest.fn().mockResolvedValue({
    //     data: [{
    //         "id": "CuAW6J45n8iaoDIRWOm6",
    //         "name": "Astrodev",
    //         "email": "astrodev@future4.com",
    //         "cpf": "111.111.111-11",
    //         "hasAddress": true,
    //         "address": "R. Afonso Braz, 177, 71 - Vila N. Conceição"
    //     }]
    //   })
  
    //   const history = createMemoryHistory()
    //   const {getByText, getByPlaceholderText, getByTestId, findByText} = render (
    //     <Router history={history}>
    //         <ProfileEditPage/>
    //     </Router>
    //     )
  
    //   const InputName = getByTestId(/username-input/);
    //   expect(InputName).toBeInTheDocument()
    //   const InputEmail = getByTestId("email-input")
    //   expect(InputEmail).toBeInTheDocument()
    //   const InputCPF = getByTestId("cpf-input")
    //   expect(InputCPF).toBeInTheDocument()
    //   const ButtonSave = getByText(/Enviar/i)
    //   expect(ButtonSave).toBeInTheDocument()

    //   const NomeUsuarioLogado = await findByText('Astrodev')
    //   expect(NomeUsuarioLogado).toBeInTheDocument()

    //   const EmailUsuarioLogado = await findByText('astrodev@future4.com')
    //   expect(EmailUsuarioLogado).toBeInTheDocument()

    //   const CPFUsuarioLogado = await findByText('11111111111')
    //   expect(CPFUsuarioLogado).toBeInTheDocument()
  
    //   expect(axios.get).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile")
    // })

//     test('Testa a renderização inicial do endereço do usuário logado', async () => {
//         axios.get = jest.fn().mockResolvedValue({
//           data: [{
//             complement: "502",
//             number: "122",
//             neighbourhood: "Ideal",
//             city: "dwsdfsdf",
//             street: "dawadadasd",
//             state: "MG"
//           }]
//         })
    
//         const history = createMemoryHistory()
//         const {getByText, getByPlaceholderText, getByTestId, findByText} = render (
//           <Router history={history}>
//               <ProfileAddressPage/>
//           </Router>
//           )
    
//         const InputRua = getByTestId(/user-street/);
//         expect(InputRua).toBeInTheDocument()
//         const InputNumero = getByTestId("user-number")
//         expect(InputNumero).toBeInTheDocument()
//         const InputComplemento = getByTestId("user-complement")
//         expect(InputComplemento).toBeInTheDocument()
//         const InputBairro = getByTestId("user-neighbourhood")
//         expect(InputBairro).toBeInTheDocument()
//         const InputCidade = getByTestId("user-city")
//         expect(InputCidade).toBeInTheDocument()
//         const InputEstado = getByTestId("user-state")
//         expect(InputEstado).toBeInTheDocument()
//         const ButtonSave = getByText(/Salvar/i)
//         expect(ButtonSave).toBeInTheDocument()
  
//         const InputRua1 = await findByText('dawadadasd')
//         expect(InputRua1).toBeInTheDocument()
  
//         const InputNumero1 = await findByText('122')
//         expect(InputNumero1).toBeInTheDocument()
  
//         const InputComplemento1 = await findByText('502')
//         expect(InputComplemento1).toBeInTheDocument()

//         const InputBairro1 = await findByText('Ideal')
//         expect(InputBairro1).toBeInTheDocument()

//         const InputCidade1 = await findByText('dwsdfsdf')
//         expect(InputCidade1).toBeInTheDocument()

//         const InputEstado1 = await findByText('MG')
//         expect(InputEstado1).toBeInTheDocument()
    
//         expect(axios.get).toHaveBeenCalled("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile/address")
//       })

//   })

// describe("edição de dados de usuário", () => {
//     test('Testa a edição dos dados do usuário logado', async () => {
    //   axios.get = jest.fn().mockResolvedValue({
    //     data: [{
    //         "id": "CuAW6J45n8iaoDIRWOm6",
    //         "name": "Astrodev",
    //         "email": "astrodev@future4.com",
    //         "cpf": "111.111.111-11",
    //         "hasAddress": true,
    //         "address": "R. Afonso Braz, 177, 71 - Vila N. Conceição"
    //     }]
    //   })
  
    //   const history = createMemoryHistory()
    //   const {getByText, getByPlaceholderText, getByTestId, findByText} = render (
    //     <Router history={history}>
    //         <ProfileEditPage/>
    //     </Router>
    //     )
  
    //   const InputName = getByTestId(/username-input/);
    //   expect(InputName).toBeInTheDocument()
    //   const InputEmail = getByTestId("email-input")
    //   expect(InputEmail).toBeInTheDocument()
    //   const InputCPF = getByTestId("cpf-input")
    //   expect(InputCPF).toBeInTheDocument()
    //   const ButtonSave = getByText(/Enviar/i)
    //   expect(ButtonSave).toBeInTheDocument()

    //   const NomeUsuarioLogado = await findByText('Astrodev')
    //   expect(NomeUsuarioLogado).toBeInTheDocument()

    //   const EmailUsuarioLogado = await findByText('astrodev@future4.com')
    //   expect(EmailUsuarioLogado).toBeInTheDocument()

    //   const CPFUsuarioLogado = await findByText('11111111111')
    //   expect(CPFUsuarioLogado).toBeInTheDocument()
  
    //   expect(axios.get).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/profile")
    // })
// })
import React, {useState} from 'react';
import { ContainerLogin, LogoImg, ContainerTitulo, TituloLogin, ContainerInputs, StyledTextField, StyledButton, ReturnButton, ButtonContainer, Message} from './styles'
import Logo from '../../Images/logo-future-eats.png'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";
import useForm from '../../Hooks/useForm'
import Axios from 'axios';

function SinupPage() {
  const history = useHistory();
  const {form, onChange} = useForm({name:"", email: "", cpf:""})
  const [password, setPassword] = useState({password: "", showPassword: false})
  const [confirmPassword, setConfirmPassword] = useState({confirmPassword: "", showConfirmPassword: false})
  const [message, setMessage] = useState(false)
  const handleInputChange = event => {
    const {name, value} = event.target
    onChange(name, value)
}

  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleChangeConfirmPassword = (prop) => (event) => {
    setConfirmPassword({ ...confirmPassword, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setConfirmPassword({ ...confirmPassword, showConfirmPassword: !confirmPassword.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const goToLoginPage = () => {
    history.push("/login")
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if(password.password !== confirmPassword.confirmPassword) {
      setMessage(true)
    } else {    
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: password.password
    }
    Axios.post("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup", body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token)
      alert("usuário criado com sucesso!")
      history.push("/restaurant")
    })
    .catch(() => {
      alert("Não foi possível criar o usuário, verifique se todas as informações estão corretas.")
    })}
  }
  
  const renderMessage = () => {
    if(message === true) {
      return (
        <Message>As senhas não correspondem.</Message>
      )
    } else {
      return(<div></div>)
    }
  }

  return (
    <ContainerLogin>
      <ButtonContainer>
        <ReturnButton onClick={goToLoginPage}> <ArrowBackIosIcon/> </ReturnButton>
      </ButtonContainer>        
      <LogoImg src={Logo} />
      <ContainerTitulo>
        <TituloLogin>Cadastrar</TituloLogin>
      </ContainerTitulo>
      <form onSubmit={handleSignUp}>
      <ContainerInputs>
        <StyledTextField 
          name="name"
          value={form.name}
          onChange={handleInputChange}
          label="Nome"
          placeholder="Nome e sobrenome"
          inputProps={{pattern: "^.{3,}", title:"Seu nome precisa ter no mínimo 3 caracteres"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
        <StyledTextField 
          name="email"
          value={form.email}
          onChange={handleInputChange}
          label="E-mail"
          type="email"
          placeholder="email@email.com"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
        <StyledTextField 
          name="cpf"
          value={form.cpf}
          onChange={handleInputChange}
          label="CPF"
          placeholder="000.000.000-00"
          inputProps={{pattern:"\\d{3}\\.\\d{3}\\.\\d{3}[-]\\d{2}", title:"Digite um CPF no formato: XXX.XXX.XXX-XX"}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
          <StyledTextField
            type={password.showPassword ? 'text' : 'password'}
            value={password.password}
            onChange={handleChange('password')}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            inputProps={{pattern: "^.{6,}", title:"A senha precisa ter no mínimo 6 caracteres"}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {password.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              )}}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            required
          />
      </ContainerInputs>
      <ContainerInputs>
          <StyledTextField
            type={confirmPassword.showConfirmPassword ? 'text' : 'password'}
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            value={confirmPassword.confirmPassword}
            onChange={handleChangeConfirmPassword('confirmPassword')}
            inputProps={{pattern: "^.{6,}", title:"A senha precisa ter no mínimo 6 caracteres"}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {confirmPassword.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              )}}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            required
          />
      </ContainerInputs>
      {renderMessage()}
      <StyledButton>Criar</StyledButton>
      </form>
    </ContainerLogin>
  );
}

export default SinupPage;

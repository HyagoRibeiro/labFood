import React, {useState, useEffect} from 'react';
import Logo from '../../Images/logo-future-eats.png'
import {ContainerLogin, LogoImg, TituloLogin, ContainerTitulo, StyledTextField, ContainerInputs, StyledButton, SignUpTitle, SignUpButton} from './styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from "react-router-dom";
import Axios from 'axios';

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState({password: "" , showPassword: false})
  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if(token !== null){
        history.push("/restaurant")
    }
},[history])

  const handleLogin = (e) => {
    e.preventDefault()
    const body ={
      email: email,
      password: password.password
    }
    Axios.post("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/login", body)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token)
      alert("Login efetuado com sucesso")
      history.push("/restaurant")
    })
    .catch(() => {
      alert("Email e/ou senha incorretos!")
      setPassword({password: "" , showPassword: false})
    })
    
  }

  const goToSignUpPage = () => {
    history.push("/sign-up")
  }

  return (
    <ContainerLogin>
      <LogoImg src={Logo} />
      <ContainerTitulo>
        <TituloLogin>Entrar</TituloLogin>
      </ContainerTitulo>
      <form onSubmit={handleLogin}>
      <ContainerInputs>
        <StyledTextField 
          type="email"
          value={email}
          onChange={handleChangeEmail}
          label="E-mail"
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
            type={password.showPassword ? 'text' : 'password'}
            value={password.password}
            onChange={handleChange('password')}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
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
      <StyledButton>Entrar</StyledButton>
      </form>
      <SignUpTitle>Não possui cadastro? Clique <SignUpButton onClick={goToSignUpPage}>aqui.</SignUpButton></SignUpTitle>
    </ContainerLogin>
  );
}

export default LoginPage;

import React, {useEffect} from 'react';
import logo from '../../Images/logo-future-eats@3x.png'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const ContainerHome = styled.div`
  background-color: #e8222e;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const LogoImg = styled.img`
  width: 7.875rem;
  height: 4.063rem;
  object-fit: contain;
  align-self: center;
`

function Home() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => history.push("/login"), 2000)
  }, [history])
  return (
    <ContainerHome className="App">
      <LogoImg src={logo}/>
    </ContainerHome>
  );
}

export default Home;
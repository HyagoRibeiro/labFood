import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  .Bar {
    height: 4rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    .Carrier {
    height: 0.875rem;
    font-family: SFProText;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #030303;
    }
    .title {
      height: 1.188rem;
      font-family: Roboto;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      text-align: center;
      color: black;
      margin: 0 auto;
      padding: 1.95rem 5.75rem 0 5.813rem;
  }
}

main {
  .Rectangle {
  height: 4.75rem;
  background-color: #eeeeee;
  }
  .Endereco-de-entrega {
    width: 20.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    padding-top: 1rem;
}
.endereco {
  width: 20.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
}
.info-rest {
  
  .name-rest {
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
    margin-top: 1rem;
  }
  .endereco-rest {
  display: flex;
  justify-content: flex-start;
  height: 1.125rem;
  padding-left: 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  }
  .time-rest {
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  
  }
}

.text-car {
  .card-pedidos {
    height: 7rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-left: 1rem;
  margin-right: 1rem;
  }
  img {
    background-image: url(${props => props.BackgroundImage});
    background-size: cover;
    background-position: center;
    height: 7rem;
    width: 6rem;
    border-top-left-radius: 8px;
  }
  ul {
    margin: 0;
    padding: 0;
    .title {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #e8222e;
  }
  .description {
  padding-left: 7rem;
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  padding-top: 0.5rem;

  }
  .price {

  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  padding-top: 0.25rem;
  padding-left: 0.5rem;

  }
  li {
    list-style: none;
  }
  }

  button {
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #e02020;
  width: 5.625rem;
  height: 1.938rem;
  border-radius: 15px 0px 10px 0px;
  border: solid 1px #e02020;
  margin-left: 15.875rem;
  }
  .quantity {
  width: 2.063rem;
  height: 2.063rem;
  border: solid 1px #e8222e;
  border-radius: 0px 11px 0px 10px;
  margin-left: 19.438rem;
  padding: 0;
  }
}
.Text {
  width: 18.5rem;
  height: 1.125rem;
  opacity: 0.89;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
  margin: 0 auto;
  margin: 0.75rem 2rem;
}
.Frete {
  width: 6.5rem;
  height: 1.125rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: black;
  padding: 2rem 1.125rem 0 15rem;
  margin: 0;
}
.total {
  display: flex;
}
.SUBTOTAL {
  width: 10.25rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
}
.R0000 {
  width: 10.25rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e8222e;
  padding-right: 1rem;
}
}

.pagamento {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
  .forma-pagamento {
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin: 0;
}
.linha {
  width: 20.5rem;
  background: #030303;
  margin-right: 2rem;

  }
  .confirm {
    height: 2.625rem;
    border-radius: 2px;
    background-color: rgba(232, 34, 46, 0.5);
    border: none;
    margin-right: 1.5rem;
    margin-top: 3.063rem;
    margin-bottom: 2rem;
  }
}

`


export default GlobalStyle
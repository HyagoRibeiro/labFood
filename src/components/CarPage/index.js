import React, {useState, useContext} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CartContext from '../../context/CartContext'

const CarPage = () => {

  const cartContext = useContext(CartContext);

  console.log(cartContext)

  const [pedidos, setPedidos] = useState({
    "id": "3vcYYSOEf8dKeTPd7vHe",
                "name": "Pastel",
                "description": "Pastel autêntico, feito na hora!",
                "category": "Pastel",
                "price": 3,
                "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg"
  })
  const [ endereco, setEndereco ] = useState('Rua retiro dos artistas')
  const [ frete, setFrete ] = useState('')
  const [ aPagar, setAPagar ] = useState('')
  const [ formaDePagamento, setFormaPagamento ] = useState('')
  const [value, setValue] = React.useState('');
  const [nameRest, setNameRest] = useState('Bullguer Vila Madalena')
  const [time, setTime] = useState('30 - 40 min')

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return <div className='carrinho'>
    <header className='Bar'>
      <h1 className='title'>Meu carrinho</h1>
    </header>
    <main>
      <div className='Rectangle'>
        <p className='Endereco-de-entrega'>Endereço de entrega</p>
        <p className='endereco'>{endereco}</p>
      </div>
      <div className='info-rest'>
      <p className='name-rest'>{nameRest}</p>
      <p className='endereco-rest'>{endereco}</p>
      <p className='time-rest'>{time}</p>
      </div>
      <div className='text-car'>
        {pedidos.length === '' ? <h2 className='Text'>Carrinho vazio</h2> : <div className='card-pedidos'>
          <button className='quantity'>2</button>
          <ul key={pedidos.id}>
            <li className='title'>{pedidos.name}</li>
            <li className='description'>{pedidos.description}</li>
            <li className='price'>R${pedidos.price.toFixed(2)}</li>
          </ul>
            {/* <img src={pedidos.photoUrl} /> */}
            <button>remover</button>
        </div>
         }
        </div>
        <div>
        <p className='Frete'>Frete R$0,00{frete}</p>
        <div className ='total'>
        <h3 className='SUBTOTAL'>SUBTOTAL</h3>
        <p className='R0000'>R$0,00 {aPagar}</p>
        </div>
      </div>
      <form className='pagamento'>
          <h3 className='forma-pagamento'>Forma de pagamento</h3>
          <hr className='linha' />
          <FormControl component="fieldset" className='formulario'>
            <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
              <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
              <FormControlLabel value="cartao-credito" control={<Radio />} label="Cartão de Crédito" />
            </RadioGroup>
          </FormControl>
        <button className='confirm'>Confirmar</button>
      </form>
    </main>
  </div>
}

export default CarPage

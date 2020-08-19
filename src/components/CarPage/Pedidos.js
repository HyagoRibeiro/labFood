import React, {useState, useEffect, useContext } from 'react'
import CarContext from '../../contexts/CardContext'
import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/1/order'
const axiosConfig = {
  headers: {
    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImwyUjhodGhHM0t6MVBJd1U0SDNTIiwibmFtZSI6ImxhaXMiLCJlbWFpbCI6ImxhaXNAZnV0dXJlNC5jb20iLCJjcGYiOiI2NjYuNjY2LjY2Ni02NiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE1OTcxNzEwNTh9.B8DkholZqclc-3eaAIsCGqCjlVfV_RptMdTM-17fElE'
  }
}

const Pedidos = (props) => {
  const [products, setProducts] = useState([])
  const cartContext = useContext(CarContext)
  const [id, setId] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [payment, setPayment ] = useState('')

  useEffect(() => {
    const body = {
      "products": [{
        "id": id,
        "quantity": quantity
      }, {
        "quantity": quantity,
        "id": id
      }],
      "paymentMethod": payment
    }
    axios.post(baseUrl, body, axiosConfig)
    .then(response => {
      setProducts(response.data.order)
    })
    .catch(error => {
      console.log(error.message)
    })
  }, [])

  const addProductToCart = (product) => {
    cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: product })
  }

  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <ul>
              <li>{product.quantity}</li>
              <li>{product.paymentMethod}</li>
              
            </ul>
          </div>
        )
      })}
    </div>
  )


}

export default Pedidos
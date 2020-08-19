export const initialState = {
  carrinho: []
}

export const storeReducer = (state, action) => {console.log(state.carrinho)
  switch (action.type) {
    case "ADICIONA_NO_CARRINHO":
      const produtosCarrinho = state.carrinho.findIndex(produto => {
        return produto.id === action.produto.id
      })
      
      let novoCarrinho
      console.log(produtosCarrinho === -1)
      if (produtosCarrinho === -1) {
        novoCarrinho = [...state.carrinho, { ...action.produto, quantity: action.quantidadeSelecionada, restauranteId: action.restauranteId }]
      } else {
        novoCarrinho = state.carrinho.map(produto => {
          if(produto.id === action.produto.id) {
            return {
              ...produto,
              quantity: action.quantidadeSelecionada
            }
          }
          return produto
        })
      }
      console.log(novoCarrinho)
      return { ...state, carrinho: novoCarrinho }

      case "REMOVE_ITEM_FROM_CART": {
        const newCart = state.cart.filter(product => {
          return product.id !== action.productId
        })
        return { ...state, cart: newCart }
      }
      default: 
      return state
  }
}
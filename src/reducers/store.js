export const initialState = { 
  carrinho: []
}

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONA_NO_CARRINHO":
      const produtosCarrinho = state.carrinho.findIndex(produto => {
        return produto.id === action.produto.id
      })
      
      let novoCarrinho
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
      return { ...state, carrinho: novoCarrinho }

      case "REMOVE_ITEM_FROM_CART": {
        const newCart = state.carrinho.filter(product => {
          return product.id !== action.productId
        })
        return { ...state, carrinho: newCart }
      }
      default: 
      return state
  }
}
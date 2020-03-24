import { GET_PRODUCTS } from './../actions/actionType'

const product = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    default:
      return state
  }
}

export default product
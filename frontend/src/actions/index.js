import { ADD_TODO, GET_PRODUCTS } from './actionType'
import callApi from '../utils/callApi'

export function addTodoRequest() {
    return (dispatch) => {
        callApi('product', 'GET', null).then(res => {
            dispatch(addTodo(res.data))
        })
    }
}

export function addTodo(products) {
    return { type: ADD_TODO, products }
}

export function getProductsRequest() {
    return (dispatch) => {
        callApi('product', 'GET', null).then(res => {
            dispatch(getProducts(res.data))
        })
    }
}

export function getProducts(products) {
    return { type: GET_PRODUCTS, products }
}

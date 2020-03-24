import { GET_PRODUCTS, GET_CATEGORIES } from './actionType'
import callApi from '../utils/callApi'

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

export function getCategoriesRequest() {
    return (dispatch) => {
        callApi('category', 'GET', null).then(res => {
            dispatch(getCategories(res.data))
        })
    }
}

export function getCategories(categories) {
    return { type: GET_CATEGORIES, categories }
}

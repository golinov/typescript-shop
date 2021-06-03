import {IProduct, ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get<IProduct[]>('http://nginx/api/products')
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Произошла ошибка при загрузке продуктов'
            })
        }
    }
}
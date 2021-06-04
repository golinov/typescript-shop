import {IProduct, ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";
import axios from "axios";
import {PaginatedResponse} from "../../types/axios";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
            const response = await axios.get<PaginatedResponse<IProduct>>('http://nginx/api/products')
            dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.data})
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Произошла ошибка при загрузке продуктов'
            })
        }
    }
}
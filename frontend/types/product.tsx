export interface IProduct {
    _id: string;
    name: string;
    price: number;
    origin: OriginTypes;
}

type OriginTypes = 'asia' | 'usa';

export interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
}
export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_FETCH_PRODUCTS_ERROR',
}
interface FetchProductsAction {
    type: ProductActionTypes.FETCH_PRODUCTS;
}
interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[]
}
interface FetchProductsErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string;
}
export type ProductAction = FetchProductsAction | FetchProductsErrorAction | FetchProductsSuccessAction
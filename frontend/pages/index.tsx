import React from 'react';
import MainLayout from "../layouts/MainLayout";
import ProductList from "../components/ProductList";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchProducts} from "../store/action-creators/product";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Index = () => {
    const {products, error} = useTypedSelector(state => state.product)
    console.log('products',products)
    return (
        <>
            <MainLayout>
                <h1>Products List</h1>
                <ProductList products={products}/>
            </MainLayout>
        </>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchProducts())
})

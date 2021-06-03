import React from 'react';
import {IProduct} from "../types/product";
import {Grid} from "@material-ui/core";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
            <Grid container spacing={4}>
                {products ? (
                    products.map(product =>
                        
                            <ProductItem
                                key={product._id}
                                product={product}
                            />
                    )
                ) : (
                    <h1>Loading...</h1>
                )}
            </Grid>
    );
};

export default ProductList;

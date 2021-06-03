import React from 'react';
import {IProduct} from "../types/product";
import {Box, Grid} from "@material-ui/core";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
            <Grid container spacing={4}>
                {products ? (
                    products.map(product =>
                        <Grid item xs={12} sm={6} md={3}>
                            <ProductItem
                                key={product._id}
                                product={product}
                            />
                        </Grid>
                        
                    )
                ) : (
                    <h1>Loading...</h1>
                )}
            </Grid>
    );
};

export default ProductList;

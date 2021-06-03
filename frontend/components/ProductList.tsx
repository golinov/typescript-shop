import React from 'react';
import {IProduct} from "../types/product";
import {Box, Grid} from "@material-ui/core";
import ProductItem from "./ProductItem";

interface ProductListProps {
    products: IProduct[]
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
            <div>
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
            </div>
    );
};

export default ProductList;

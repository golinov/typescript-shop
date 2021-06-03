import React from 'react';
import {IProduct} from "../types/product";

interface TrackItemProps {
    product: IProduct;
}

const ProductItem: React.FC<TrackItemProps> = ({product}) => {
    return (
        <div>
            {product.name}
        </div>
    );
};

export default ProductItem;

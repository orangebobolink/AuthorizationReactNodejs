import React, {FC} from 'react';
import ProductItem from '../ProductItem/ProductItem';
import {IProduct} from '../../../models/IProduct';

interface Props {
    products: IProduct[];
    remove: (product: IProduct) => Promise<void>;
}

const ProductList: FC<Props> = ({products, remove}) => {
    return (
        <div>
            {products.map(product =>
                <ProductItem product={product}
                             remove={remove}/>
            )}
        </div>
    );
};

export default ProductList;
import React, {FC} from 'react';
import ProductItem from '../ProductItem/ProductItem';
import {IProduct} from '../../../models/IProduct';

interface Props {
    products: IProduct[];
    remove: (product: IProduct) => Promise<void>;
    admin: boolean;
}

const ProductList: FC<Props> = ({products, remove, admin}) => {
    return (
        <div>
            {products.map(product =>
                <ProductItem product={product}
                             remove={remove}
                             admin={admin}/>
            )}
        </div>
    );
};

export default ProductList;
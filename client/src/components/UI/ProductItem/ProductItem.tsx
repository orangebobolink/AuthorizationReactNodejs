import React, {FC} from 'react';
import {IProduct} from '../../../models/IProduct';
import cl from './ProductItem.module.css';
import AuthButton from '../AuthButton/AuthButton';

interface Props {
    product: IProduct;
    remove: (product: IProduct) => Promise<void>;
}

const ProductItem: FC<Props> = ({product, remove}) => {

    return (
        <div className={cl.item}
             key={product._id}>
            <div className={cl.item__context}>
                <strong>
                    {product.name}
                </strong>
                <div>{product.price.$numberDecimal}</div>
            </div>
            <div className={cl.item__btn}>
                <AuthButton onClick={async () => await remove(product)}>Удалить</AuthButton>
            </div>
        </div>
    );
};

export default ProductItem;
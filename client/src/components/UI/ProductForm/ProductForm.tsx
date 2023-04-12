import React, {FC, useState} from 'react';
import Input from '../input/Input';
import {IProduct} from '../../../models/IProduct';
import Button from '../button/Button';
import cl from './ProductForm.module.css';
import {Link} from 'react-router-dom';

interface Props {
    create: (product: IProduct) => Promise<void>;
}

const ProductForm: FC<Props> = ({create}) => {
    const [product, setProduct] = useState<IProduct>({_id: '', description: '', price: {$numberDecimal: 0}, name: ''});

    const addNewProduct = async (e: any) => {
        e.preventDefault();

        const newProduct: IProduct = {
            ...product,
            _id: Date.now().toString()
        };

        await create(newProduct);
        setProduct({_id: '', description: '', price: {$numberDecimal: 0}, name: ''});
    };

    return (
        <form className={cl.form}>
            <Input
                value={product.name}
                onChange={(e: any) => setProduct({...product, name: e.target.value})}
                type='text'
                placeholder='Имя'
            />
            <Input
                value={product.price.$numberDecimal}
                onChange={(e: any) => setProduct({...product, price: {$numberDecimal: e.target.value}})}
                type='text'
                placeholder='Цена'
            />
            <Input
                value={product.description}
                onChange={(e: any) => setProduct({...product, description: e.target.value})}
                type='text'
                placeholder='Описание'
            />

            <Button onClick={addNewProduct}><Link to='/'>Создать продукт</Link></Button>
        </form>
    );
};

export default ProductForm;
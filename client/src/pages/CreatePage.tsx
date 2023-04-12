import React, {useContext} from 'react';
import ProductForm from '../components/UI/ProductForm/ProductForm';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {IProduct} from '../models/IProduct';
import {ProductService} from '../services/ProductService';

const CreatePage = () => {
    const {store} = useContext(Context);

    async function createProduct(product: IProduct) {
        try {
            const response = await ProductService.createProduct(product);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <ProductForm create={createProduct}/>

        </div>
    );
};

export default observer(CreatePage);
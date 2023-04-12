import React, {useContext, useEffect, useState} from 'react';
import {Context} from '../index';
import {IProduct} from '../models/IProduct';
import {ProductService} from '../services/ProductService';
import Header from '../components/UI/header/Header';
import Button from '../components/UI/button/Button';
import ProductList from '../components/UI/ProductList/ProductList';
import {observer} from 'mobx-react-lite';
import {Link, Navigate} from 'react-router-dom';
import AuthButton from '../components/UI/AuthButton/AuthButton';

const ProductPage = () => {
    const {store} = useContext(Context);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    async function getProducts() {
        try {
            const response = await ProductService.fetchProducts();
            setProducts(response.data);
        } catch (e) {
            console.log(e);
        }
    }


    async function deleteProduct(product: IProduct) {
        try {
            const response = await ProductService.deleteProduct(product);
            const newProducts = products.filter(p => p._id != product._id);
            setProducts(newProducts);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>;
    }

    if (!store.isAuth) {
        return (
            <Navigate to='/login'/>
        );
    }

    return (
        <div className='App'>
            <Header/>
            {store.isAdmin
             ?
             <AuthButton onClick={() => {
             }}><Link to='/create'>Создать</Link></AuthButton>
             : <div></div>
            }
            <div>

                <Button onClick={getProducts}>
                    Получить продукты
                </Button>

            </div>
            <ProductList products={products}
                         remove={deleteProduct}
                         admin={store.isAdmin}/>
        </div>
    );
};

export default observer(ProductPage);
import React, {useContext, useEffect, useState} from 'react';
import LoginForm from './components/UI/LoginForm/LoginForm';
import {Context} from './index';
import {observer} from 'mobx-react-lite';
import './styles/App.css';
import {IProduct} from './models/IProduct';
import {ProductService} from './services/ProductService';
import ProductList from './components/UI/ProductList/ProductList';
import Header from './components/UI/header/Header';
import ProductForm from './components/UI/ProductForm/ProductForm';

function App() {
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

    async function createProduct(product: IProduct) {
        try {
            const response = await ProductService.createProduct(product);
            setProducts([product, ...products]);
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
            <LoginForm/>
        );
    }

    return (
        <div className='App'>
            <Header/>
            <ProductForm create={createProduct}/>
            <div>
                <button onClick={getProducts}>
                    Получить товары
                </button>
            </div>
            <ProductList products={products}
                         remove={deleteProduct}/>
        </div>
    );
}

export default observer(App);

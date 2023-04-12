import React from 'react';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import {Route, Routes} from 'react-router-dom';
import CreatePage from '../pages/CreatePage';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/login'
                   element={<LoginPage/>}/>
            <Route path='/'
                   element={<ProductPage/>}/>
            <Route path='/create'
                   element={<CreatePage/>}/>
            <Route path='*'
                   element={<ProductPage/>}/>
        </Routes>
    );
};

export default AppRoute;
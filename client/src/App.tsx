import React from 'react';
import {observer} from 'mobx-react-lite';
import './styles/App.css';
import AppRoute from './components/AppRoute';
import {BrowserRouter} from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <div className='App'>
                <AppRoute/>
            </div>
        </BrowserRouter>
    );
}

export default observer(App);

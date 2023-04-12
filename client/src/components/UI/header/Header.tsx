import React, {FC, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';
import cl from './Header.module.css';
import Button from '../button/Button';

const Header: FC = () => {
    const {store} = useContext(Context);

    return (
        <header className={cl.head}>
            <h1>{`Пользователь ${store.user.email}`}</h1>
            <h1>{store.user.isActivated
                 ? 'Аккаунт потвержден по почте'
                 : 'Аккаунт не потвержден по почте'}</h1>

            <Button onClick={() => store.logout()}>Выйти</Button>


        </header>
    );
};

export default observer(Header);
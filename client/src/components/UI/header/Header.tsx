import React, {FC, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';

const Header: FC = () => {
    const {store} = useContext(Context);

    return (
        <header>
            <h1>{`Пользователь ${store.user.email}`}</h1>
            <button onClick={() => store.logout()}>Выйти</button>

            <h1>{store.user.isActivated
                 ? 'Аккаунт потвержден по почте'
                 : 'Аккаунт не потвержден по почте'}</h1>
        </header>
    );
};

export default observer(Header);
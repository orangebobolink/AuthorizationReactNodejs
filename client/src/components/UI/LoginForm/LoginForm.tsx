import React, {FC, useContext, useState} from 'react';
import {Context} from '../../../index';
import {observer} from 'mobx-react-lite';
import cl from './LoginForm.module.css';
import Input from '../input/Input';
import AuthButton from '../AuthButton/AuthButton';
import {Navigate} from 'react-router-dom';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);

    if (store.isAuth) {
        return <Navigate to='/'/>;
    }

    return (
        <div className={cl.div}>
            <h1>SIGN IN</h1>
            <div className={cl.item}>
                <Input onChange={(e: any) => setEmail(e.target.value)}
                       value={email}
                       type='text'
                       placeholder='Email'
                />
                <Input onChange={(e: any) => setPassword(e.target.value)}
                       value={password}
                       type='password'
                       placeholder='Password'
                />
            </div>
            <div className={cl.item}>
                <AuthButton onClick={() => {
                    store.login(email, password);

                }}>
                    Логин
                </AuthButton>
                <AuthButton onClick={() => {
                    store.registration(email, password);

                }}>
                    Регистрация
                </AuthButton>
            </div>
        </div>
    );
};

export default observer(LoginForm);

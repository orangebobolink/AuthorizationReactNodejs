import React from 'react';
import cl from './Input.module.css';

const Input = (props: any) => {
    return (
        <input className={cl.input} {...props}/>
    );
};

export default Input;
import React, {FC} from 'react';
import cl from './Button.module.css';

interface Props {
    children?: React.ReactNode;
    onClick: (e: any) => void;
}

const Button: FC<Props> = ({
                               children,
                               onClick
                           }) => {
    return (
        <button className={cl.button}
                onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
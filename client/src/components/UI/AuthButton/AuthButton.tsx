import React, {FC} from 'react';
import cl from './AuthButton.module.css';

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

const AuthButton: FC<Props> = ({
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

export default AuthButton;
import React from 'react';
import './Button.scss';
import Spinner from "components/common/Button/Spinner/Spinner";

const Button = ({children, isLoading = false, spinner = {}, ...props}) => {
        return (
            <button {...props}>
                {isLoading && <Spinner isLoading={isLoading} {...spinner}/>}
                <span>{children}</span>
                {/*<span style={{opacity: isLoading ? 0 : 1}}>{children}</span>*/}
            </button>
        );
    }
;

export default Button;
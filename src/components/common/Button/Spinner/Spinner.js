import React from 'react';
import './Spinner.scss';

const Spinner = ({isLoading = false, size = 45, color = '#00BDD3'}) => {
    const spinnerCss = {
        width: `${size}px`,
        height: `${size}px`,
    };

    const innerCircleCss = {
        backgroundColor: color
    };

    return (
        isLoading ?
            <div className="spinner" style={spinnerCss}>
                <div className='spinner__inner' style={innerCircleCss}/>
                <div className='spinner__outer' style={innerCircleCss}/>
            </div>
            :
            null
    );
};

export default Spinner;
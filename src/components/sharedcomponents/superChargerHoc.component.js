import React from 'react';

const superCharge = (WrapperComponent) => {
     
    const color = ['light-primary', 'light-danger', 'light-warning','light-success', 'light-dark'];

    const randomColorTheme = color[Math.floor(Math.random() * color.length - 1)] + '-theme';
    return (props) => {
        return (< section className={randomColorTheme}>  <WrapperComponent {...props} /></section>)
    }
};

export default superCharge;
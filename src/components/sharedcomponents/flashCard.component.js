import React from 'react';
import superCharge from './superChargerHoc.component';

const FlashCards = ({title, body}) => {
    const defaultStype = {
        padding: '1rem',
        margin: '0.3rem'
    }
    return (
        <section style={defaultStype}> 
            <h3> {title} </h3>
            <p>{body}</p>
            <footer>Id:{new Date().getTime()}</footer>
        </section>
    )
}

export default superCharge(FlashCards);
import React, {useRef, useState, useContext} from 'react';
import  '../../styles/newletter.css';
import {useFetch} from '../sharedcomponents/fetch.component';
import { ToastContext} from '../../app';

const NewsLetter = () => {
    const [form, setForm] = useState(true);
    const {setToastParams} = useContext(ToastContext);
    const elementRef = useRef('');
    const handler = () => {
        setToastParams({type:'danger', content:'Subscribe donedsdadas dsaadad dsasadasssssssss!!', duration: 80000, show: true});
        setForm(false);
    } ;
    return (<>
        <section className="news-letter">
        <h1 className='dark'>News Letter </h1>
        {
            form ? (<div className="news-letter-form">
            <input ref={elementRef} type="email" placeholder="email" name="email"/>
            <button onClick={handler}type="button" className="dark">subscribe</button> 
            </div>)
            : <h3 className="success">You will be notified when there is update.</h3>
        }
        <News/>
        <h5>Whenever we've got something new, a small message will pop up on your screen :)</h5>
        </section>
    </>);
}


const News = () => {
    const { loading, list }=useFetch();
    console.log('use effect', loading, list);

    return (<h1>New Letter trying handling the page !!</h1>);
}

export default NewsLetter;
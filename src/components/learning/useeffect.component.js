import React, {useState,useEffect} from 'react';

const UseEffect = () => {
       const [test,setTest] = useState(`window side is ${window.innerWidth} px`);
	const addListener = () => {
		window.addEventListener('resize', ()=> setTest(`window side is ${window.innerWidth } px`));
		return () => {
			window.removeEventListener('resize',{});
			console.log('removing the event listner');
		}
	};

	useEffect(addListener, []);
	return ( !test ? <>
			<h1>{test}</h1>
		</> : <h1>Hello friends !</h1>);
};


export default UseEffect;

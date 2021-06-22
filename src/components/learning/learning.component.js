import React ,  { useState }from 'react';


// use state always workes with component it should be enccapsulated in to the component function 1!!
//
// first we learn about the handling of event in react
// onClick and their onMouseOver
//

const Learning = () => {
	const [learn, setLearn] = useState('Intialing I am coming from default state');
	
	const clickHandler = (e) => {
alert('created the alert on the click');
	console.log('event target option and their handling', e);
}
return (
	<>
	<h1 onMouseOver={() =>setLearn('Hey mate ! you have crossed me' )} onClick={() => {setLearn('you got my secret. Lets keep it save:')}}>{learn}</h1>
	<button type='button' onClick={clickHandler} >Create Alert !!</button>
	</>

)

};


const LearningArray = ()=> {
const [learns, setLearns] = useState(['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night']);

	const removeItem = (item) => {
	setTimeout(function(){
			setLearns((prev) => 	{return prev.filter(e => e !=item)});

	},3000);	
	}
	return <>{
			learns.map(learn=> {
				return (
					<>
					<h3 style={{disaply:'inline'}}>{learn}</h3>
					<button onClick = {() => { removeItem(learn)}}> Remove </button>
					<br/>
					</>)
							})}
		<br/>
		<button type='button' onClick= {()=> {setLearns([])}}> Clear All</button>
		</>

}

export default LearningArray


import React, { useState, useEffect} from 'react';
// import {CORONA_FETCH_API_URL} from '../../adapters/corona.js';
import './corona.css';
const Corona = () => {
	// const [corona] = useState([]);
	const [isLoader] = useState(true);
	const fetchCorona = ()=> {
		// fetch(CORONA_FETCH_API_URL+ '?limit=2000').then(data => data.json()).then(data=> { 
		// 		setCorona(data.data);
		// 		setIsloader(false);
		// 	});
	};

	useEffect(()=> {fetchCorona()}, []);

// const removeElement = (id) => {
// const filter = corona.filter(data => data._id!==id);
// 	setCorona(filter);

// };


return isLoader ? <span className='loader'/> : (
	
	<div>
	<article className='coronaContainer'>
	<h1>Corona Cases</h1>
	
		{/* <table>
			<thead>
				<tr><th>Location</th>
				<th>Date</th>
				<th>Day</th>
				<th>Weekly</th>
				<th>Monthly</th>
				<th>Report</th>
				</tr>
			</thead>
			<tbody className='active'>
				{
					corona.map((data)=> 
					{
						return <CoronaList key={data._id} removeElement={removeElement} keys={data._id}{...data}/>
					})
				}
			</tbody>
		</table> */}
	</article>
	</div>
);
};



// const  CoronaList = ({new_cases,total_cases, weekly_death, createdAt, _id, location, removeElement})=> {

// 	return (
// <tr>
// 	<td>{location}</td>
// 	<td>{createdAt}</td>
// 		<td> {new_cases} </td>
// 		<td>{weekly_death} </td>
// 		<td>{total_cases}</td>
// 		<td> <button className='dark danger' onClick={()=> removeElement(_id)}> X </button>
// 		</td></tr>
// 	);

// }
export default Corona;

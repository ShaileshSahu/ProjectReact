import React, {useState, useEffect} from 'react';
import '../../index.css';
import '../../styles/basic.css';
import {API_NEWS_URL} from '../../adapters/new.js';
const News = () => {
	const [newsDataSet,  setNewsDataSet] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const intialize =  () => {
		try {
			setIsLoading(true);
			fetch(API_NEWS_URL)
				.then((data)=> { return data.json()})
				.then(data => {
						setNewsDataSet(data.data);
						setIsLoading(false);
				}).catch(error => { return new Error('Error during fetch')});
				
		} catch (error) {
			return <h3>Error Occured during fetching the result</h3>
		}
	
	}

	useEffect(()=> {intialize()},[]);

	return isLoading? ( 
<><h1 style={{textAlign:'center'}} className='newHeading'>

</h1>
		<div className='loader'>loading...</div></>):(
			<>
			<img src="https://i.ibb.co/5GpVs75/logo.png" alt="update it"></img>
			
		<article className='mainContainer'> 
			{
				newsDataSet.map(newData=> {
					return <New key={newData.id} {...newData}/> 
				})}
		</article></>)


}



const New = ({imageReal,link,type, image,title, dataSource, date, shortStory }) => {
	return (
	<article className='newsChild'>
	<img src={ imageReal && imageReal.includes('default') ? image : imageReal } alt={imageReal && imageReal.includes('default') ? image : imageReal}/>
	<h3>{title}</h3>
	<span>{date}</span>
	<h5 className='primary'>{type}</h5>
	<p> { shortStory }
		{  <a target='blank' href={link}> Read Full Story </a>}	
	</p>
        
	<h5>{dataSource}</h5>
	</article>
)

}
export default News;

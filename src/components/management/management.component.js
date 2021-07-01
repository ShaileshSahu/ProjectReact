import React, {useState} from 'react';
import Todo from './todo/todo.component';
import Pomodoro from './pomodoro/pomodoro.component';
const Management = () => {
	const [menu] = useState( ['todo', 'pomodoro','habit tracker' ] );
	const [selectedMenu, setSelectedMenu] = useState('todo');
	

return (<>
		<section className='management-container'>
				<h2 className='center' > Management</h2>
	    <MenuButton menu={menu} setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />
		{
			selectedMenu === 'todo' ? <Todo/> : selectedMenu === 'pomodoro' ? <Pomodoro/> : <h1>Not Selected</h1>
	
		}
			</section>

		</>);

}


const MenuButton = (props) => {

		return (
		<div  style={{marginLeft: '60%'}}>
			{
			props.menu.map((e,index) => {
				return (<button  key={index} className={ e===props.selectedMenu ? 'btn btn-linear warning-font': 'btn btn-linear primary-font' } onClick={()=> props.setSelectedMenu(e)}>{e}</button>)
			})
		}</div>);
	
}
export default Management;

import React, { useState, useReducer, useEffect, useContext  } from "react";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import "./todo.css";
import * as request from 'request-promise';
import { TODO_API_URL } from '../../../adapters/todo';
import * as moment from 'moment';
import {ToastContext} from '../../../app';

const reducerOptions = (state, action) => {
	let { type, ...externalData } = action;
	
	switch (type) {
		case "add": {
			const newState = { ...state, ...externalData };
			console.log("new state of the add", newState);
			return newState;
		}

		case "addItem": {
			state.push(externalData);
			return state;
		}

		case "removeItem": {
			const newState = state.filter(
				(e) => e._id !== externalData._id
			);
			return newState;
		}

		default: {
			return '';
		}
	}

};


const TodoContext = React.createContext();
// Main component for the todo task and handle their related functionality!!

const Todo = () => {
	const {setToastParams} = useContext(ToastContext);
	const [createTask, dispatcher] = useReducer(reducerOptions, {
		todo: "",
		priority: "",
		description: "",
	});
	const [isDescription, setIsDescription]=useState(false);
	const [refresh, setRefresh] = useState(false);
	
	// for creating the todo !!
	const createTodoHandler = (e) => {
		e.preventDefault();
		if (createTask.todo && createTask.priority) {
			const options  = {
				uri: TODO_API_URL,
				body: {
					todo: createTask.todo,
					priority: createTask.priority,
					description: createTask.description 
				},
				json: true,
				method: 'POST'
			};
			request(options).then((data) => { 
				setToastParams({show: true, type:'success', content:'Todo created successfully.'});
				document.getElementById('create-todo').reset();
				dispatcher({type: 'add', todo:'', priority:'', description:''});
				setRefresh(true);
				return null;
			}).catch(error => {
				setToastParams({show: true, type:'danger', content:'Error via server. Please contact server team.'});
				return null;
			});
		} else {
			setToastParams({show: true, type:'danger', content:'Please fill all the required todo task details'});
		}
	};

	// for updating the todo !!
	const completeTodoHandler = (id) => {
		new Audio('https://microserviceshailesh.s3.ap-south-1.amazonaws.com/ding-sound-effect_2.mp3').play();
		const options = {
			method: 'PUT',
			body: {
				taskStatus:'complete'
			},
			json:true,
			uri: TODO_API_URL + `/${id}`
		};
		request(options).then((data)=>{ 
			setToastParams({show: true, type:'success', content:'Task updated successfully.'});
			setRefresh(true);
		
			return null;
		}).catch(err => {
			setToastParams({show: true, type:'danger', content:'Error via server. Please contact server team.'});
			return null;
		});
	};


	// for deleting the todo !!
	const removeTodoHandler = (id) => {
		new Audio('https://microserviceshailesh.s3.ap-south-1.amazonaws.com/MetalGarbageDrop+PEHD103305.mp3').play();
		const options = {
			method: 'PUT',
			body: {
				status:'delete'
			},
			json:true,
			uri: TODO_API_URL + `/${id}`
		};
		request(options).then((data)=>{ 
			setRefresh(true);
			setToastParams({show: true, type:'success', content:'Deleted the todo task.'});

			return null;
		}).catch(err => {
			setToastParams({show: true, type:'danger', content:'Error in deleting the todo.'});
			
			return null;
		});
	};
	
	// change the value based on the event of the system !!
	const onChangeValueHandler = (e) => {
		dispatcher({ type: "add", [e.target.name]: e.target.value });
	};

	return (
		<>
			<section className="todoContainer">
				<h2> Todo </h2>
				<article className="createTodo">
					<form id='create-todo'>
						<div>
							<input
								onChange={
									onChangeValueHandler
								}
								type="text"
								placeholder="todo"
								name="todo"
							/>
						</div>
						<div>
							<select
								name="priority"
								onChange={
									onChangeValueHandler
								} value='default'
							>
								<option value="default"> Priority </option>

								<option value="high">
									High
								</option>


								<option value="medium">
									Medium
								</option>

								<option value="low">
									Low
								</option>

								
							</select>
						</div>
						<button className='primaryBtn' onClick={(e)=>{ e.preventDefault();setIsDescription(!isDescription)}}>Description</button>
						<button
							style={{
								display:
									"inline",
							}}
							onClick={
								createTodoHandler
							}
							className="dark"
						>
							Create Task
						</button>
							        <div>
							{isDescription  && <input style={{display:'inline',minWidth:'32.1rem'}}text='textarea' placeholder='description'  name='description' onChange={onChangeValueHandler}/>}
						</div>

					</form>
				</article>
				<TodoContext.Provider value={
					{
						completeTodoHandler,
						refresh,
						removeTodoHandler,
						setRefresh
					}
				}>
				<TodoList />
				</TodoContext.Provider>
			</section>
		</>
	);
};

const TodoList = () => {
	const {completeTodoHandler, refresh, setRefresh, removeTodoHandler} = useContext(TodoContext);
	const [todoList, setTodoList] = useState([]);
	const [isLoader, setIsLoader] = useState(false);
	useEffect(() =>{
		setIsLoader(true);
		setRefresh(true);
	},[]); // intialize only one time !!
	
	// currently this is used to fetch the api !!
	if(refresh){
		request({
			method:'GET',
			uri: TODO_API_URL,
			json:true
		}).then((result)=> { 
			setIsLoader(false);
			setTodoList(result.data);
			setRefresh((state)=> {state=false});
			return null;
			
		}).catch(e => {
			setIsLoader(false);
			setRefresh((state)=> { state=false });
			return null;
		});
	}

	return (
		<>
		{isLoader && <h5 className='loader-cursor'></h5> }
		<table class='todoTable'>
			<thead>
				<tr>
					<th>Todo</th>
					<th>Description</th>
					<th>Date</th>
					<th>Priority</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{
					todoList.map(data => {
						return (
					<tr className={ data.taskStatus === 'complete' ? 'complete': 'pending'} key={data._id} >
						<td style={{maxWidth:'200px'}}>
							<span>{
								moment(data.createdAt).isSame(new Date(),'day')
								&& <span className='small alert '> Today</span>}</span>
							{data.todo}	
						</td>
						<td style={{maxWidth:'100px', overflow:'overlay'}}>{data.description ?? 'N/A' }</td>
						<td>{moment(data.createdAt).format('Do MMMM YY')}</td>
						<td > <span className={ data.priority === 'high' ? 'high-badge' : data.priority == 'low' ? 'low-bdge' : 'medium-badge'  }>{data.priority}</span></td>
						<td>
							{ data.taskStatus !== 'complete' && (
							<>
								<button>
									<FcCheckmark onClick={()=>{completeTodoHandler(data._id)}} />
								</button>
							
								<button  onClick={()=> {removeTodoHandler(data._id)}}>
									<FcEmptyTrash />
								</button>
							</>)
							}
								</td>
							</tr>
						);
					})
				}
			</tbody>
		</table>
		
		</>
	);
};
export default Todo;

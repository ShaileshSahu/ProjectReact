import React, { useState } from 'react';
import {USER_REGISTRATION_API} from '../../adapters/user';
const request = require('request-promise');
const Signup = () => {
	const [people, setPeople] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [alert,setAlert] = useState(false);
	const [sucess,setSucess] = useState(false);
	const [content, setContent] = useState('');
	const onChangeHandler = (e) => {
		setPeople((val) => {
			return { ...val, [e.target.name]: e.target.value };
		});
	};
	
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (! (people.username && people.password && people.email)) {
			setAlert(true);
			setContent('Please fill all the details which required.');
			setTimeout(()=> { setAlert(false); setContent('');}, 4000);
		}	else {
			console.log('user api', USER_REGISTRATION_API);
			request({
				method: 'POST',
				body:{
					email: people.email,
					userName: people.username,
					password: people.password
				},
				uri: USER_REGISTRATION_API,
				json: true
			}).then(data => {
				if (data.message) {
					setAlert(true);
					setContent('Server Error!!')
				} else {
					setContent(`Registration process complete & your id is ${data._id} !`);
					setSucess(true);
				}
			});
		}
	};

	return (
	<>
		<form className="form-control">
		<h1 style={{textAlign:'left'}}>Registration</h1>
			{alert && <h3 className="alert" > {content} </h3>}
			{ !sucess ?
		<> <div>
				<input
					type="text"
					name="username"
					placeholder="username"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={onChangeHandler}
				/>
			</div>
			<div>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={onChangeHandler}
				/>
			</div>
		<br/>
		<button  onClick={onSubmitHandler} className="dark">
				Signup
			</button>
			</>
: <h3 className='success'>{content}</h3> }
		</form>
	</>	);
};

export default Signup;
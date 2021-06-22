import React, { useState, useReft } from "react";

// there are two ways to handle this kind of stuff first is set them via onChange on by one and other use oneProperty and update
// them via handling this case !!
//
const FormControlSimple = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSignup = (e) => {
		e.preventDefault();
		console.log(email, username, email);
	};

	return (
		<form className="form-control">
			<div>
				<label html>User Name</label>
				<input
					type="text"
					name="username"
					placeholder="UserName"
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</div>
			<div>
				<label html>Email</label>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={(e) =>
						setEmail(e.target.value)
					}
				/>
			</div>
			<div>
				<label html>Password</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) =>
						setPassword(e.target.value)
					}
				/>
			</div>
			<button onClick={handleSignup} className="dark">
				Signup
			</button>
		</form>
	);
};

const FormControl = () => {
	const [people, setPeople] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [alert,setAlert] = useState(false);

	const onChangeHandler = (e) => {
		setPeople((val) => {
			return { ...val, [e.target.name]: e.target.value };
		});
	};
	
	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (! (people.username && people.password && people.email)) {
			setAlert(true);
		}	
	};

	return (
	<>
		<form className="form-control">
		<h1 style={{textAlign:'left'}}>Registration</h1>
			{alert && <h3 className="alert" >Please fill the details properly. </h3>}
		<div>
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
		</form>
	</>	);
};
export default FormControl;

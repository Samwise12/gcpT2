import React, { useState } from 'react';

function Navbar() {
	const [ user, setUser ] = useState({userData: {userName: '',userPassword: ''}});
	const D = ({ children }) => {
		return (
			<div style={{display: 'flex',justifyContent: 'center'}}>
				{children}
			</div>
			)
	};
	const handleChange = e => {
		setUser({userData: {...user.userData ,[e.target.name]: e.target.value}});
	};
	const onSubmit = e => {
		e.preventDefault();
		console.log(user);
	};

	return(
		<aside className="nav">
			<h1 style={{display: 'flex',justifyContent: 'center'}}>User</h1>
			<D>
				<img
					style={{height:'55px'}}
					src={process.env.PUBLIC_URL + '/images/userCircle.png'} 
					alt="user icon" 
				 />
			 </D>
			<D>
				{" "}&nbsp;
			</D>
			<form onChange={handleChange} onSubmit={onSubmit} >
				<div className="form-group">
					<label htmlFor="userName">User Name</label>
					<input name="userName" type='text' className="form-control" placeholder="Enter UserName" />
				</div>
				<span className="form-group">
					<label htmlFor="inputPassword">Password</label>
					<input name="userPassword" type='password' className="form-control" placeholder="Enter Password" />
				</span>				
				<button type="submit" className="ml-1 mt-2 btn btn-primary">Submit</button>

			</form>
		</aside>
		)
};

export default Navbar;

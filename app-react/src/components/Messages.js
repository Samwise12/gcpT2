import React, { useEffect, useState } from 'react';

import api from '../api';

function Messages() {
	const [names, setNames] = useState([]);
	const [ postName, setPostNames ] = useState('');
	const [ nameLoaded, setNameLoaded ]	= useState(false);

	useEffect(() => {	    
		getData();
	},[]);
	const onSubmit = async e => {
		e.preventDefault();
		await api.data
			.post(postName);
		await getData();
	};
	const handleChange = e => {
		setPostNames(e.target.value)
	};
	const handleDelete = nameId => {
		api.data.del(nameId).then(()=> {
			let getIndex;
			names.some((name, index)=> {
				let id = name[0];
				if (id === nameId) {
					getIndex = index;
					return true;
				}
				return null;
			});
			delete names[getIndex];		
			setNames(names.filter(o=>o));			
	  	});
	};	
	const getData = () => {
	    api.data
	      .get()
	      .then(resNames => {
	      	resNames = resNames.map(o=>{
	      	 return [o.id, o.name]
	      	});
	       setNameLoaded(true)
	       setNames(names => resNames);
	      	}).catch(err => {
	      		setNameLoaded(false);
	      		console.log(err);
	      	});
	};

	return (
		<div className="Messages_Component">
			{nameLoaded && names.length ===0 && <div>
				There are no messages.
			</div>}
			{
				names.map((names, index)=>{
								const [ name, nameId ] = [names[1], names[0]]
								return (
									<span
									 style={(index % 2*index + 1 === 1) ? {background: "lightgray"} : {background: "lightblue"}}
									 className="list_size d-flex mb-1 pl-2 pr-2 pt-1 pb-1 txtRobo" key={index}>
										<li className="list_font_size" >&nbsp;{name}</li>
										<i
										onClick={()=> handleDelete(nameId) } 
										style={{alignSelf: "center"}}
										className="fa fa-times fa-lg ml-auto"
										aria-hidden="true"></i>
									</span>
									)})
			}
{!nameLoaded && <div style={{height: "16rem", width: "16rem", display: "flex"}}>
			  
			  <span
				   style={{height: "16rem", width: "16rem", position: "absolute"}}
				   className="spinner-border ml-5"
				   role="status">
			  </span>
			  <span
			  style={{
			  	position: "relative",
			    alignItems: "center",
			    width: "16rem",
			    marginLeft: "3rem",
			    display: "flex",
			    justifyContent: "center"
			  }}
			  >
			  	Loading...
			  </span>

			</div>}			
			<br/>
			<form 
			onChange={ handleChange }
			onSubmit={onSubmit}
			style={{width: '75%'}}
			>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input 
						type="text"
						className="form-control"
						aria-describedby="nameGet" 
						placeholder="Enter Name"
						name="name"
					/>
				</div>
			</form>	

		</div>
		)
}

export default Messages;
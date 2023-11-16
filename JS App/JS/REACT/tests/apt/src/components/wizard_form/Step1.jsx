import React, { useState } from 'react'

export const Step = ({onNext}) => {
	const[formState, setFormState] = useState({username: "", password:""});
	const handleChange = (event) => {
		console.log(event);		
		const name = event.target.name;
		const value = event.target.value;
		setFormState({...formState, [name]: value});
	}
	return (
		<div>
			<input

				name='username' 
				type="text" 
				placeholder='Enter username' 
				value={formState.username}
				onChange={handleChange}
			/><br/>

			<input 
				name='password' 
				type="password" 
				placeholder='Enter password' 
				value={formState.password}
				onChange={handleChange}
			/>
			<br/>
			<button onClick={onNext}>next</button>
		</div>
	)
}


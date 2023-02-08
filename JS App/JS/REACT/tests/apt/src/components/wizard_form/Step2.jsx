import React, { useState } from 'react'

export const Step2 = ({onNext, onPrevious}) => {
	const[formState, setFormState] = useState({username: "", registrationNumber:""});
	const handleChange = (event) => {
		console.log(event);		
		const name = event.target.name;
		const value = event.target.value;
		setFormState({...formState, [name]: value})
	}
		return (
        <div>
			<button onClick={onPrevious}>previous</button><br></br>
            <input
				name='username' 
				type="text" 
				placeholder='Enter Username' 
				value={formState.username}
				onChange={handleChange}
			/><br/>
			<input 
				name="registrationNumber" 
				type="text" 
				placeholder='Enter Registration Number'
				value={formState.regNo}
				onChange={handleChange}
			/><br/>
            <button onClick={onNext}>next</button>
        </div>
    )
}

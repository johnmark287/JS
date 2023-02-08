import React, { useState } from 'react'

export const Step3 = ({onPrevious, onSubmit}) => {
    const[formState, setFormState] = useState({course: "", gender:""});
	const handleChange = (event) => {
		console.log(event);		
		const name = event.target.name;
		const value = event.target.value;
		setFormState({...formState, [name]: value});
    }
    return (
        <div>
            <button onClick={onPrevious}>Previous</button><br></br>
            <input 
                name="course" 
                type="text" 
                placeholder='Enter Reg. No.'
                value={formState.regNo}
                onChange={handleChange}
            />
            <label htmlFor="gender"></label>
            <select name="gender" id="gender">
                <option value="m"></option>
                <option value="f"></option>
                <option value="o"></option>
            </select>
			<br/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

import React, { useState } from 'react'

export const Counter = () => {
	const[counter, setCounter] = useState(0)
	const handleIncrement = () => {
		setCounter(counter + 1);
	}
	const handleDecrement = () => {
			setCounter(counter - 1);
	}
	return (
		<div style={{
			flexDirection: 'row',
			display: 'flex',
			margin: '0 auto'
			// justifyContent: 'space-between'
		}} >
			<button onClick={ handleDecrement }>-</button>
			<span>{ counter }</span>
			<button onClick={ handleIncrement }>+</button>
		</div>
	)
}

import React, { useState } from 'react';
import './Style.css';

const Agregar = (props) => {

	const [userInput, setUserInput] = useState('');

	const sendForm = (e) => {
		e.preventDefault();
        props.addTodo(userInput);
        setUserInput("");
	}

	return (
		<div>
			<form onSubmit={sendForm}>
				<div>
					<input
						type='text'
						className='input-add'
						value={userInput}
						placeholder='Enter your task'
						onChange={(e) => setUserInput(e.target.value)}
					/>
				</div>
                <button className='btn-add' type='submit'>Add</button>
            </form>
		</div>
	);
};

export default Agregar;
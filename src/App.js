import React, { useState } from 'react';
import Agregar from './components/Agregar';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);

	const onComplete = (id) => {
		setTodos(todos.map((todo) => {
			return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
		}))
	}

	const onDeleteItem = (id) => {
		setTodos([...todos].filter(todo => todo.id !== id))
	}

	const addTodo = (newTodo) => {
		let newItem = {
			id: +new Date(),
			task: newTodo,
			completed: false
		};

		setTodos([...todos, newItem]);
	}

	return (
		<div className='contenedor-principal'>
			
			<Agregar addTodo={addTodo} />
			
			{todos.map((todo, index) => {

				return (
				<div key={index}>
					<label>{todo.completed ? <del>{todo.task}</del> : <span>{todo.task}</span> }</label>
					<input type='checkbox' checked={todo.completed} onChange={() => onComplete(todo.id)} className="check"/>
					<button className='btn-delete' onClick={() => onDeleteItem(todo.id)}>Delete</button>
				</div>
				)
			})}
		</div>
	);
}

export default App;

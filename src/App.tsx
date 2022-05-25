import React from "react";

import "./App.css";
import NewTodo from "./compoenents/NewTodo";
import Todos from "./compoenents/Todos";
import Todo from "./models/todo";

function App() {
	const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

	const addTodoHandler = (todoText: string) => {};

	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	);
}

export default App;

import React, { useState } from "react";

import "./App.css";
import NewTodo from "./compoenents/NewTodo";
import Todos from "./compoenents/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
		</TodosContextProvider>
	);
}
export default App;

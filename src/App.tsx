import React from "react";

import "./App.css";
import Todos from "./compoenents/Todos";

function App() {
	return (
		<div>
			<Todos items={['Learn React', 'Learn Typescript']}/>
		</div>
	);
}

export default App;

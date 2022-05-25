import React, { useRef } from "react";

const NewTodo = () => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			// Thow an error
            return;
		}
	};

	return (
		<div onSubmit={submitHandler}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoTextInputRef} />
			<button>Add Todo</button>
		</div>
	);
};

export default NewTodo;

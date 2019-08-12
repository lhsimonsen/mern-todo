import React, { useState } from "react";
import axios from "axios";

const TodoCreate = () => {
  const [description, setDescription] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      todo_description: description,
      todo_completed: false
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    console.log(`Todo created: ${description}`);
    setDescription("");
  };

  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>Create todo</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="todo_description"
          placeholder="todo description"
          onChange={onChangeDescription}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoCreate;

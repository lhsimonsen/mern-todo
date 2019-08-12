import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/todos")
      .then(res => {
        setTodoList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todoList.map(todo => (
          <li>{todo.todo_description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import React, { useContext } from "react";
import { TasksDispatchContext } from "./tasksContext";

const Button = () => {
  const dispatch = useContext(TasksDispatchContext);
  const handleAddTask = () => {
    const x = document.querySelector("form");
    console.log(x);
    dispatch({ type: "add", value: x.todo.value });
    // setAddingTask("");
  };
  return <button onClick={handleAddTask}>Click me to add task</button>;
};

export default Button;

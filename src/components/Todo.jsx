import React, { Fragment, useReducer, useState } from "react";
import { TodoStyle, TodoDiv } from "./styles/Todo.styled";
import {
  TasksContext,
  TasksDispatchContext,
  tasksReducer,
} from "./tasksContext";
import TodoDivContainer from "./TodoDivContainer";

const Todo = ({ darkMode }) => {
  let savedTodoTasks;
  if (
    JSON.parse(localStorage.getItem("todos")) &&
    JSON.parse(localStorage.getItem("todos")).length !== 0
  ) {
    savedTodoTasks = JSON.parse(localStorage.getItem("todos"));
  }
  const [addingTask, setAddingTask] = useState("");
  const [tasks, dispatch] = useReducer(tasksReducer, savedTodoTasks || []);
  const [filter, setFilter] = useState("All");
  const itemsRemaining = tasks.filter((item) => !item.complete).length;

  if ([]) {
    console.log("working");
  }

  // const setItem = localStorage.setItem("todos", JSON.stringify(tasks));

  console.log(savedTodoTasks);

  const handleChange = (e) => {
    setAddingTask(e.target.value);
  };
  const addTask = (event) => {
    event.preventDefault();
    dispatch({ type: "add", value: event.target.todo.value });
    const updatedTask = tasks;
    setAddingTask("");
  };
  const completed = (id) => {
    console.log(tasks);
    dispatch({
      type: "complete",
      id: id,
    });
  };
  const filterTask = (filterBy) => {
    setFilter(filterBy);
  };

  const clearComplete = () => {
    dispatch({
      type: "clearComplete",
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "deleteTodo",
      id,
    });
  };

  return (
    <Fragment>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <TodoStyle>
            <form onSubmit={(e) => addTask(e)}>
              <input
                type="text"
                name="todo"
                onChange={handleChange}
                value={addingTask}
                placeholder="Create a new todo..."
              />
              {/* <button>submit</button> */}
            </form>
            <section className="tasks">
              {/* {tasks.length > 0 && ( */}
              <div className="todos">
                {/* {filter.toLowerCase() === "all"
                    ? tasks.map((item, index) => (
                        <TodoDivContainer
                          key={index}
                          item={item}
                          deleteTodo={deleteTodo}
                          completed={completed}
                        />
                      ))
                    : tasks
                        .filter((item) => item[filter.toLowerCase()])
                        .map((item, index) => (
                          <TodoDivContainer
                            key={index}
                            item={item}
                            deleteTodo={deleteTodo}
                            completed={completed}
                          />
                        ))} */}
                {tasks.length !== 0 ? (
                  filter.toLowerCase() === "all" ? (
                    tasks.map((item, index) => (
                      <TodoDivContainer
                        key={index}
                        item={item}
                        deleteTodo={deleteTodo}
                        completed={completed}
                      />
                    ))
                  ) : filter.toLowerCase() !== "all" &&
                    tasks.filter((item) => item[filter.toLowerCase()])
                      .length === 0 ? (
                    <p
                      className={`filtered--task ${!darkMode && "light--mode"}`}
                    >
                      No {filter} task
                    </p>
                  ) : (
                    tasks
                      .filter((item) => item[filter.toLowerCase()])
                      .map((item, index) => (
                        <TodoDivContainer
                          key={index}
                          item={item}
                          deleteTodo={deleteTodo}
                          completed={completed}
                        />
                      ))
                  )
                ) : (
                  <p className={`empty--task ${!darkMode && "light--mode"}`}>
                    No To-do task
                  </p>
                )}
              </div>
              {/* )} */}
              <div className="filter">
                <div>
                  {itemsRemaining} {itemsRemaining <= 1 ? `item` : `items`} left
                </div>
                <div className="filter--filter">
                  {["All", "Active", "Complete"].map((item, index) => (
                    <span
                      key={index}
                      onClick={() => filterTask(item)}
                      className={`${filter === item ? "active--filter" : ""} ${
                        !darkMode && "light--mode"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="clear--finished" onClick={clearComplete}>
                  Clear Completed
                </div>
              </div>
            </section>
          </TodoStyle>
          {/* <Button /> */}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </Fragment>
  );
};

export default Todo;

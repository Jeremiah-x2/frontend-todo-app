import { createContext } from "react";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export function tasksReducer(tasksState, action) {
  switch (action.type) {
    case "add":
      if (action.value !== "") {
        return [
          ...tasksState,
          {
            id: Math.floor(Math.random() * 10000),
            value: action.value,
            complete: false,
            active: false,
          },
        ];
      }
      break;
    case "complete":
      return [...tasksState].map((item) => {
        if (item.id === action.id) {
          if (item.active === false && item.complete === false) {
            return { ...item, active: true };
          }
          if (item.active && !item.complete) {
            return { ...item, active: false, complete: true };
          }
          if (!item.active && item.complete) {
            return { ...item, complete: false };
          }
        }
        return item;
      });
    case "clearComplete":
      return [...tasksState].filter((item) => !item.complete);
    case "deleteTodo":
      return [...tasksState].filter((item) => item.id !== action.id);
    case "reorder":
      let temp = tasksState[action.oldPos];
      // tasksState[action.newPosition] = tasksState[temp];
      [...tasksState][action.oldPos] = [...tasksState][action.newPosition];
      [...tasksState][action.newPosition] = temp;
      return [...tasksState];
    default:
      return;
  }
}

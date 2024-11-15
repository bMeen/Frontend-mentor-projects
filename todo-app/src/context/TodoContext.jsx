import { createContext, useContext, useReducer, useState } from "react";

const TodoContext = createContext();

function generateRandomId() {
  return Math.floor(1000 + Math.random() * 9000);
}

const todo = [
  {
    task: "Complete online JavaScript course",
    completed: true,
    id: generateRandomId(),
  },
  {
    task: "Jog around the park 3x",
    completed: false,
    id: generateRandomId(),
  },
  {
    task: "10 minutes meditation",
    completed: false,
    id: generateRandomId(),
  },
  {
    task: "Read for 1 hour",
    completed: false,
    id: generateRandomId(),
  },
  {
    task: "Pick up groceries",
    completed: false,
    id: generateRandomId(),
  },
  {
    task: "Complete Todo App on Frontend Mentor",
    completed: false,
    id: generateRandomId(),
  },
];

const initialState = {
  filter: "All",
  todo,
};

function reducer(state, action) {
  switch (action.type) {
    case "todo/add":
      return {
        ...state,
        todo: [...state.todo, { ...action.payload, id: generateRandomId() }],
      };

    case "todo/completed":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item,
        ),
      };

    case "todo/remove":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };

    case "todo/clearCompleted":
      return {
        ...state,
        todo: state.todo.filter((item) => item.completed !== true),
      };

    case "todo/setFilter":
      return { ...state, filter: action.payload };

    default:
      throw new Error("Action Unknown");
  }
}

function TodoProvider({ children }) {
  const [{ filter, todo }, dispatch] = useReducer(reducer, initialState);
  let filtered = [];

  if (filter === "All") filtered = todo;
  if (filter === "Active")
    filtered = todo.filter((item) => item.completed === false);
  if (filter === "Completed") filtered = todo.filter((item) => item.completed);

  return (
    <TodoContext.Provider value={{ filter, filtered, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("TodoContext was used outside TodoProvider");

  return context;
}

export { TodoProvider, useTodo };

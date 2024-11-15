import { useState } from "react";
import Check from "./Check";
import { useTodo } from "../context/TodoContext";

function Form() {
  const [value, setValue] = useState("");
  const { dispatch } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      task: value,
      completed: false,
    };
    dispatch({ type: "todo/add", payload: newTodo });
    setValue("");
  }

  return (
    <form
      className="bg-very-light-gray dark:bg-very-dark-desaturated-blue mt-6 flex items-center gap-3 rounded-md px-4 py-4 md:gap-4 md:px-6"
      onSubmit={handleSubmit}
    >
      <Check />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Create new todo..."
        className="bg-very-light-gray dark:bg-very-dark-desaturated-blue text-dark-grayish-blue placeholder:dark-grayish-blue dark:text-dark-grayish-blue mt-0.5 block w-9/12 focus:outline-none"
      />
    </form>
  );
}

export default Form;

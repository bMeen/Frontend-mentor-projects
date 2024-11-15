import { useTodo } from "../context/TodoContext";
import Filter from "./Filter";

function Action() {
  const { filtered, dispatch } = useTodo();

  return (
    <div className="text-dark-grayish-blue dark:text-dark-grayish-blue-dk flex items-center justify-between px-4 py-5 md:px-6">
      <p>{filtered.length} items left</p>
      <Filter />
      <p
        className="hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover cursor-pointer"
        onClick={() => dispatch({ type: "todo/clearCompleted" })}
      >
        Clear Completed
      </p>
    </div>
  );
}

export default Action;

import { useSortable } from "@dnd-kit/sortable";
import { useTodo } from "../context/TodoContext";
import { CSS } from "@dnd-kit/utilities";
import Check from "./Check";

function Todo({ item }) {
  const { task, completed, id } = item;
  const { dispatch } = useTodo();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex cursor-pointer items-center justify-between px-4 py-5 md:px-6"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <Check check={completed} id={id} />
        <p
          className={`${completed ? "text-light-grayish-blue dark:text-dark-grayish-blue-dk line-through" : " "}`}
        >
          {task}
        </p>
      </div>
      <img
        src="/images/icon-cross.svg"
        className="w-3"
        onClick={() => dispatch({ type: "todo/remove", payload: id })}
      />
    </li>
  );
}

export default Todo;

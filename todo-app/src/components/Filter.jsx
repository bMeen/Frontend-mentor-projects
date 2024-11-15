import { useTodo } from "../context/TodoContext";

function Filter({ onMobile }) {
  const style =
    "bg-very-light-gray dark:bg-very-dark-desaturated-blue text-dark-grayish-blue dark:text-dark-grayish-blue-dk items-center justify-center gap-4";

  const primary = `${style} hidden md:flex`;
  const mobile = `${style} rounded-md font-bold px-6 py-5 md:hidden flex`;

  const { filter, dispatch } = useTodo();
  const filters = ["All", "Active", "Completed"];

  return (
    <div className={onMobile ? mobile : primary}>
      {filters.map((item, i) => (
        <p
          key={i}
          className={`hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue-hover cursor-pointer ${filter === item ? "text-bright-blue hover:text-bright-blue" : ""} `}
          onClick={() => dispatch({ type: "todo/setFilter", payload: item })}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default Filter;

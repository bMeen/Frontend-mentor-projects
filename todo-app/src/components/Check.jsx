import { useTodo } from "../context/TodoContext";

function Check({ check, id }) {
  const { dispatch } = useTodo();

  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full ${check ? "bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : "border-light-grayish-blue dark:border-dark-grayish-blue border-[1px]"} `}
      onClick={() => dispatch({ type: "todo/completed", payload: id })}
    >
      {check && <img src="/images/icon-check.svg" />}
    </div>
  );
}

export default Check;

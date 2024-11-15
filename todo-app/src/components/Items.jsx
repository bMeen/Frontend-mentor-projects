import Action from "./Action";
import Todos from "./Todos";

function Items() {
  return (
    <div className="bg-very-light-gray dark:bg-very-dark-desaturated-blue divide-light-grayish-blue my-6 divide-y rounded-md">
      <Todos />
      <Action />
    </div>
  );
}

export default Items;

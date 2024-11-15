import Filter from "./Filter";
import Form from "./Form";
import Items from "./Items";
import Logo from "./Logo";

function TodoContainer() {
  return (
    <div className="absolute inset-0 left-1/2 top-1/2 mx-auto w-11/12 max-w-4xl -translate-x-1/2 -translate-y-1/2 text-[13px] md:text-lg">
      <Logo />
      <Form />
      <Items />
      <Filter onMobile={true} />
      <p className="text-dark-grayish-blue dark:text-dark-grayish-blue-dk my-6 text-center">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default TodoContainer;

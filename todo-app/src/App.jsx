import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="relative h-64 w-full bg-[url('/images/bg-mobile-light.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-300 md:bg-[url('/images/bg-desktop-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')] md:dark:dark:bg-[url('/images/bg-desktop-dark.jpg')]">
      <TodoContainer />
    </div>
  );
}

export default App;

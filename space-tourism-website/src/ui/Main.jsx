function Main({ children, className }) {
  console.log(className);
  return (
    <div
      className={`p-300 uppercase text-white sm:p-500 lg:py-600 ${className}`}
    >
      {children}
    </div>
  );
}

export default Main;

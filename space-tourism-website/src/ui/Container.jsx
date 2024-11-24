function Container({ children }) {
  return (
    <div className="grid gap-400 lg:grid-cols-2 lg:items-center">
      {children}
    </div>
  );
}

export default Container;

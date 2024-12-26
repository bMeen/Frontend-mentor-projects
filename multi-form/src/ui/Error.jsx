function Error({ children, className }) {
  return (
    <p
      className={`text-sm font-medium text-strawberry-red lg:text-base ${className}`}
    >
      {children}
    </p>
  );
}

export default Error;

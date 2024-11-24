function Details({ children, className }) {
  return (
    <div className={`mx-auto text-center lg:text-left ${className}`}>
      {children}
    </div>
  );
}

export default Details;

function FeedBack({ message }) {
  return (
    <p className="absolute left-1/2 top-1/2 -translate-x-1/2 text-center text-xl font-medium text-white md:translate-y-1/2 lg:text-2xl">
      {message}
    </p>
  );
}

export default FeedBack;

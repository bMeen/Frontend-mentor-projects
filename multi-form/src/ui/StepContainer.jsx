function StepContainer({ className, children }) {
  return (
    <div
      className={`mx-auto w-11/12 max-w-lg -translate-y-[75px] rounded-xl bg-white px-6 py-7 shadow-lg lg:-translate-y-0 lg:shadow-none ${className} lg:h-full lg:w-8/12 lg:p-0 lg:pt-7`}
    >
      {children}
    </div>
  );
}

export default StepContainer;

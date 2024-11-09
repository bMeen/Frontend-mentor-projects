function Price() {
  return (
    <div className="flex items-center justify-between gap-3 md:flex-col md:items-start">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">$125.00</h1>
        <span className="rounded-md bg-very-dark-blue px-2.5 py-0.5 text-sm font-bold text-white">
          50%
        </span>
      </div>

      <p className="text-lg font-bold text-dark-grayish-blue line-through">
        $250.00
      </p>
    </div>
  );
}

export default Price;

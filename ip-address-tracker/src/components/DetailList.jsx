function DetailList({ detail, value }) {
  return (
    <li className="md:px-6 lg:px-9">
      <h4 className="text-xs font-medium uppercase tracking-widest text-dark-gray md:mb-2 md:font-bold">
        {detail}
      </h4>
      <p className="text-xl font-medium text-very-dark-gray lg:text-2xl">
        {value}
      </p>
    </li>
  );
}
export default DetailList;

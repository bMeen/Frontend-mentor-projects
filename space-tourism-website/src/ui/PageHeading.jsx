function PageHeading({ number, content, className }) {
  return (
    <h3
      className={`mb-300 text-center font-sans-barlow-condensed text-preset-6 uppercase tracking-15p text-white sm:text-left sm:text-text-preset-5-tab lg:text-preset-5-lg lg:tracking-[4px] ${className}`}
    >
      <span className="mr-300 font-bold text-white/25">0{number}</span>{" "}
      {content}
    </h3>
  );
}

export default PageHeading;

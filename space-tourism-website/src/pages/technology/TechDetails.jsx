import TechButtons from "./TechButtons";

function TechDetails({ tech, current, goto }) {
  const { name, description } = tech;

  return (
    <div className="mx-auto mb-300 max-w-lg px-300 text-center sm:mb-500 lg:col-span-1 lg:mb-0 lg:flex lg:min-h-[304px] lg:max-w-full lg:items-center lg:px-0 lg:text-left xl:gap-800">
      <TechButtons current={current} goto={goto} />
      <div className="lg:pl-200 xl:pl-0">
        <h2 className="font-serif text-preset-4 uppercase text-white/50 sm:text-preset-3 lg:text-preset-4-lg">
          The terminology...
        </h2>
        <h1 className="my-200 font-serif text-preset-3 uppercase text-white sm:text-text-preset-3-tab lg:text-preset-3-lg">
          {name}
        </h1>
        <p className="font-sans text-preset-9 leading-[27px] text-blue-300 sm:text-text-preset-9-tab lg:text-preset-9-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TechDetails;
//[635px]

import Details from "../../ui/Details";
import DestinationNav from "./DestinationNav";

function DestinationDetails({ destination }) {
  const { name, description, distance, travel } = destination;

  return (
    <Details className="max-w-lg lg:h-[440.6px]">
      <DestinationNav />
      <h1 className="font-serif text-preset-2 lg:text-preset-2-lg">{name}</h1>
      <p className="mb-300 border-b-2 border-white/25 pb-300 font-sans text-preset-9 normal-case leading-[27px] text-blue-300 lg:mb-500 lg:pb-500 lg:text-preset-9-lg">
        {description}
      </p>
      <div className="flex flex-col gap-300 md:flex-row">
        <div className="flex flex-col gap-150 md:w-1/2">
          <p className="text-preset-7-lg tracking-[2px]">Avg. Distance</p>
          <p className="font-serif text-preset-6-lg">{distance}</p>
        </div>
        <div className="flex flex-col gap-150 md:w-1/2">
          <p className="text-preset-7-lg tracking-[2px]">Est. Travel Time</p>
          <p className="font-serif text-preset-6-lg">{travel}</p>
        </div>
      </div>
    </Details>
  );
}

export default DestinationDetails;

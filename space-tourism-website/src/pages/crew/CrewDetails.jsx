import Details from "../../ui/Details";
import CrewPagination from "./CrewPagination";

function CrewDetails({ currentCrew, current, goto }) {
  const { name, role, bio } = currentCrew;

  return (
    <Details className="relative flex h-full max-w-[539px] flex-col gap-300 pt-300 lg:justify-center">
      <div className="">
        <h2 className="font-serif text-preset-4 text-white/50 sm:text-preset-3 lg:text-preset-4-lg">
          {role}
        </h2>
        <h1 className="mb-300 font-serif text-preset-3 sm:text-text-preset-3-tab lg:text-preset-3-lg">
          {name}
        </h1>
        <p className="mb-600 font-sans text-preset-9 normal-case leading-[27px] text-blue-300 sm:text-text-preset-9-tab lg:text-preset-9-lg">
          {bio}
        </p>
      </div>
      <CrewPagination current={current} goto={goto} />
    </Details>
  );
}

export default CrewDetails;

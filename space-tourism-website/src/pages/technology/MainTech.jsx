import PageHeading from "../../ui/PageHeading";
import Tech from "./Tech";

function MainTech() {
  return (
    <div className="lg:p-600 xl:p-0 xl:py-600 xl:pl-[165px]">
      <div className="min-w-7xl">
        <PageHeading
          number={3}
          content="Space launch 101"
          className="pt-300 sm:p-500 lg:p-0"
        />
        <Tech />
      </div>
    </div>
  );
}

export default MainTech;

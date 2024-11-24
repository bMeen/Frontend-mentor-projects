import { useState } from "react";
import TechDetails from "./TechDetails";
import TechImage from "./TechImage";
import { useContentContext } from "../../context/ContentContext";
import Loader from "../../ui/Loader";

function Tech() {
  const [current, setCurrent] = useState(0);
  const { technology, isLoading } = useContentContext();

  if (isLoading || !technology || technology.length === 0) return <Loader />;

  const currentTech = technology[current];

  function goto(item) {
    setCurrent(item);
  }

  return (
    <div className="grid gap-400 lg:grid-cols-2 lg:items-center">
      <TechImage tech={currentTech} />

      <TechDetails tech={currentTech} current={current} goto={goto} />
    </div>
  );
}

export default Tech;

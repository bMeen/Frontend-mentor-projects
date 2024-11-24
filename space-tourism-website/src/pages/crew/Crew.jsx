import { useState } from "react";
import Container from "../../ui/Container";
import CrewDetails from "./CrewDetails";
import CrewImage from "./CrewImage";
import { useContentContext } from "../../context/ContentContext";
import Loader from "../../ui/Loader";

function Crew() {
  const [current, setCurrent] = useState(0);
  const { crew, isLoading } = useContentContext();

  if (isLoading || !crew || crew.length === 0) return <Loader />;

  const currentCrew = crew[current];

  function goto(item) {
    setCurrent(item);
  }

  return (
    <Container>
      <CrewDetails currentCrew={currentCrew} current={current} goto={goto} />
      <CrewImage currentCrew={currentCrew} />
    </Container>
  );
}

export default Crew;

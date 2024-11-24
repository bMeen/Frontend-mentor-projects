import { useSearchParams } from "react-router-dom";
import { useContentContext } from "../../context/ContentContext";
import DestinationDetails from "./DestinationDetails";
import DestinationImage from "./DestinationImage";
import Container from "../../ui/Container";
import Loader from "../../ui/Loader";

function Destination() {
  const [searchParams] = useSearchParams();
  const { destinations, isLoading } = useContentContext();
  if (isLoading || !destinations || destinations.length === 0)
    return <Loader />;

  const name = searchParams.get("name") || "Moon";
  const destination = destinations.find((item) => item.name === name);

  return (
    <Container>
      <DestinationImage destination={destination} />
      <DestinationDetails destination={destination} />
    </Container>
  );
}

export default Destination;

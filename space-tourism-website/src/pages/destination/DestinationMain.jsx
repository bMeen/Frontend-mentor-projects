import Content from "../../ui/Content";
import Main from "../../ui/Main";
import PageHeading from "../../ui/PageHeading";
import Destination from "./Destination";

function DestinationMain() {
  return (
    <Main>
      <Content>
        <PageHeading number={1} content="Pick your destination" />
        <Destination />
      </Content>
    </Main>
  );
}

export default DestinationMain;

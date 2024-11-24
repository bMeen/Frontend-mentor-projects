import Content from "../../ui/Content";
import Main from "../../ui/Main";
import PageHeading from "../../ui/PageHeading";
import Crew from "./Crew";

function CrewMain() {
  return (
    <Main className={"pb-0 sm:pb-0"}>
      <Content>
        <PageHeading number={2} content="Meet your crew" />
        <Crew />
      </Content>
    </Main>
  );
}

export default CrewMain;

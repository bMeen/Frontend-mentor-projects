import styled from "styled-components";
import Row from "./Row";
import BarChartContainer from "./BarChartContainer";

const StyledMain = styled.div`
  background-color: var(--very-pale-orange);
  padding: 2.5rem 1.5rem;
  border-radius: var(--rounded);
  cursor: pointer;

  & h1 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  & h2,
  span {
    color: var(--dark-brown);
  }

  & p {
    color: var(--medium-brown);
  }
`;

function Main() {
  return (
    <StyledMain>
      <h1>Spending - Last 7 days</h1>
      <BarChartContainer />
      <Total />
    </StyledMain>
  );
}

function Total() {
  return (
    <Row>
      <Row $type="vertical">
        <p> Total this month</p>
        <h2>$478.33</h2>
      </Row>

      <Row $type="vertical" $direction="bottom">
        <span>+2.4%</span>
        <p>from last month</p>
      </Row>
    </Row>
  );
}

export default Main;

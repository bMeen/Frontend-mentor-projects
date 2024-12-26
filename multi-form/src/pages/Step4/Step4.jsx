import StepContainer from "../../ui/StepContainer";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/paragraph";
import Summary from "./Summary";
import Total from "./Total";
import FooterBtns from "../../component/FooterBtns";
import { useNavigate } from "react-router-dom";

function Step4() {
  const navigate = useNavigate();

  return (
    <>
      <StepContainer>
        <Heading>Finishing up</Heading>
        <Paragraph>
          Double-check everything looks OK before confirming.
        </Paragraph>

        <Summary />
        <Total />
      </StepContainer>

      <FooterBtns onClick={() => navigate("/step-5")} />
    </>
  );
}

export default Step4;

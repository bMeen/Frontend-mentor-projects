import StepContainer from "../../ui/StepContainer";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/paragraph";
import ChangePrice from "./ChangePrice";
import FooterBtns from "../../component/FooterBtns";
import { useForm } from "react-hook-form";
import Plan from "./Plan";
import Error from "../../ui/Error";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    img: "/images/icon-arcade.svg",
    type: "Arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    img: "/images/icon-advanced.svg",
    type: "Advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    img: "/images/icon-pro.svg",
    type: "Pro",
    monthly: 15,
    yearly: 150,
  },
];

function Step2() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => navigate("/step-3");

  return (
    <>
      <StepContainer>
        <Heading>Select your plan</Heading>
        <Paragraph>You have the option of monthly or yearly billing</Paragraph>

        <>
          {errors.plan && (
            <Error className="text-right">{errors.plan.message}</Error>
          )}
          <ul className="mb-5 space-y-3 lg:mb-8 lg:flex lg:justify-between lg:space-y-0">
            {plans.map((plan, i) => (
              <Plan key={i} plan={plan} register={register} />
            ))}
          </ul>
        </>

        <ChangePrice />
      </StepContainer>

      <FooterBtns onClick={handleSubmit(onSubmit)} />
    </>
  );
}

export default Step2;

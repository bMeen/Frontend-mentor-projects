import StepContainer from "../../ui/StepContainer";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/paragraph";
import FooterBtns from "../../component/FooterBtns";
import Error from "../../ui/Error";
import AddOn from "./AddOn";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const addOns = [
  {
    id: 1,
    addOn: "Online service",
    content: "Access to multiplayer games",
    monthly: 1,
    yearly: 10,
  },
  {
    id: 2,
    addOn: "Larger storage",
    content: "Extra 1TB of cloud save",
    monthly: 2,
    yearly: 20,
  },
  {
    id: 3,
    addOn: "Customizable Profile",
    content: "Custom theme on your profile",
    monthly: 2,
    yearly: 20,
  },
];

function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => navigate("/step-4");

  return (
    <>
      <StepContainer>
        <Heading>Pick add-ons</Heading>
        <Paragraph>Add-ons help enhance your gaming experience.</Paragraph>

        <>
          {errors.addOn && (
            <Error className="text-right">{errors.addOn.message}</Error>
          )}
          <ul className="space-y-3 lg:space-y-3">
            {addOns.map((add) => (
              <AddOn key={add.id} add={add} register={register} />
            ))}
          </ul>
        </>
      </StepContainer>

      <FooterBtns onClick={handleSubmit(onSubmit)} />
    </>
  );
}

export default Step3;

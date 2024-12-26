import FormInput from "./FormInput";
import Heading from "../../ui/Heading";
import StepContainer from "../../ui/StepContainer";
import FooterBtns from "../../component/FooterBtns";
import Paragraph from "../../ui/paragraph";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../formSlice";

function Step1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, emailAddress, phoneNumber } = useSelector(
    (store) => store.form,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    dispatch(getInfo(data));
    navigate("/step-2");
  }

  return (
    <>
      <StepContainer>
        <Heading>Personal info</Heading>
        <Paragraph>
          Please provide your name, email address, and phone number.
        </Paragraph>

        <form>
          <ul className="space-y-3 lg:space-y-5">
            <FormInput label="Name" error={errors?.name?.message}>
              <input
                type="text"
                id="name"
                className={`${errors.name ? "border-strawberry-red" : "border-light-gray hover:border-purplish-blue"} w-full cursor-pointer rounded border-[1px] p-3 font-medium text-marine-blue outline-none`}
                placeholder="e.g. Stephen King"
                {...register("name", {
                  required: "This field is required",
                })}
                defaultValue={name}
              />
            </FormInput>

            <FormInput
              label="Email Address"
              error={errors?.emailAddress?.message}
            >
              <input
                type="email"
                id="email"
                className={`${errors.emailAddress ? "border-strawberry-red" : "border-light-gray hover:border-purplish-blue"} w-full cursor-pointer rounded border-[1px] p-3 font-medium text-marine-blue outline-none`}
                placeholder="e.g. stephenking@lorem.com"
                {...register("emailAddress", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                defaultValue={emailAddress}
              />
            </FormInput>

            <FormInput
              label="Phone Number"
              error={errors?.phoneNumber?.message}
            >
              <input
                type="tel"
                id="tel"
                className={`${errors.phoneNumber ? "border-strawberry-red" : "border-light-gray hover:border-purplish-blue"} w-full cursor-pointer rounded border-[1px] p-3 font-medium text-marine-blue outline-none`}
                placeholder="e.g. +1 234 567 890"
                {...register("phoneNumber", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Enter a valid phone number",
                  },
                })}
                defaultValue={phoneNumber}
              />
            </FormInput>
          </ul>
        </form>
      </StepContainer>

      <FooterBtns onClick={handleSubmit(onSubmit)} />
    </>
  );
}

export default Step1;

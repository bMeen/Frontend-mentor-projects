import { useDispatch, useSelector } from "react-redux";
import { setPricing } from "../formSlice";

function ChangePrice() {
  const dispatch = useDispatch();
  const { pricingMonthly } = useSelector((store) => store.form);

  return (
    <div className="flex items-center justify-center gap-5 rounded-lg bg-magnolia py-3 text-sm font-medium lg:text-base">
      <span className={pricingMonthly ? "text-marine-blue" : "text-cool-gray"}>
        Monthly
      </span>
      <span className="switch block">
        <input
          id="switch-rounded"
          type="checkbox"
          className="hidden"
          value={pricingMonthly}
          checked={!pricingMonthly}
          onChange={() => dispatch(setPricing())}
        />
        <label
          htmlFor="switch-rounded"
          className="block h-[20px] w-[38px] cursor-pointer rounded-full border-2 border-marine-blue bg-marine-blue p-[3px]"
        ></label>
      </span>
      <span
        className={
          pricingMonthly === false ? "text-marine-blue" : "text-cool-gray"
        }
      >
        Yearly
      </span>
    </div>
  );
}

export default ChangePrice;

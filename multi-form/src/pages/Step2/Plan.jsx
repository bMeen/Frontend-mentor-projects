import { useDispatch, useSelector } from "react-redux";
import { getPlan } from "../formSlice";

function Plan({ plan, register }) {
  const { img, type, monthly, yearly } = plan;
  const { pricingMonthly, pricePlan } = useSelector((store) => store.form);
  const dispatch = useDispatch();

  return (
    <li
      className={`${pricePlan.type === type ? "border-purplish-blue bg-magnolia" : "border-light-gray hover:border-purplish-blue"} cursor-pointer rounded-lg border-[1px] p-4 lg:h-40 lg:w-[30%]`}
    >
      <label className="flex h-full cursor-pointer items-start gap-4 lg:flex-col lg:justify-between">
        <input
          type="radio"
          name="plan"
          value={type}
          className="hidden"
          checked={pricePlan.type === type}
          {...register("plan", { required: "A plan is required" })}
          onClick={() => dispatch(getPlan(plan))}
        />
        <img src={img} alt={type} />
        <div>
          <p className="font-bold text-marine-blue">{type}</p>
          <p className="text-sm font-medium text-cool-gray">
            ${pricingMonthly ? `${monthly}/mo` : `${yearly}/yr`}
          </p>
          {!pricingMonthly && (
            <p className="text-xs font-medium text-marine-blue lg:text-sm">
              2 months free
            </p>
          )}
        </div>
      </label>
    </li>
  );
}

export default Plan;

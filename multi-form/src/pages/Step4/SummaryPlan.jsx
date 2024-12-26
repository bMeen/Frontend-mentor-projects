import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SummaryPlan() {
  const { pricePlan, pricingMonthly } = useSelector((store) => store.form);
  const { type, monthly, yearly } = pricePlan;

  return (
    <div className="flex items-center justify-between border-b-[1px] border-light-gray pb-2 lg:pb-4">
      <div className=" ">
        <p className="font-medium leading-3 text-marine-blue lg:leading-4">
          {type} ({pricingMonthly ? "Monthly" : "Yearly"})
        </p>
        <Link
          to="/step-2"
          className="cursor-pointer text-sm text-cool-gray underline hover:text-purplish-blue"
        >
          Change
        </Link>
      </div>
      <p className="text-sm font-bold text-marine-blue lg:text-base">
        {pricingMonthly ? `$${monthly}/mo` : `$${yearly}/yr`}
      </p>
    </div>
  );
}

export default SummaryPlan;

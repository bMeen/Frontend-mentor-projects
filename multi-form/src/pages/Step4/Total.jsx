import { useSelector } from "react-redux";

function Total() {
  const { pricingMonthly, addOns, pricePlan } = useSelector(
    (store) => store.form,
  );
  const total =
    pricePlan[pricingMonthly ? "monthly" : "yearly"] +
    addOns.reduce(
      (acc, i) => acc + i[pricingMonthly ? "monthly" : "yearly"],
      0,
    );

  return (
    <div className="flex items-center justify-between px-4 lg:px-6">
      <p className="text-sm text-cool-gray lg:text-base">
        Total (per {pricingMonthly ? "month" : "year"})
      </p>
      <p className="font-bold text-purplish-blue">
        ${total}/{pricingMonthly ? "mo" : "yr"}
      </p>
    </div>
  );
}

export default Total;

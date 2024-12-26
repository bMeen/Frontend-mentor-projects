import { useSelector } from "react-redux";

function SummaryAddOns() {
  const { addOns } = useSelector((store) => store.form);

  return (
    <ul className="space-y-2 pt-3 lg:space-y-4 lg:pt-4">
      {addOns.map((add) => (
        <List key={add.id} addOn={add} />
      ))}
    </ul>
  );
}

function List({ addOn }) {
  const { pricingMonthly } = useSelector((store) => store.form);
  const { addOn: content, monthly, yearly } = addOn;

  return (
    <li className="flex items-center justify-between text-sm lg:text-base">
      <p className="text-cool-gray">{content}</p>
      <p className="font-medium text-marine-blue">
        +{pricingMonthly ? `$${monthly}/mo` : `$${yearly}/yr`}
      </p>
    </li>
  );
}

export default SummaryAddOns;

import SummaryAddOns from "./SummaryAddOns";
import SummaryPlan from "./SummaryPlan";

function Summary() {
  return (
    <section className="mb-4 rounded-lg bg-alabaster p-4 lg:p-6">
      <SummaryPlan />
      <SummaryAddOns />
    </section>
  );
}

export default Summary;

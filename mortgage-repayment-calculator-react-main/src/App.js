import "./index.css";
import Form from "./Form";
import ResultSection from "./Result";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <MortgageCalculator />
    </div>
  );
}

function MortgageCalculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interest, setInterest] = useState("");
  const [mode, setMode] = useState("");
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, settotalRepayment] = useState(0);
  const [error, setError] = useState(false);

  const active = mode;

  function handleCalculation(e) {
    e.preventDefault();

    !amount && !term && !interest && !mode ? setError(true) : setError(false);
    if (!amount || !term || !interest || !mode) return;

    const principal = amount;
    const rates = interest / 100 / 12;
    const numMonths = term * 12;

    const monthlyRepay = +(
      (principal * rates * Math.pow(1 + rates, numMonths)) /
      (Math.pow(1 + rates, numMonths) - 1)
    ).toFixed(2);

    const monthlyInterest = +(principal * rates).toFixed(2);
    const totalRepay = +(monthlyRepay * numMonths).toFixed(2);
    const totalInterest = +(totalRepay - principal).toFixed(2);

    if (mode === "repayment") {
      setMonthlyRepayment(monthlyRepay);
      settotalRepayment(totalRepay);
    }

    if (mode === "interest") {
      setMonthlyRepayment(monthlyInterest);
      settotalRepayment(totalInterest);
    }
  }

  function handleClear() {
    setAmount("");
    setTerm("");
    setInterest("");
    setMode("");
    setMonthlyRepayment(0);
    settotalRepayment(0);
    setError(false);
  }

  function handleAmount(e) {
    setAmount(Number(e.target.value));
  }

  function handleTerm(e) {
    setTerm(Number(e.target.value));
  }

  function handleInterest(e) {
    setInterest(Number(e.target.value));
  }

  function handleMode(e) {
    setMode(e.target.value);
  }

  return (
    <div className="main">
      <Form
        amount={amount}
        term={term}
        interest={interest}
        mode={mode}
        onhandleAmount={handleAmount}
        onhandleTerm={handleTerm}
        onhandleInterest={handleInterest}
        onhandleMode={handleMode}
        onhandleCalculation={handleCalculation}
        onhandleClear={handleClear}
        active={active}
        error={error}
      />
      <ResultSection
        monthlyRepayment={monthlyRepayment}
        totalRepayment={totalRepayment}
      />
    </div>
  );
}

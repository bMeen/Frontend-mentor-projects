import { useState } from "react";

export default function Form({
  amount,
  term,
  interest,
  mode,
  onhandleInterest,
  onhandleAmount,
  onhandleTerm,
  onhandleMode,
  onhandleCalculation,
  onhandleClear,

  active,
  error,
}) {
  return (
    <section className="input-section">
      <Title onhandleClear={onhandleClear} />

      <form onSubmit={onhandleCalculation}>
        <MortgageValues
          amount={amount}
          term={term}
          interest={interest}
          onhandleAmount={onhandleAmount}
          onhandleTerm={onhandleTerm}
          onhandleInterest={onhandleInterest}
          error={error}
        />

        <MortgageType
          mode={mode}
          onhandleMode={onhandleMode}
          active={active}
          error={error}
        />

        <CalculateButton />
      </form>
    </section>
  );
}

function Title({ onhandleClear }) {
  return (
    <div className="title">
      <h2>Mortgage Calculator</h2>
      <p className="clear" onClick={onhandleClear}>
        Clear All
      </p>
    </div>
  );
}

function MortgageValues({
  amount,
  term,
  interest,

  onhandleAmount,
  onhandleTerm,
  onhandleInterest,
  error,
}) {
  const [isFocused, setIsFocused] = useState(0);

  return (
    <div>
      <MortgageFigure
        sign={"£"}
        amount={amount}
        onhandleAmount={onhandleAmount}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        id={1}
        error={error}
      >
        Mortgage Amount
      </MortgageFigure>

      <div className="flex">
        <MortgageFigure
          sign={"years"}
          term={term}
          onhandleTerm={onhandleTerm}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          id={2}
          error={error}
        >
          Mortgage Term
        </MortgageFigure>

        <MortgageFigure
          sign={"%"}
          interest={interest}
          onhandleInterest={onhandleInterest}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          id={3}
          error={error}
        >
          Interest Rate
        </MortgageFigure>
      </div>
    </div>
  );
}

/*  ${isFocused ? "focused" : ""} */
/* focus={focus}
        id={1}
        handleSetFocus={setFocus} */

function MortgageFigure({
  id,
  amount,
  term,
  interest,
  onhandleAmount,
  onhandleTerm,
  onhandleInterest,
  sign,
  children,
  isFocused,
  setIsFocused,
  error,
}) {
  /* const [isFocused, setIsFocused] = useState(false); */

  const focused = isFocused === id;

  const handleFocus = (id) => {
    setIsFocused(id);
  };

  const handleBlur = () => {
    setIsFocused(0);
  };

  return (
    <div className="mortgage-value">
      <label className="mortgage-label">{children}</label>
      <div
        className={`input-box ${focused ? "focused" : ""} ${
          error ? "error" : ""
        }`}
      >
        {children === "Mortgage Amount" && (
          <>
            <span>{sign}</span>
            <input
              type="text"
              className="fix-r"
              value={amount}
              id={1}
              onChange={onhandleAmount}
              onFocus={(e) => handleFocus(+e.target.id)}
              onBlur={handleBlur}
            />
          </>
        )}

        {children !== "Mortgage Amount" && (
          <>
            <input
              type="text"
              className="fix-l"
              value={sign === "years" ? term : interest}
              id={sign === "years" ? 2 : 3}
              onChange={sign === "years" ? onhandleTerm : onhandleInterest}
              onFocus={(e) => handleFocus(+e.target.id)}
              onBlur={handleBlur}
            />
            <span>{sign}</span>
          </>
        )}
      </div>
      {error && <p className="error-msg">This field is required</p>}
    </div>
  );
}

function MortgageType({ mode, onhandleMode, active, error }) {
  return (
    <div>
      <p>Mortgage Type</p>
      <Type
        value={"repayment"}
        mode={mode}
        onhandleMode={onhandleMode}
        active={active}
      >
        Repayment
      </Type>
      <Type
        value={"interest"}
        mode={mode}
        onhandleMode={onhandleMode}
        active={active}
      >
        Interest Only
      </Type>
      {error && <p className="error-msg">This field is required</p>}
    </div>
  );
}

function Type({ children, value, mode, onhandleMode, active }) {
  return (
    <div className={`mortgage-type ${active === value ? "active" : ""}`}>
      <input
        type="radio"
        name="type"
        value={value}
        id={value}
        onChange={onhandleMode}
        checked={value === mode}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
}

function CalculateButton() {
  return (
    <button>
      <img src="../images/icon-calculator.svg" alt="icon" />
      <span>Calculate Repayments</span>
    </button>
  );
}
